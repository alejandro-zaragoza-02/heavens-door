/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}"
    ],
    theme: {
        extend: {
            screens: {
                'xs': '351px',
            },
        },
    },
    plugins: [],
}