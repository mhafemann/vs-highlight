import { window } from 'vscode';
import hljs from 'highlight.js';
// import javascript from 'highlight.js/lib/languages/javascript';
// import typescript from 'highlight.js/lib/languages/typescript';
// import xml from 'highlight.js/lib/languages/xml';
// import css from 'highlight.js/lib/languages/css';
// import json from 'highlight.js/lib/languages/json';
// import scss from 'highlight.js/lib/languages/scss';
// import less from 'highlight.js/lib/languages/less';
// import markdown from 'highlight.js/lib/languages/markdown';
// import bash from 'highlight.js/lib/languages/bash';
// import php from 'highlight.js/lib/languages/php';
// import python from 'highlight.js/lib/languages/python';
// import ruby from 'highlight.js/lib/languages/ruby';
// import java from 'highlight.js/lib/languages/java';
// import csharp from 'highlight.js/lib/languages/csharp';
// import cpp from 'highlight.js/lib/languages/cpp';
// import plaintext from 'highlight.js/lib/languages/plaintext';
import { svelteHLJS } from './sveltehljs/svelte';

// hljs.registerLanguage('js', javascript);
// hljs.registerLanguage('ts', typescript);
// hljs.registerLanguage('xml', xml);
// hljs.registerLanguage('css', css);
// hljs.registerLanguage('json', json);
// hljs.registerLanguage('scss', scss);
// hljs.registerLanguage('less', less);
// hljs.registerLanguage('markdown', markdown);
// hljs.registerLanguage('bash', bash);
// hljs.registerLanguage('php', php);
// hljs.registerLanguage('python', python);
// hljs.registerLanguage('ruby', ruby);
// hljs.registerLanguage('java', java);
// hljs.registerLanguage('csharp', csharp);
// hljs.registerLanguage('cpp', cpp);
// hljs.registerLanguage('txt', plaintext);
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
 * - **type:** `Promise<string | null>` <br>
 * - The highlighted code. or null<br>
 **/ // prettier-ignore
export const highlight = async (
	text: string,
	options: Options = {
		language: undefined,
		includePreTag: true,
	}): Promise<string | null> => {

   // if no language parameter is passed, get the language from the document.languageId.
   const lang = options.language
      ? options.language
      : window.activeTextEditor
      ? window.activeTextEditor.document.languageId.toLowerCase()
      : 'txt';

   if (!hljs.getLanguage(lang)) {
      console.log(`Language (${lang}) is not supported.`);
      return null;
   }
	
   // highlight the selection.
   const result = await hljs.highlight(text, {
      language: lang,
   }).value;

   if (options && options.includePreTag) {
      return `<pre><code>\n${result}\n</code></pre>`;
   }

   return result;
};
