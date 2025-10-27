import {defineConfig} from 'tailwindcss'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const tailwindcssAnimate = require('tailwindcss-animate')

export default defineConfig({
    content: [
        './app/**/*.{vue,js,ts}',
        './components/**/*.{vue,js,ts}',
        './layouts/**/*.{vue,js,ts}',
        './pages/**/*.{vue,js,ts}',
        './plugins/**/*.{js,ts}',
        './content/**/*.{md,json,yml}',
        '../../layers/**/*.{vue,js,ts}'
    ],
    theme: {
        extend: {
            colors: {
            }
        }
    },
    plugins: [tailwindcssAnimate]
})
