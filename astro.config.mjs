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
						{ label: 'Pour commencer', link: '/guides/getstarted/' },
						{ label: 'Android', link: '/guides/android/' },
					],
				},
			],
		}),
	],
	site: 'https://radiscool.github.io/docs/',
	base: '/docs',
});
