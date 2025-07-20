/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}"
    ],
    theme: {
        extend: {
            screens: {
                'tiny': { max: '350px' },
            },
        },
    },
    plugins: [],
}