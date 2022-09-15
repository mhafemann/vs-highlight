/**
 * The base URL for the github repository that contains the themes.
 */
export const githubURL: string =
   'https://raw.githubusercontent.com/mhafemann/highlight.js/main/src/styles/';

/**
 * Default highlight.js theme to use if the user doesn't specify one.
 * Also used if there is an error fetching a theme from github.
 */
export const defaultTheme: string = `.hljs {
	color: #abb2bf;
	background: #0e141b;
	padding: 2rem;
	border-radius: 5px;
	font-size: 16px;
}

.hljs::selection,
.hljs ::selection {
	background-color: #464b50;
	color: #a7a7a7;
}

/* purposely do not highlight these things */
.hljs-formula,
.hljs-params,
.hljs-property {
}

/* base03 - #5f5a60 -  Comments, Invisibles, Line Highlighting */
.hljs-comment {
	color: #5f5a60;
}

/* base04 - #838184 -  Dark Foreground (Used for status bars) */
.hljs-tag {
	color: #838184;
}

/* base05 - #a7a7a7 -  Default Foreground, Caret, Delimiters, Operators */
.hljs-subst,
.hljs-punctuation,
.hljs-operator {
	color: #a7a7a7;
}

.hljs-operator {
	opacity: 0.7;
}

/* base08 - Variables, XML Tags, Markup Link Text, Markup Lists, Diff Deleted */
.hljs-bullet,
.hljs-variable,
.hljs-template-variable,
.hljs-selector-tag,
.hljs-name,
.hljs-deletion {
	color: #cf6a4c;
}

/* base09 - Integers, Boolean, Constants, XML Attributes, Markup Link Url */
.hljs-symbol,
.hljs-number,
.hljs-link,
.hljs-attr,
.hljs-variable.constant_,
.hljs-literal {
	color: #cda869;
}

/* base0A - Classes, Markup Bold, Search Text Background */
.hljs-title,
.hljs-class .hljs-title,
.hljs-title.class_ {
	color: #f9ee98;
}

.hljs-strong {
	font-weight: bold;
	color: #f9ee98;
}

/* base0B - Strings, Inherited Class, Markup Code, Diff Inserted */
.hljs-code,
.hljs-addition,
.hljs-title.class_.inherited__,
.hljs-string {
	color: #8f9d6a;
}

/* base0C - Support, Regular Expressions, Escape Characters, Markup Quotes */
.hljs-built_in,
	.hljs-doctag, /* guessing */
	.hljs-quote,
	.hljs-keyword.hljs-atrule,
	.hljs-regexp {
	color: #afc4db;
}

/* base0D - Functions, Methods, Attribute IDs, Headings */
.hljs-function .hljs-title,
.hljs-attribute,
.ruby .hljs-property,
.hljs-title.function_,
.hljs-section {
	color: #7587a6;
}

/* base0E - Keywords, Storage, Selector, Markup Italic, Diff Changed */
.hljs-type,
	/* .hljs-selector-id, */
	/* .hljs-selector-class, */
	/* .hljs-selector-attr, */
	/* .hljs-selector-pseudo, */
	.hljs-template-tag,
	.diff .hljs-meta,
	.hljs-keyword {
	color: #9b859d;
}
.hljs-emphasis {
	color: #9b859d;
	font-style: italic;
}

/* base0F - Deprecated, Opening/Closing Embedded Language Tags, e.g. <?php ?> */
.hljs-meta,
	/*
	prevent top level .keyword and .string scopes
	from leaking into meta by accident
	*/
	.hljs-meta .hljs-keyword,
	.hljs-meta .hljs-string {
	color: #9b703f;
}

.hljs-meta .hljs-keyword,
	/* for v10 compatible themes */
	.hljs-meta-keyword {
	font-weight: bold;
}`;
