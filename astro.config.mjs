// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import i18n from '@astrolicious/i18n';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

const defaultLocale = 'fr';
const locales = ['fr', 'en'];

// https://astro.build/config
export default defineConfig({
    site: 'https://example.com',
    integrations: [
        mdx(),
        i18n({
            defaultLocale: defaultLocale,
            locales: locales,
        }),
        sitemap({
            i18n: {
                defaultLocale: defaultLocale,
                locales: {
                    fr: 'fr',
                },
            },
        }),
        icon(),
    ],
    vite: {
        plugins: [tailwindcss()],
    },
});
