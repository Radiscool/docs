import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Radis.cool Documentation',
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Android', link: '/guides/android/' },
					],
				},
			],
		}),
	],
	site: 'https://radiscool.github.io',
	base: '/Radiscool/docs',
});
