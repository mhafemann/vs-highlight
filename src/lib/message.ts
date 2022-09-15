import { window } from 'vscode';

export const message = {
   /**
    * Display a window error Message
    * @param message :string The message to display
    * @returns void :Promise<void>
    */
   async error(message: string): Promise<void> {
      window.showErrorMessage(`VS-Highlighter: ${message}`);
   },
   /**
    * Display a window info Message
    * @param message :string The message to display
    * @returns void :Promise<void>
    */
   async info(message: string): Promise<void> {
      window.showInformationMessage(
         `VS-Highlighter: ${message}`
      );
   },
   /**
    * Display a window warning Message
    * @param message :string The message to display
    * @returns void :Promise<void>
    */
   async warning(message: string): Promise<void> {
      window.showWarningMessage(
         `VS-Highlighter: ${message}`
      );
   },
};
