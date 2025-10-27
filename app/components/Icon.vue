<script setup lang="ts">
import { computed, toRef } from 'vue'
import { Icon as IconifyIcon } from '@iconify/vue'

/**
 * Renders an Iconify icon by name with sensible accessibility defaults.
 */
const props = withDefaults(defineProps<{
  /** Iconify icon name, e.g. `mdi:view-dashboard-outline`. */
  name: string
  /** Square size for the icon (pixels or CSS size). */
  size?: string | number
  /** Optional accessible label describing the icon usage. */
  label?: string
  /** Override the rendered role attribute. */
  role?: string
}>(), {
  size: '1em',
  label: undefined,
  role: undefined
})

const name = toRef(props, 'name')
const size = toRef(props, 'size')
const label = toRef(props, 'label')
const explicitRole = toRef(props, 'role')

const resolvedRole = computed(() => explicitRole.value ?? (label.value ? 'img' : 'presentation'))
const resolvedAriaHidden = computed(() => (label.value ? undefined : 'true'))
</script>

<template>
  <IconifyIcon
    :icon="name"
    :width="size"
    :height="size"
    :role="resolvedRole"
    :aria-label="label"
    :aria-hidden="resolvedAriaHidden"
    v-bind="$attrs"
  />
</template>

<style scoped>
</style>
