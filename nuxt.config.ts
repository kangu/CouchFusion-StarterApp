import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    compatibilityDate: '2025-10-25',
    css: [
        '~/assets/css/fonts.css',
        '~/assets/css/main.css',
    ],
    modules: ["@pinia/nuxt"],
    runtimeConfig: {
        dbLoginPrefix: 'ns-',
        imagekit: {
            publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
            privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
            urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
        },
        public: {
            siteUrl: process.env.PUBLIC_SITE_URL,
            analytics: {
                umami: {
                    websiteId: process.env.UMAMI_WEBSITE_ID,
                    excludedPaths: process.env.NUXT_PUBLIC_UMAMI_EXCLUDED_PATHS
                        ? process.env.NUXT_PUBLIC_UMAMI_EXCLUDED_PATHS.split(',')
                            .map((path) => path.trim())
                            .filter(Boolean)
                        : ['/confirm-login'],
                }
            },
            // Configure auth layer login path (optional - defaults to /login)
            authLoginPath: '/login',
            imagekit: {
                publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
                urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
            }
        }
    },
    extends: [
        '../../layers/auth',
        '../../layers/orders',
        '../../layers/database',
        '../../layers/content',
        '../../layers/analytics',
        '../../layers/imagekit'
    ],
    app: {
        pageTransition: {
            name: 'page',
            mode: 'out-in'
        },
        head: {
            link: [
                {
                    rel: 'icon',
                    type: 'image/svg+xml',
                    href: '/favicon.svg',
                }
                /*{
                    rel: 'preload',
                    as: 'font',
                    type: 'font/woff2',
                    href: '/fonts/montserrat/Montserrat-Regular.woff2',
                    crossorigin: 'anonymous'
                },
                {
                    rel: 'preload',
                    as: 'font',
                    type: 'font/woff2',
                    href: '/fonts/montserrat/Montserrat-Bold.woff2',
                    crossorigin: 'anonymous'
                },
                {
                    rel: 'preload',
                    as: 'font',
                    type: 'font/woff2',
                    href: '/fonts/montserrat/Montserrat-Italic.woff2',
                    crossorigin: 'anonymous'
                },
                {
                    rel: 'preload',
                    as: 'font',
                    type: 'font/woff2',
                    href: '/fonts/montserrat/Montserrat-SemiBold.woff2',
                    crossorigin: 'anonymous'
                }*/
            ]
        }
    },
    vite: {
        plugins: [tailwindcss()],
        server: {
            fs: {
                allow: ['..']
            },
            watch: {
                usePolling: false,
                ignored: ['!**/node_modules/**']
            }
        }
    },
    nitro: {
        output: {
            dir: './.output/dist', // folder that already contains
            publicDir: './.output/dist/public',
            serverDir: './.output/dist/server',
        }
    }
})
