import {defineContentConfig, defineCollection} from '@nuxt/content'

export default defineContentConfig({
    collections: {
        // this is not really used, just to silence the config warning
        content: defineCollection({type: 'page'})
    }
})
