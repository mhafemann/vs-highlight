/* eslint-disable @typescript-eslint/naming-convention */
export const escapeHTML = (str: string): string => {
   return str.replace(
      /[&<>'"\`]/g,
      tag =>
         ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            "'": '&#39;',
            '"': '&quot;',
         }[tag] || tag)
   );
};

export const escapeLeftQuote = (str: string): string => {
   return str.replace(
      /[\`]/g,
      tag =>
         ({
            '`': '&lsquo;',
         }[tag] || tag)
   );
};
