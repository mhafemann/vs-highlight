# vs-highlight (WIP)

[![The MIT License](https://flat.badgen.net/badge/license/MIT/orange)](http://opensource.org/licenses/MIT)

Generate code snippets with [highlight.js](https://highlightjs.org/)

[Supported languages (github.com/highlightjs)](https://github.com/highlightjs/highlight.js/blob/main/SUPPORTED_LANGUAGES.md)
<br>

**Contents:**
- [Features](#features)
- [Commands](#commands)
- [Keybindings](#keybindings)
- [Release Notes](#release-notes)
	- [1.0.0](#100)
- [Todo](#todo)

<br>

## Features

> Convert the current selection:

<img src="./images/vs-highlight-example.gif" alt="vs-highlight example." />
<br>

<br>

## Commands

- `vs-highlight.highlightSelection` Generate snippet from selection.
- `vs-highlight.insertThemeStyles` Insert theme CSS.

<br>

## Keybindings

- <kbd>ctrl</kbd> + <kbd>0</kbd> - Generate snippet from selection.
- <kbd>ctrl</kbd> + <kbd>9</kbd> - Insert theme CSS.

<br>

## Release Notes

### 1.0.0

Initial release.

<br>

## Todo

- [x] Convert to typescript.
- [x] Add command to insert a highlight.js theme that can be selected from a list.
- [ ] Add outputToClipboard setting.
- [ ] Github Gist integration.
- [ ] Write tests.
- [ ] Add a webView / web component for previewing the generated markup.
- [ ] Generate a theme from the current `vscode.window.activeTextEditor` color theme.
- [ ] Create a highlight.js extension to highlight with tailwindcss class names.

<!-- 
## Requirements
## Settings
## Known Issues
-->
