import { window } from 'vscode';
import { message } from './message';

/**
 * Show a quick pick menu and return the user selection.
 * @param items string[] The items to show in the quick pick menu.
 * @returns {Promise<string | undefined>} Promise<string | null> The selected item or null.
 */ // prettier-ignore
export const showQuickPick = async (
   items: string[]
   ): Promise<string | null> => {

   const result = await window
      .showQuickPick(items, { title: 'Select a theme:' })
      .then(selection => {

         if (selection) {
            return selection;
         } else {
            message.info('Nothing selected.');
            return null;
         }
         
      });

   return result;
};
