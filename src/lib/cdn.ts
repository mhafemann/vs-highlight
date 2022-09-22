export const cdnjs = (library: string, file: string) =>
   `https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/${library}/${file}`;
export const jsdelivr = (library: string, file: string) =>
   `https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.6.0/${library}/${file}`;
export const unpkg = (library: string, file: string) =>
   `https://unpkg.com/browse/@highlightjs/cdn-assets@11.6.0/${library}/${file}`;
