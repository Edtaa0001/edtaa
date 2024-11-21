/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'poppins': ['Poppins', 'sans-serif'],
                'roboto-slab': ['Roboto Slab', 'serif'],
            },
            animation: {
                'slideDown': 'slideDown 0.2s ease-out',
            },
            keyframes: {
                slideDown: {
                    '0%': { transform: 'translateY(-10px)', opacity: 0 },
                    '100%': { transform: 'translateY(0)', opacity: 1 },
                },
            },
        },
    },
    plugins: [],
}