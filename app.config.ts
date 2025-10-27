export default defineAppConfig({
    content: {
        manualIgnoredPrefixes: [
            '/users',
            '/admin',
            '/members',
            '/settings',
            '/dashboard',
            '/profile',
            '/builder'
        ],
        sitemapExtraRoutes: []
    }
})
