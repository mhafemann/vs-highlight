# VSCode Extension Notes

Notes on creating vscode extensions.

Content:
- [Setup](#setup)
	- [Yo Code (Extension Generator)](#yo-code-extension-generator)
	- [Install the Generator](#install-the-generator)
	- [Start a new project](#start-a-new-project)
- [Configuration](#configuration)
	- [Example package.json](#example-packagejson)
- [VScode API Links](#vscode-api-links)
- [Data](#data)
- [HLJS](#hljs)
- [Markdown](#markdown)
- [Changelogs](#changelogs)
- [Packaging Extension](#packaging-extension)

## Setup

### Yo Code (Extension Generator)

Microsoft has a [Yeoman](https://yeoman.io/) generator to help get you started. We plan to add templates for most extension/customization types into this.

### Install the Generator

Install Yeoman and the VS Code Extension generator:

```bash
npm install -g yo generator-code
```

### Start a new project
```bash
yo code
```

## Configuration
[Contribute configuration keys that will be exposed to the user.](https://code.visualstudio.com/api/extension-capabilities/common-capabilities#configuration)

### Example package.json
> `package.json` - Extension configuration.

```json
{
   "name": "vs-highlight",
   "displayName": "vs-highlight",
   "description": "Generate code snippets from selection with highlight.js.",
   "version": "1.0.0",
   "license": "MIT",
   "engines": {
      "vscode": "^1.71.0"
   },
   "categories": [
      "Other"
   ],
   "activationEvents": [
      "onCommand:vs-highlight.highlightSelection",
      "onCommand:vs-highlight.insertThemeCSS"
   ],
   "main": "./extension.js",
   "contributes": {
      "commands": [
         {
            "command": "vs-highlight.insertThemeCSS",
            "title": "vs-highlight: Insert theme CSS."
         },
         {
            "command": "vs-highlight.highlightSelection",
            "title": "vs-highlight: Generate snippet from selection."
         }
      ],
      "keybindings": [
         {
            "key": "ctrl+0",
            "command": "vs-highlight.highlightSelection"
         },
         {
            "key": "ctrl+9",
            "command": "vs-highlight.insertThemeCSS"
         }
      ],
      "configuration": {
         "title": "vs-highlight"
      }
   },
   "scripts": {
      "lint": "eslint .",
      "pretest": "npm run lint",
      "test": "node ./test/runTest.js"
   },
   "devDependencies": {
      "@types/glob": "^7.2.0",
      "@types/mocha": "^9.1.1",
      "@types/node": "16.x",
      "@types/vscode": "^1.71.0",
      "@vscode/test-electron": "^2.1.5",
      "eslint": "^8.20.0",
      "glob": "^8.0.3",
      "mocha": "^10.0.0",
      "typescript": "^4.7.4"
   },
   "dependencies": {
      "highlight.js": "^11.6.0",
      "highlightjs-svelte": "^1.0.6"
   }
}

```

## VScode API Links
[VScode API](https://code.visualstudio.com/api/references/vscode-api)

## Data
[Caching data for your VSCode extension](https://www.eliostruyf.com/devhack-caching-data-vscode-extension/)

## HLJS
[Read the docs (hljs)](https://highlightjs.readthedocs.io/en/latest/api.html#configure)
[Supported Languages](https://github.com/highlightjs/highlight.js/blob/main/SUPPORTED_LANGUAGES.md)
[Theme Demo](https://highlightjs.org/static/demo/)
[Themes](https://github.com/highlightjs/highlight.js/tree/main/src/styles)

## Markdown

Add badges to markdown with [flatbadgen](https://flat.badgen.net/) service.
```md
[![The MIT License](https://flat.badgen.net/badge/license/MIT/orange)](http://opensource.org/licenses/MIT)
[![GitHub](https://flat.badgen.net/github/release/idleberg/vscode-applescript)](https://github.com/idleberg/vscode-applescript/releases)
[![Visual Studio Marketplace](https://vsmarketplacebadge.apphb.com/installs-short/idleberg.applescript.svg?style=flat-square)](https://marketplace.visualstudio.com/items?itemName=idleberg.applescript)
[![CI](https://img.shields.io/github/workflow/status/idleberg/vscode-applescript/CI?style=flat-square)](https://github.com/idleberg/vscode-applescript/actions)
```

## Changelogs

[Keeping a Changelog](https://keepachangelog.com/en/1.0.0/)

## Packaging Extension
[vscode ext docs](https://code.visualstudio.com/api/working-with-extensions/publishing-extension#packaging-extensions)