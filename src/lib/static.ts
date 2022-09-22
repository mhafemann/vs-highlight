/**
 * a Map containing a list of all the languages -
 * supported by the library
 */
export const languages = new Map();
languages
   .set('Bash', 'bash')
   .set('C', 'c')
   .set('C#', 'csharp')
   .set('C++', 'cpp')
   .set('CSS', 'css')
   .set('Diff', 'diff')
   .set('Go', 'go')
   .set('GraphQL', 'graphql')
   .set('HTML', 'html')
   .set('JSON', 'json')
   .set('Java', 'java')
   .set('JavaScript', 'javascript')
   .set('Kotlin', 'kotlin')
   .set('Less', 'less')
   .set('Lua', 'lua')
   .set('Makefile', 'makefile')
   .set('Markdown', 'md')
   .set('Objective-C', 'objc')
   .set('PHP', 'php')
   .set('Perl', '')
   .set('Plain text', 'txt')
   .set('Python', 'py')
   .set('Python REPL', 'pycon')
   .set('R', 'r')
   .set('Ruby', 'ruby')
   .set('Rust', 'rust')
   .set('SCSS', 'scss')
   .set('SQL', 'sql')
   .set('Shell Session', 'shell')
   .set('Swift', 'swift')
   .set('Svelte', 'svelte')
   .set('TOML, also INI', 'ini')
   .set('TypeScript', 'ts')
   .set('Visual Basic .NET', 'vb')
   .set('WebAssembly', 'webassembly')
   .set('YAML ', 'yaml');

/**
 * The base URL for the github repository that contains the themes.
 */
export const githubURL: string =
   'https://raw.githubusercontent.com/mhafemann/highlight.js/main/src/styles/';

export const themes: string[] = [
   'a11y-dark.css',
   'a11y-light.css',
   'agate.css',
   'an-old-hope.css',
   'androidstudio.css',
   'arduino-light.css',
   'arta.css',
   'ascetic.css',
   'atom-one-dark-reasonable.css',
   'atom-one-dark.css',
   'atom-one-light.css',
   'brown-paper.css',
   'codepen-embed.css',
   'color-brewer.css',
   'dark.css',
   'default.css',
   'devibeans.css',
   'docco.css',
   'far.css',
   'felipec.css',
   'foundation.css',
   'github-dark-dimmed.css',
   'github-dark.css',
   'github.css',
   'gml.css',
   'googlecode.css',
   'gradient-dark.css',
   'gradient-light.css',
   'grayscale.css',
   'hybrid.css',
   'idea.css',
   'intellij-light.css',
   'ir-black.css',
   'isbl-editor-dark.css',
   'isbl-editor-light.css',
   'kimbie-dark.css',
   'kimbie-light.css',
   'lightfair.css',
   'lioshi.css',
   'magula.css',
   'mono-blue.css',
   'monokai-sublime.css',
   'monokai.css',
   'night-owl.css',
   'nnfx-dark.css',
   'nnfx-light.css',
   'nord.css',
   'obsidian.css',
   'panda-syntax-dark.css',
   'panda-syntax-light.css',
   'paraiso-dark.css',
   'paraiso-light.css',
   'pojoaque.css',
   'purebasic.css',
   'qtcreator-dark.css',
   'qtcreator-light.css',
   'rainbow.css',
   'routeros.css',
   'school-book.css',
   'shades-of-purple.css',
   'srcery.css',
   'stackoverflow-dark.css',
   'stackoverflow-light.css',
   'sunburst.css',
   'tokyo-night-dark.css',
   'tokyo-night-light.css',
   'tomorrow-night-blue.css',
   'tomorrow-night-bright.css',
   'vs.css',
   'vs2015.css',
   'xcode.css',
   'xt256.css',
   'base16/3024.css',
   'base16/apathy.css',
   'base16/apprentice.css',
   'base16/ashes.css',
   'base16/atelier-cave-light.css',
   'base16/atelier-cave.css',
   'base16/atelier-dune-light.css',
   'base16/atelier-dune.css',
   'base16/atelier-estuary-light.css',
   'base16/atelier-estuary.css',
   'base16/atelier-forest-light.css',
   'base16/atelier-forest.css',
   'base16/atelier-heath-light.css',
   'base16/atelier-heath.css',
   'base16/atelier-lakeside-light.css',
   'base16/atelier-lakeside.css',
   'base16/atelier-plateau-light.css',
   'base16/atelier-plateau.css',
   'base16/atelier-savanna-light.css',
   'base16/atelier-savanna.css',
   'base16/atelier-seaside-light.css',
   'base16/atelier-seaside.css',
   'base16/atelier-sulphurpool-light.css',
   'base16/atelier-sulphurpool.css',
   'base16/atlas.css',
   'base16/bespin.css',
   'base16/black-metal-bathory.css',
   'base16/black-metal-burzum.css',
   'base16/black-metal-dark-funeral.css',
   'base16/black-metal-gorgoroth.css',
   'base16/black-metal-immortal.css',
   'base16/black-metal-khold.css',
   'base16/black-metal-marduk.css',
   'base16/black-metal-mayhem.css',
   'base16/black-metal-nile.css',
   'base16/black-metal-venom.css',
   'base16/black-metal.css',
   'base16/brewer.css',
   'base16/bright.css',
   'base16/brogrammer.css',
   'base16/brush-trees-dark.css',
   'base16/brush-trees.css',
   'base16/chalk.css',
   'base16/circus.css',
   'base16/classic-dark.css',
   'base16/classic-light.css',
   'base16/codeschool.css',
   'base16/colors.css',
   'base16/cupcake.css',
   'base16/cupertino.css',
   'base16/danqing.css',
   'base16/darcula.css',
   'base16/dark-violet.css',
   'base16/darkmoss.css',
   'base16/darktooth.css',
   'base16/decaf.css',
   'base16/default-dark.css',
   'base16/default-light.css',
   'base16/dirtysea.css',
   'base16/dracula.css',
   'base16/edge-dark.css',
   'base16/edge-light.css',
   'base16/eighties.css',
   'base16/embers.css',
   'base16/equilibrium-dark.css',
   'base16/equilibrium-gray-dark.css',
   'base16/equilibrium-gray-light.css',
   'base16/equilibrium-light.css',
   'base16/espresso.css',
   'base16/eva-dim.css',
   'base16/eva.css',
   'base16/flat.css',
   'base16/framer.css',
   'base16/fruit-soda.css',
   'base16/gigavolt.css',
   'base16/github.css',
   'base16/google-dark.css',
   'base16/google-light.css',
   'base16/grayscale-dark.css',
   'base16/grayscale-light.css',
   'base16/green-screen.css',
   'base16/gruvbox-dark-hard.css',
   'base16/gruvbox-dark-medium.css',
   'base16/gruvbox-dark-pale.css',
   'base16/gruvbox-dark-soft.css',
   'base16/gruvbox-light-hard.css',
   'base16/gruvbox-light-medium.css',
   'base16/gruvbox-light-soft.css',
   'base16/hardcore.css',
   'base16/harmonic16-dark.css',
   'base16/harmonic16-light.css',
   'base16/heetch-dark.css',
   'base16/heetch-light.css',
   'base16/helios.css',
   'base16/hopscotch.css',
   'base16/horizon-dark.css',
   'base16/horizon-light.css',
   'base16/humanoid-dark.css',
   'base16/humanoid-light.css',
   'base16/ia-dark.css',
   'base16/ia-light.css',
   'base16/icy-dark.css',
   'base16/ir-black.css',
   'base16/isotope.css',
   'base16/kimber.css',
   'base16/london-tube.css',
   'base16/macintosh.css',
   'base16/marrakesh.css',
   'base16/materia.css',
   'base16/material-darker.css',
   'base16/material-lighter.css',
   'base16/material-palenight.css',
   'base16/material-vivid.css',
   'base16/material.css',
   'base16/mellow-purple.css',
   'base16/mexico-light.css',
   'base16/mocha.css',
   'base16/monokai.css',
   'base16/nebula.css',
   'base16/nord.css',
   'base16/nova.css',
   'base16/ocean.css',
   'base16/oceanicnext.css',
   'base16/one-light.css',
   'base16/onedark.css',
   'base16/outrun-dark.css',
   'base16/papercolor-dark.css',
   'base16/papercolor-light.css',
   'base16/paraiso.css',
   'base16/pasque.css',
   'base16/phd.css',
   'base16/pico.css',
   'base16/pop.css',
   'base16/porple.css',
   'base16/qualia.css',
   'base16/railscasts.css',
   'base16/rebecca.css',
   'base16/ros-pine-dawn.css',
   'base16/ros-pine-moon.css',
   'base16/ros-pine.css',
   'base16/sagelight.css',
   'base16/sandcastle.css',
   'base16/seti-ui.css',
   'base16/shapeshifter.css',
   'base16/silk-dark.css',
   'base16/silk-light.css',
   'base16/snazzy.css',
   'base16/solar-flare-light.css',
   'base16/solar-flare.css',
   'base16/solarized-dark.css',
   'base16/solarized-light.css',
   'base16/spacemacs.css',
   'base16/summercamp.css',
   'base16/summerfruit-dark.css',
   'base16/summerfruit-light.css',
   'base16/synth-midnight-terminal-dark.css',
   'base16/synth-midnight-terminal-light.css',
   'base16/tango.css',
   'base16/tender.css',
   'base16/tomorrow-night.css',
   'base16/tomorrow.css',
   'base16/twilight.css',
   'base16/unikitty-dark.css',
   'base16/unikitty-light.css',
   'base16/vulcan.css',
   'base16/windows-10-light.css',
   'base16/windows-10.css',
   'base16/windows-95-light.css',
   'base16/windows-95.css',
   'base16/windows-high-contrast-light.css',
   'base16/windows-high-contrast.css',
   'base16/windows-nt-light.css',
   'base16/windows-nt.css',
   'base16/woodland.css',
   'base16/xcode-dusk.css',
   'base16/zenburn.css',
];

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
