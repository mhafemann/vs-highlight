import { window } from 'vscode';
import { message } from './message';

/**
 * Show a quick pick menu and return the user selection.
 * @param items string[] The items to show in the quick pick menu.
 * @param title string The title of the quick pick menu.
 * @returns {Promise<string | undefined>} Promise<string | null> The selected item or null.
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

// prettier-ignore
export const showConfirmation = async (
	title: string,
	prompt: string,
	initialValue: string
) => {
	
const result = await window.showInputBox({
	title: 'Confirm selection',
	prompt: prompt,
});

if (result === 'y') {
	console.log('result is y');
} else {
	console.log('result is not y');
}
};
