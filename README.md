# Text Translator

A VSCode extension that translates selected text to Persian (Farsi) using Google Translate website directly (free, no API key required).

## Features

- **Translate to Persian**: Instantly translate any selected text to Persian (Farsi)
- **Auto Language Detection**: Automatically detects the source language using Google Translate
- **Two Options**:
  - Show translation in a message
  - Replace selected text with translation
- **No API Key Required**: Uses Google Translate website directly via web scraping (cheerio)
- **Progress Indicator**: Shows translation progress with a friendly notification
- **High Quality Translations**: Powered by Google Translate for accurate results
- **100% Free**: No registration, no API keys, no limits

## Usage

1. Select any text in the editor
2. Open Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`)
3. Run the command: **"Translate Selection"**
4. Choose your preferred action:
   - **Show in Message**: Display the translation in an information message
   - **Replace Text**: Replace the selected text with the translation

## Requirements

- Internet connection (for API calls to Google Translate)
- VSCode version 1.107.0 or higher

## Extension Settings

This extension does not add any VSCode settings.

## Known Issues

None at the moment. If you encounter any issues, please report them on the extension's GitHub repository.

## Release Notes

### 0.0.3

- Switched to using Google Translate website directly via cheerio (web scraping)
- Removed dependency on google-translate-api package
- 100% free, no API keys required

### 0.0.2

- Updated to use google-translate-api package

### 0.0.1

Initial release of Text Translator extension.

- Translate selected text to Persian
- Auto-detect source language
- Show translation or replace text options
- Error handling with friendly messages

---

## For more information

- [Google Translate](https://translate.google.com/)
- [VSCode Extension API](https://code.visualstudio.com/api)
- [cheerio](https://cheerio.js.org/) - HTML parsing library

## Note

This extension uses Google Translate website directly (via web scraping with cheerio) to provide free translations. No API key or registration is required. The extension automatically detects the source language and supports translations up to 5000 characters per request.

**Important:** This extension scrapes Google Translate's public website. Please use responsibly and in accordance with Google's Terms of Service.

**Enjoy translating!**
