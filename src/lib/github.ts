const fetch = require('node-fetch');
import { message } from './message';
import { defaultTheme, githubURL } from './static';

/**
 * Fetches a highlight.js theme (CSS) from a github
 * repository.
 * @param {string} theme The name of the theme to fetch.
 * @returns {Promise<string>} Promise<string> The CSS - for the theme.
 */
// prettier-ignore
export const getTheme = async (
	theme: string
	): Promise<string> => {

	// URL constructed from the theme name.
	const targetURL: string = `${githubURL}${theme}`;

	// Fetch the theme from github.
	try {
		const response = await fetch(targetURL);

		if (!response.ok) {
			const errorMessage = `An error has occured: ${response.status}`;
			throw new Error(errorMessage);
		}

		const result = await response.text();
		return result;
		
	} catch (error: any) {
		console.error(error);
		message.error(error.message);
		return defaultTheme;
	}
};
