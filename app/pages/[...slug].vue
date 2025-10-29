<script setup lang="ts">
import { computed, watch } from 'vue'
import type { ContentPageSummary } from '#content/types/content-page'
import { contentToMinimalDocument } from '#content/utils/page-documents'
import { useContentLiveUpdates } from '#content/app/composables/useContentLiveUpdates'

const route = useRoute()

if (route.path.startsWith('/api/')) {
  throw createError({
    statusCode: 404,
    statusMessage: 'API endpoint not found'
  })
}

const contentStore = useContentPagesStore()
useContentLiveUpdates()

const normalizedRoutePath = computed(() => route.path)

const fetchPage = async (path: string): Promise<ContentPageSummary> => {
  try {
    const summary = await contentStore.fetchPage(path)
    if (!summary) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Page not found'
      })
    }
    return summary
  } catch (error: any) {
    if (error?.statusCode === 404) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Page not found'
      })
    }
    throw error
  }
}

const { data: pageSummary, pending } = await useAsyncData(
    () => `content-page:${route.path}`,
    () => fetchPage(route.path),
    {
      watch: [() => route.path]
    }
)

const liveSummary = computed<ContentPageSummary | null>(() => {
  const live = contentStore.getPage(normalizedRoutePath.value)
  return live ?? null
})

const resolvedSummary = computed<ContentPageSummary | null>(() => {
  return liveSummary.value ?? pageSummary.value ?? null
})

const pageDocument = computed(() => {
  const summary = resolvedSummary.value
  if (!summary?.document) {
    return null
  }
  return contentToMinimalDocument(summary.document)
})

watch(pageDocument, (newDoc) => {
  if (!pending.value && newDoc === null && resolvedSummary.value !== undefined) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Page not found'
    })
  }
})

useHead(() => ({
  title: pageDocument.value?.seo.title || pageDocument.value?.title || 'Radustanciu',
  meta: [
    {
      name: 'description',
      content: pageDocument.value?.seo.description || 'Radustanciu content page'
    }
  ]
}))
</script>

<template>
  <div class="content-page">
    <div v-if="pending" class="loading-state">
      <p>Loading content…</p>
    </div>
<!--    <ContentRenderer v-else-if="pageDocument" :value="pageDocument" />-->
    <Content v-else-if="pageDocument" :value="pageDocument" />
    <section v-else class="not-found">
      <h1>Page not found</h1>
      <p>The requested page does not exist or is not published yet.</p>
    </section>
  </div>
</template>

<style scoped>
.content-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.loading-state,
.not-found {
  padding: 96px 5vw;
  text-align: center;
}

.not-found h1 {
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
</style>
