import { window } from 'vscode';
import hljs from 'highlight.js';
import { svelteHLJS } from './sveltehljs/svelte';

hljs.registerLanguage('svelte', svelteHLJS);

interface Options {
   language?: string | undefined;
   includePreTag: boolean;
}
/**
 * Highlight a code block.
 * @param code string The code to highlight.
 * @param language string Optional language override.
 * @param options.includePreTag Boolean Wrap the text in a pre and code block. default: true
 * @returns Promise<string | void> The highlighted code.
 */ // prettier-ignore
export const highlight = async (
	text: string,
	options: Options = {
		language: undefined, 
		includePreTag: true 
   }
   ): Promise<string | void> => {

		const lang = options.language ? 
						options.language : 
						window.activeTextEditor ? 
						window.activeTextEditor.document.languageId.toLowerCase() : 
						'';

		if (!hljs.getLanguage(lang)) {
			console.log(`Language (${lang}) is not supported.`);
			return;
		}

		// highlight the selection.
		const result = await hljs.highlight(text, {
			language: lang,
		}).value;
		
		if (options && options.includePreTag) {
			return `<pre><code>${result}</code></pre>`;
		}
      
   return result;
};
