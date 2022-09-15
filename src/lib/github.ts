import fetch from 'node-fetch';
import { message } from './message';
import { defaultTheme, githubURL } from './static';

/**
 * Fetches a highlight.js theme (CSS) from a github
 * repository.
 * @param {string} theme The name of the theme to fetch.
 * @returns {Promise<string | void>} Promise<string> The CSS - for the theme.
 */
// prettier-ignore
export const getTheme = async (
	theme: string
	): Promise<string | void> => {
	
	// URL constructed from the theme name.
	const targetURL: string = `${githubURL}${theme}`;

	// Fetch the theme from github.
	try {
		const response = await fetch(targetURL);

		if (!response.ok) {
			throw new Error(`${response.status}`);
		}

		const result = await response.text();
		return result;
		
	} catch (error: any) {
		console.error(error);

		if (error.message === '404') {
			console.error(error);

			message.error(`Unable to fetch theme: ${theme} from github.\n 
			Using default theme.\n
			Make sure your machine is connected to the internet.
			If this problem persists, please open an issue on github.`);

			return defaultTheme;
		}

		return;
	}
};
