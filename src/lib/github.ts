const fetch = require('node-fetch');
import { message } from './message';
// import { defaults } from './static';
/**
 * Fetches a highlight.js theme (CSS) from a github
 * repository.
 * @param {string} theme The name of the theme to fetch.
 * @returns {Promise<string>} Promise<string> The CSS -
 * for the theme.
 */ // prettier-ignore
export const getTheme = async (
		theme: string
	): Promise<string | void> => {

		const githubURL = 'https://raw.githubusercontent.com/', 
				targetURL: string = `${githubURL}mhafemann/highlight.js/main/src/styles/${theme}`;
		
		try {
			const response = await fetch(targetURL);

			if (!response.ok) {
				const message = `An error has occured: ${response.status}`;
				throw new Error(message);
			}

			const result = await response.text();
			return result;
			
		} catch (error: any) {
			console.error(error);
			message.error(error.message);
		}


};
