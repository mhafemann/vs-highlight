import { ExtensionContext, Disposable } from 'vscode';
import { commands } from 'vscode';
import {
   getTheme,
   showQuickPick,
   themes,
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
         const selection = await showQuickPick(themes);

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
         const text = await getSelection();

         if (text) {
            const highlighted = await highlight(text, {
               includePreTag: true,
            });

            if (highlighted) {
               insertText(highlighted);
            }

            message.info('Selection highlighted.');
         }
      }
   );

   // register the commands.
   context.subscriptions.push(insertStyles);
   context.subscriptions.push(highlightSelection);
}

// method called when extension is deactivated.
export function deactivate() {}
