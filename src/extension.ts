import * as vscode from 'vscode'

let lastTranslation = ''
let lastSelection: vscode.Selection | null = null
let lastSourceText = ''
let lastSourceLang = ''
let lastTargetLang = ''

// --------------------
// Config
// --------------------
function getTranslatorConfig() {
  const config = vscode.workspace.getConfiguration('translator')
  return {
    sourceLang: config.get<string>('sourceLanguage', 'auto'),
    targetLang: config.get<string>('targetLanguage', 'fa')
  }
}

// --------------------
// Google Translate (web scraping)
// --------------------
async function translateTextGoogleWeb(
  text: string,
  sourceLang: string,
  targetLang: string
): Promise<string> {
  const url = `https://translate.google.com/m?hl=en&sl=${sourceLang}&tl=${targetLang}&q=${encodeURIComponent(
    text
  )}`

  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0',
      Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      'Accept-Charset': 'UTF-8',
      'Accept-Language': 'en-US,en;q=0.9'
    }
  })

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`)
  }

  // Ensure UTF-8 encoding
  const buffer = await res.arrayBuffer()
  const decoder = new TextDecoder('utf-8')
  const html = decoder.decode(buffer)

  // Simple regex-based parsing instead of cheerio
  // Look for div.result-container content
  const match = html.match(/<div[^>]*class="result-container"[^>]*>(.*?)<\/div>/is)
  if (!match || !match[1]) {
    throw new Error('Google translation parse failed')
  }

  // Remove HTML tags and decode common entities
  let translation = match[1]
    .replace(/<[^>]+>/g, '') // Remove HTML tags
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/g, "'")
    .replace(/&#x2F;/g, '/')
    .replace(/&#x60;/g, '`')
    .replace(/&apos;/g, "'")
    .trim()

  if (!translation) {
    throw new Error('Google translation parse failed')
  }

  return translation
}

// --------------------
// Activate
// --------------------
export function activate(context: vscode.ExtensionContext) {
  console.log('Translator extension activated')

  // Command: Translate Selection
  context.subscriptions.push(
    vscode.commands.registerCommand('translator.translateSelection', async () => {
      const editor = vscode.window.activeTextEditor
      if (!editor) {
        return
      }

      const selection = editor.selection
      if (selection.isEmpty) {
        vscode.window.showWarningMessage('Select some text first')
        return
      }

      const text = editor.document.getText(selection)
      const { sourceLang, targetLang } = getTranslatorConfig()

      try {
        lastTranslation = await translateTextGoogleWeb(text, sourceLang, targetLang)
        lastSelection = selection
        lastSourceText = text
        lastSourceLang = sourceLang
        lastTargetLang = targetLang

        vscode.commands.executeCommand('editor.action.showHover')
      } catch (err: any) {
        vscode.window.showErrorMessage(err.message || 'Translation failed')
      }
    })
  )

  // Hover Provider
  context.subscriptions.push(
    vscode.languages.registerHoverProvider('*', {
      provideHover() {
        if (!lastTranslation || !lastSelection) {
          return null
        }

        const md = new vscode.MarkdownString()
        md.appendMarkdown(`**Translation:**\n\n`)
        md.appendText(lastTranslation)
        md.appendMarkdown(`\n\n---\n`)
        md.appendMarkdown(`[🔁 Replace](command:translator.replaceLast) | `)

        // Create Google Translate URL with the text
        const googleTranslateUrl = `https://translate.google.com/?sl=${lastSourceLang}&tl=${lastTargetLang}&text=${encodeURIComponent(
          lastSourceText
        )}`
        md.appendMarkdown(`[🌐 Open in Google Translate](${googleTranslateUrl})`)

        md.isTrusted = true
        return new vscode.Hover(md, lastSelection)
      }
    })
  )

  // Replace command
  context.subscriptions.push(
    vscode.commands.registerCommand('translator.replaceLast', async () => {
      const editor = vscode.window.activeTextEditor
      if (!editor || !lastSelection) {
        return
      }

      await editor.edit(editBuilder => {
        editBuilder.replace(lastSelection!, lastTranslation)
      })

      lastTranslation = ''
      lastSelection = null
      lastSourceText = ''
      lastSourceLang = ''
      lastTargetLang = ''
    })
  )
}

// --------------------
export function deactivate() {}
