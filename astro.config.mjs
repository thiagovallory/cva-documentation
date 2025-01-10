// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
//import { Icon } from '@astrojs/starlight/components';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: ' ',
			logo: {
        src: './src/assets/logo.svg',
      },
			customCss: [
        // Relative path to your custom CSS file
        './src/styles/custom.css',
      ],
			components: {
        // Substitui o componente padrão `SocialIcons`.
        SocialIcons: './src/components/SocialIcons.astro',
      },
			sidebar: [
				{
					label: 'Legal',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Privacy Policy', slug: 'index' },
						{ label: 'Terms and Conditions', slug: 'terms' },
						{ label: 'How to', slug: 'how-to' },
						{ label: 'Suggested workflow', slug: 'suggested-workflow' },
						{ label: 'FAQs', slug: 'faqs' },
					],
				},
				{
					label: 'Report a vulnerability',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Discord #-troubleshooting',
							link: 'https://discord.gg/hS8FNCEZTR',
							attrs: { target: '_blank', style: 'font-style: italic' },
							badge: { text: 'New', variant: 'danger' },
						},
					],
				},
				
			],
		}),
	],
});
