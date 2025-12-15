# Text Translator

A lightweight VS Code extension that translates selected text to Persian (Farsi) using Google Translate directly - **100% free, no API key required**.

[![VS Code Marketplace](https://img.shields.io/badge/VS%20Code-Marketplace-blue)](https://marketplace.visualstudio.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## ✨ Features

### Core Functionality
- **🌐 Instant Translation**: Translate any selected text to Persian (Farsi) with a single command
- **🔍 Auto Language Detection**: Automatically detects the source language using Google Translate
- **💬 Hover Display**: Shows translation in a beautiful hover tooltip directly in the editor
- **🔄 Quick Replace**: Replace selected text with translation via a clickable link in the hover
- **🔗 Google Translate Link**: Direct link to open translation in Google Translate web interface

### Technical Features
- **🚀 No API Key Required**: Uses Google Translate website directly via web scraping
- **⚡ Fast & Lightweight**: Minimal dependencies, optimized performance
- **🛡️ Error Handling**: Friendly error messages for better user experience
- **⚙️ Configurable**: Supports custom source and target language settings
- **📝 Multi-language Support**: Works with any language supported by Google Translate

---

## 🚀 Quick Start

### Installation
1. Open VS Code
2. Go to Extensions (`Ctrl+Shift+X` / `Cmd+Shift+X`)
3. Search for "Text Translator"
4. Click **Install**

### Usage

#### Method 1: Command Palette
1. **Select** any text in your editor
2. Open **Command Palette** (`Ctrl+Shift+P` / `Cmd+Shift+P`)
3. Type: `Translate Selection (Google)`
4. Press **Enter**
5. View translation in the **hover tooltip**
6. Click **"Replace"** link to replace the text with translation

#### Method 2: Keyboard Shortcut
You can assign a custom keyboard shortcut:
1. Open **Keyboard Shortcuts** (`Ctrl+K Ctrl+S`)
2. Search for `Translate Selection (Google)`
3. Assign your preferred shortcut

---

## ⚙️ Configuration

The extension supports the following settings (accessible via VS Code Settings):

- **`translator.sourceLanguage`**: Source language code (default: `"auto"` for auto-detection)
- **`translator.targetLanguage`**: Target language code (default: `"fa"` for Persian/Farsi)

### Example Settings
```json
{
  "translator.sourceLanguage": "auto",
  "translator.targetLanguage": "fa"
}
```

### Supported Language Codes
Use standard ISO 639-1 language codes (e.g., `en`, `fa`, `ar`, `fr`, `de`, `es`, etc.)

---

## 📋 Requirements

- **VS Code**: Version 1.105.1 or higher
- **Internet Connection**: Required for Google Translate API calls

---

## 🎯 Use Cases

- **Code Comments**: Translate comments in your code to Persian
- **Documentation**: Translate documentation snippets
- **Learning**: Learn Persian translations while coding
- **International Projects**: Quick translation for multilingual projects

---

## 🔧 Commands

The extension provides the following commands:

| Command | Description |
|---------|-------------|
| `Translate Selection (Google)` | Translate selected text to Persian |
| `Replace With Translation` | Replace selected text with the last translation |
| `Close Translation` | Close the translation hover |

---

## 🐛 Troubleshooting

### Translation Not Working?
- **Check Internet Connection**: Ensure you have an active internet connection
- **Verify Selection**: Make sure you've selected text before running the command
- **Check Language Settings**: Verify your `translator.targetLanguage` setting

### Error Messages?
- If you see "Translation failed", check your internet connection
- If translation parsing fails, try selecting a shorter text
- Report issues on [GitHub Issues](https://github.com/amirmaghami-extensions/text-translator/issues)

---

## 📝 Release Notes

### Version 1.0.0
- ✨ Initial release
- 🌐 Google Translate integration via web scraping
- 💬 Hover tooltip display
- 🔄 Quick replace functionality
- ⚙️ Configurable language settings
- 🚀 No API key required

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🔗 Links

- **Homepage**: [amirmaghami.ir](https://amirmaghami.ir)
- **GitHub Repository**: [text-translator](https://github.com/amirmaghami-extensions/text-translator)
- **Report Issues**: [GitHub Issues](https://github.com/amirmaghami-extensions/text-translator/issues)
- [Google Translate](https://translate.google.com/)
- [VS Code Extension API](https://code.visualstudio.com/api)

---

## ⚠️ Important Note

This extension uses Google Translate's public website directly (via web scraping) to provide free translations. No API key or registration is required. 

**Please use responsibly and in accordance with Google's Terms of Service.**

---

## 👨‍💻 Author

**Amir Maghami**

- Website: [amirmaghami.ir](https://amirmaghami.ir)
- GitHub: [@amirmaghami-extensions](https://github.com/amirmaghami-extensions)

---

**Enjoy translating! 🎉**
