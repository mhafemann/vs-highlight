import { ExtensionContext, Disposable } from 'vscode';
import { commands, window } from 'vscode';
import {
   getTheme,
   showQuickPick,
   showConfirmation,
   themes,
   languages,
   insertText,
   getSelection,
   highlight,
   message,
} from './lib';

export function activate(context: ExtensionContext) {
   // insert the given text into the current editor.
   const insertStyles: Disposable = commands.registerCommand(
      'vs-highlight.insertThemeStyles',
      async () => {
         const selection = await showQuickPick(themes, 'Select a theme:');

         if (selection) {
            const css = await getTheme(selection);
            if (css) {
               insertText(css);
            }
         }
      }
   );

   // highlight the current selection.
   const highlightSelection: Disposable = commands.registerCommand(
      'vs-highlight.highlightSelection',
      async () => {
         // get the current selection
         const text = await getSelection();

         // get the language and convert to lowercase
         const selectedLanguage = await showQuickPick(
            languages,
            'Select a language:'
         );
         const language = selectedLanguage?.toLowerCase();

         // if the user selected a language and there is text selected -
         // highlight the text
         if (text && language) {
            const highlighted = await highlight(text, {
               language: language,
               includePreTag: true,
            });

            // if there is highlighted text, insert it into the -
            // document and display a notification else display an error
            if (highlighted) {
               insertText(highlighted);
            } else {
               message.error('Error highlighting text.');
            }
         }
      }
   );

   // register the commands.
   context.subscriptions.push(insertStyles);
   context.subscriptions.push(highlightSelection);
}

// method called when extension is deactivated.
export function deactivate() {}
