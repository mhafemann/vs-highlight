import { window } from 'vscode';
import hljs from 'highlight.js';
import { svelteHLJS } from './sveltehljs/svelte';

hljs.registerLanguage('svelte', svelteHLJS);

interface Options {
   language?: string | undefined;
   includePreTag: boolean;
}

/**
 * ### Highlight code with [highlight.js](highlightjs.org/).
 * @param code <br>
 * - **type:** `string | undefined`
 * - **default:** `undefined`
 * - string The code to highlight.
 * @param options.language <br>
 * - **type:** `string | undefined`
 * - **default:** `undefined`
 * - Optional language override. *The language will be set to document.languageId if not defined.* <br>
 * @param options.includePreTag <br>
 * - **type:** `boolean`
 * - **default:** `true`
 * - Wrap the output with `<pre>` and `<code>` tags. <br>
 * @returns <br>
 * - **type:** `Promise<string | void>` <br>
 * - The highlighted code.<br>
 **/ // prettier-ignore
export const highlight = async (
	text: string,
	options: Options = {
		language: undefined,
		includePreTag: true,
	}): Promise<string | void> => {

   // if no language parameter is passed, get the language from the document.languageId.
   const lang = options.language
      ? options.language
      : window.activeTextEditor
      ? window.activeTextEditor.document.languageId.toLowerCase()
      : '';

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
