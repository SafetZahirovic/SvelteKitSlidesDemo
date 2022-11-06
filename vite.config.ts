import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import UnoCss from 'unocss/vite';
import { extractorSvelte } from '@unocss/core';
import presetIcons from '@unocss/preset-icons';
import presetAttributify from '@unocss/preset-attributify';
import presetUno from '@unocss/preset-uno';
import presetWebFonts from '@unocss/preset-web-fonts';
import { isoImport } from 'vite-plugin-iso-import';

const config: UserConfig = {
	plugins: [
		sveltekit(),
		isoImport(),
		UnoCss({
			theme: {
				// ...
				colors: {
					fuchsia: '#ec0086', // class="text-very-cool"
					brand: {
						primary: 'hsla(var(--hue, 217), 78%, 51%)' //class="bg-brand-primary"
					}
				}
			},
			extractors: [extractorSvelte],
			shortcuts: {},
			presets: [
				presetUno(),
				presetAttributify(),
				presetIcons({
					extraProperties: {
						display: 'inline-block',
						'vertical-align': 'middle'
					}
				}),
				presetWebFonts({
					provider: 'google', // default provider
					fonts: {
						// these will extend the default theme
						sans: 'Inter'
					}
				})
			]
		})
	]
};

export default config;
