import { window } from 'vscode';

/**
 * Insert the given text into the current editor.
 * @param {string} text The text to insert.
 * @returns {void} Promise<void>
 */ // prettier-ignore
export const insertText = async (text: string): Promise<void> => {
   const editor = window.activeTextEditor;

   // if there is no active editor, do nothing.
   if (editor && text) {
      // if there is no selection, insert the text -
      // at the current cursor position.
      if (!editor.selection.isEmpty) {
         editor.edit(editBuilder => {
            editBuilder.replace(editor.selection, text);
         });
      } else {
         editor.edit(editBuilder => {
            editBuilder.insert(
               editor.selection.active,
               text
            );
         });
      }
   }
};

/**
 * Get the text of the current selection.
 * @returns {Promise<string | void>} Promise< string | void > The text of the current selection.
 */ // prettier-ignore
export const getSelection = async (): Promise<string | void> => {
   const editor = window.activeTextEditor;

   // if there is no active editor, do nothing.
   if (editor) {
      return editor.document.getText(editor.selection);
   }
};
