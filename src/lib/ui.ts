import { window } from 'vscode';

/**
 * Show a quick pick menu and return the user selection.
 * @param items string[] The items to show in the quick pick menu.
 * @param title string The title of the quick pick menu.
 * @returns {Promise<string | undefined>} Promise<string | undefined> The selected item or undefined.
 */ // prettier-ignore
export const showQuickPick = async (
   items: string[],
   title: string,
   ): Promise<string | undefined> => {

   const result = await window
      .showQuickPick(items, { title: title })
      .then(selection => {
			return selection;
      });

   return result;
};
