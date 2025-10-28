<template>
  <section
      ref="sectionRef"
      class="content-plus-main-image"
      :style="sectionStyle"
      role="presentation"
  >
    <div
        v-if="showDivider"
        class="content-plus-main-image__divider"
        aria-hidden="true"
    />
    <div class="content-plus-main-image__inner">
      <div
          class="content-plus-main-image__copy"
          :class="copyAlignmentClass"
      >
        <p
            v-if="eyebrow"
            class="content-plus-main-image__eyebrow"
            :style="{ color: eyebrowColorComputed }"
        >
          {{ eyebrowFormatted }}
        </p>
        <h2 class="content-plus-main-image__heading">
          <span>{{ title }}</span>
          <span
              v-if="titleHighlight"
              class="content-plus-main-image__heading-highlight"
              :style="{ color: highlightColor }"
          >
            {{ titleHighlight }}
          </span>
        </h2>
        <p
            v-if="description"
            class="content-plus-main-image__description"
        >
          {{ description }}
        </p>
      </div>
      <div class="content-plus-main-image__media">
        <div
            v-if="accentShape"
            class="content-plus-main-image__media-accent"
            :style="accentStyle"
            aria-hidden="true"
        />
        <figure
            class="content-plus-main-image__figure"
            :class="{ 'content-plus-main-image__figure--shadow': imageShadow }"
            :style="figureStyle"
        >
          <img
              :src="imageSrc"
              :alt="imageAlt"
              loading="lazy"
          >
        </figure>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  computed,
  onBeforeUnmount,
  onMounted,
  ref,
  watch,
} from 'vue'

const props = defineProps({
  eyebrow: {
    type: String,
    default: '100% Responsive'
  },
  eyebrowColor: {
    type: String,
    default: '#ff1f7d'
  },
  eyebrowUppercase: {
    type: Boolean,
    default: true
  },
  title: {
    type: String,
    default: 'Fully Responsive & Perfectly fit to all Screens.'
  },
  titleHighlight: {
    type: String,
    default: ''
  },
  highlightColor: {
    type: String,
    default: '#ff1f7d'
  },
  description: {
    type: String,
    default: 'This layout adapts seamlessly to any device, ensuring your content shines on phones, tablets, and desktops without extra tweaking.'
  },
  descriptionColor: {
    type: String,
    default: 'rgba(15, 23, 42, 0.7)'
  },
  textColor: {
    type: String,
    default: '#111827'
  },
  backgroundColor: {
    type: String,
    default: '#ffffff'
  },
  accentShape: {
    type: Boolean,
    default: true
  },
  accentColor: {
    type: String,
    default: '#f3f4ff'
  },
  accentSecondaryColor: {
    type: String,
    default: '#ffe0f0'
  },
  accentOpacity: {
    type: Number,
    default: 0.55
  },
  imageSrc: {
    type: String,
    required: true
  },
  imageAlt: {
    type: String,
    default: ''
  },
  imageShadow: {
    type: Boolean,
    default: true
  },
  maxImageShift: {
    type: Number,
    default: 0
  },
  motionIntensity: {
    type: Number,
    default: 0.12
  },
  motionEasing: {
    type: Number,
    default: 0.18
  },
  paddingY: {
    type: String,
    default: '6rem'
  },
  paddingX: {
    type: String,
    default: 'clamp(1.5rem, 5vw, 8rem)'
  },
  textAlign: {
    type: String,
    default: 'left',
    validator: (value: string) => ['left', 'center'].includes(value)
  },
  showDivider: {
    type: Boolean,
    default: false
  },
  dividerColor: {
    type: String,
    default: '#e2e8f0'
  }
})

const sectionRef = ref<HTMLElement | null>(null)
const currentOffset = ref(0)
const targetOffset = ref(0)
const motionDisabled = ref(false)
const isActive = ref(false)
let frameId = 0
let removeMotionPreferenceListener: (() => void) | null = null
let lastScrollY = 0
let intersectionObserver: IntersectionObserver | null = null

const clamp = (value: number, limit: number) => {
  if (!Number.isFinite(limit)) {
    return value
  }
  return Math.max(-limit, Math.min(limit, value))
}

const resolveLimit = computed(() => {
  if (!Number.isFinite(props.maxImageShift) || props.maxImageShift <= 0) {
    return Number.POSITIVE_INFINITY
  }
  return props.maxImageShift
})
const resolveIntensity = computed(() => Math.max(0, props.motionIntensity))
const resolveEasing = computed(() => {
  if (Number.isFinite(props.motionEasing)) {
    return Math.min(Math.max(props.motionEasing, 0.05), 0.45)
  }
  return 0.18
})

const sectionStyle = computed(() => ({
  backgroundColor: props.backgroundColor,
  color: props.textColor,
  paddingBlock: props.paddingY,
  paddingInline: props.paddingX,
  '--divider-color': props.dividerColor,
  '--description-color': props.descriptionColor,
  '--text-color': props.textColor
}))

const copyAlignmentClass = computed(() => {
  return props.textAlign === 'center'
    ? 'content-plus-main-image__copy--center'
    : ''
})

const eyebrowColorComputed = computed(() => props.eyebrowColor || props.textColor)

const eyebrowFormatted = computed(() => {
  if (!props.eyebrow) {
    return ''
  }
  return props.eyebrowUppercase ? props.eyebrow.toUpperCase() : props.eyebrow
})

const accentOpacityValue = computed(() => {
  if (Number.isFinite(props.accentOpacity)) {
    return Math.min(Math.max(props.accentOpacity, 0), 1)
  }
  return 0.55
})

const accentStyle = computed(() => ({
  background: `radial-gradient(circle at top, ${props.accentSecondaryColor}, transparent 65%), ${props.accentColor}`,
  opacity: accentOpacityValue.value
}))

const figureStyle = computed(() => ({
  transform: `translate3d(${currentOffset.value}px, 0, 0)`
}))

const setupMotionPreference = () => {
  if (!import.meta.client) {
    return
  }

  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
  const update = (event?: MediaQueryListEvent) => {
    motionDisabled.value = event ? event.matches : mediaQuery.matches
    if (motionDisabled.value) {
      currentOffset.value = 0
      targetOffset.value = 0
      stopAnimation()
    }
  }

  update()

  if (typeof mediaQuery.addEventListener === 'function') {
    mediaQuery.addEventListener('change', update)
    removeMotionPreferenceListener = () => mediaQuery.removeEventListener('change', update)
  } else {
    // @ts-ignore Deprecated but required for older browsers.
    mediaQuery.addListener(update)
    removeMotionPreferenceListener = () => {
      // @ts-ignore Deprecated but required for older browsers.
      mediaQuery.removeListener(update)
    }
  }
}

const stopAnimation = () => {
  if (frameId) {
    window.cancelAnimationFrame(frameId)
    frameId = 0
  }
}

const animate = () => {
  if (motionDisabled.value) {
    currentOffset.value = 0
    targetOffset.value = 0
    stopAnimation()
    return
  }

  currentOffset.value += (targetOffset.value - currentOffset.value) * resolveEasing.value
  currentOffset.value = clamp(currentOffset.value, resolveLimit.value)

  if (Math.abs(targetOffset.value - currentOffset.value) < 0.05) {
    currentOffset.value = targetOffset.value
    stopAnimation()
    return
  }

  frameId = window.requestAnimationFrame(animate)
}

const ensureAnimation = () => {
  if (frameId) {
    return
  }
  frameId = window.requestAnimationFrame(animate)
}

const handleScroll = () => {
  const nextScrollY = window.scrollY || window.pageYOffset || 0
  const delta = nextScrollY - lastScrollY
  lastScrollY = nextScrollY

  if (!import.meta.client || motionDisabled.value || !isActive.value) {
    return
  }

  if (delta === 0) {
    return
  }

  const intensity = resolveIntensity.value
  const limit = resolveLimit.value
  targetOffset.value = clamp(targetOffset.value + (-delta * intensity), limit)
  ensureAnimation()
}

const handleResize = () => {
  if (!import.meta.client) {
    return
  }
  // Reset offsets on resize to avoid awkward jumps after layout changes.
  targetOffset.value = 0
  currentOffset.value = 0
}

onMounted(() => {
  if (!import.meta.client) {
    return
  }
  lastScrollY = window.scrollY || window.pageYOffset || 0

  intersectionObserver = new IntersectionObserver((entries) => {
    const entry = entries[0]
    const active = Boolean(entry?.isIntersecting)
    if (active !== isActive.value) {
      isActive.value = active
      lastScrollY = window.scrollY || window.pageYOffset || 0
      if (!active) {
        stopAnimation()
      }
    }
  }, { threshold: 0.1 })

  if (sectionRef.value) {
    intersectionObserver.observe(sectionRef.value)
  }

  setupMotionPreference()
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  if (!import.meta.client) {
    return
  }
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleResize)
  stopAnimation()
  if (intersectionObserver) {
    intersectionObserver.disconnect()
    intersectionObserver = null
  }
  if (removeMotionPreferenceListener) {
    removeMotionPreferenceListener()
    removeMotionPreferenceListener = null
  }
})

watch(
    () => props.maxImageShift,
    () => {
      const limit = resolveLimit.value
      targetOffset.value = clamp(targetOffset.value, limit)
      currentOffset.value = clamp(currentOffset.value, limit)
      ensureAnimation()
    }
)
</script>

<style scoped>
.content-plus-main-image {
  position: relative;
  overflow: hidden;
  color: var(--text-color, #111827);
}

.content-plus-main-image__divider {
  position: absolute;
  inset-block: 0;
  left: 50%;
  width: 1px;
  background: var(--divider-color, rgba(226, 232, 240, 0.5));
  opacity: 0.45;
  transform: translateX(-50%);
  pointer-events: none;
}

.content-plus-main-image__inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: clamp(2rem, 6vw, 6rem);
  max-width: 1200px;
  margin: 0 auto;
}

.content-plus-main-image__copy {
  flex: 1 1 420px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 520px;
}

.content-plus-main-image__copy--center {
  text-align: center;
  align-items: center;
  margin: 0 auto;
}

.content-plus-main-image__eyebrow {
  font-size: 0.875rem;
  letter-spacing: 0.18em;
  font-weight: 600;
}

.content-plus-main-image__heading {
  font-size: clamp(2.25rem, 5vw, 3.25rem);
  line-height: 1.05;
  font-weight: 700;
  color: inherit;
}

.content-plus-main-image__heading-highlight {
  display: inline-block;
  margin-left: 0.35rem;
}

.content-plus-main-image__description {
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--description-color, rgba(15, 23, 42, 0.7));
}

.content-plus-main-image__media {
  position: relative;
  flex: 1 1 480px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: min(100%, 320px);
}

.content-plus-main-image__media-accent {
  position: absolute;
  inset: -12% -15%;
  border-radius: 32px;
  filter: blur(0);
  z-index: 0;
}

.content-plus-main-image__figure {
  position: relative;
  z-index: 1;
  overflow: hidden;
  border-radius: 36px;
  transition: transform 160ms ease-out;
  background: #ffffff;
  object-fit: cover;
}

.content-plus-main-image__figure img {
  display: block;
  width: min(100%, 560px);
  height: auto;
}

.content-plus-main-image__figure--shadow {
  box-shadow: 0 32px 80px rgba(15, 23, 42, 0.12);
}

@media (max-width: 1024px) {
  .content-plus-main-image__inner {
    flex-direction: column;
    align-items: stretch;
  }

  .content-plus-main-image__copy,
  .content-plus-main-image__media {
    flex-basis: auto;
    width: 100%;
  }

  .content-plus-main-image__copy--center {
    text-align: center;
    align-items: center;
  }

  .content-plus-main-image__figure img {
    width: 100%;
  }
}

@media (max-width: 640px) {
  .content-plus-main-image {
    padding-inline: clamp(1rem, 6vw, 1.5rem);
    padding-block: clamp(3rem, 12vw, 4rem);
  }

  .content-plus-main-image__heading {
    font-size: clamp(1.9rem, 8vw, 2.4rem);
  }

  .content-plus-main-image__description {
    font-size: 1rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .content-plus-main-image__figure {
    transition: none;
    transform: none !important;
  }
}
</style>
