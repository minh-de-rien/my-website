/** @type {import("prettier").Config} */
export default {
    tabWidth: 4,
    useTabs: false,
    semi: true,
    singleQuote: true,
    trailingComma: 'all',
    bracketSpacing: true,
    arrowParens: 'always',
    printWidth: 100,
    plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
    overrides: [
        {
            files: '*.astro',
            options: {
                parser: 'astro',
                importOrder: [
                    '<BUILTIN_MODULES>',
                    '<THIRD_PARTY_MODULES>',
                    '^@data/(.*)$',
                    '^@layouts/(.*)$',
                    '^@pages/(.*)$',
                    '^@components/(.*)$',
                    '^@scripts/(.*)$',
                    '^@styles/(.*)$',
                    '^@/(.*)$',
                    '^.[./].*',
                ],
            },
        },
    ],
};
