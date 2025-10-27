<template>
  <section
      ref="parallaxRef"
      class="parallax-section"
      :style="sectionStyle"
      role="presentation"
  >
    <div
        class="parallax-background"
        :style="backgroundStyle"
        aria-hidden="true"
    />
    <div class="parallax-overlay" :style="overlayStyle">
      <slot/>
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
} from "vue";

const props = defineProps({
  backgroundImage: {
    type: String,
    required: true,
  },
  height: {
    type: String,
    default: "60vh",
  },
  speed: {
    type: String,
    default: '0.3',
  },
  overlayColor: {
    type: String,
    default: "rgba(0, 0, 0, 0.3)",
  },
});

const parallaxRef = ref<HTMLElement | null>(null);
const parallaxOffset = ref(0);
const motionDisabled = ref(false);
let frameId = 0;
let removeMotionListener: (() => void) | null = null;

const resolvedHeight = computed(() =>
    typeof props.height === "number" ? `${props.height}px` : props.height,
);

const sectionStyle = computed(() => ({
  minHeight: resolvedHeight.value,
}));

const backgroundStyle = computed(() => ({
  backgroundImage: `url(${props.backgroundImage})`,
  transform: motionDisabled.value
      ? "translate3d(0, 0, 0)"
      : `translate3d(0, ${parallaxOffset.value}px, 0)`,
}));

const overlayStyle = computed(() => ({
  minHeight: resolvedHeight.value,
  background: props.overlayColor,
  transform: motionDisabled.value
      ? "translate3d(0, 0, 0)"
      : `translate3d(0, ${parallaxOffset.value}px, 0)`,
}));

const clampSpeed = (valueStr: string) => {
  const value = parseFloat(valueStr)
  return Number.isFinite(value) ? value : 0;
}

const computeOffsets = () => {
  if (!import.meta.client || motionDisabled.value || !parallaxRef.value) {
    parallaxOffset.value = 0;
    return;
  }

  const rect = parallaxRef.value.getBoundingClientRect();
  const viewportHeight = window.innerHeight || 1;
  const elementCenterY = rect.top + rect.height / 2;
  const viewportCenterY = viewportHeight / 2;
  const distanceFromCenter = elementCenterY - viewportCenterY;
  const intensity = clampSpeed(props.speed);

  parallaxOffset.value = -distanceFromCenter * intensity;
};

const scheduleUpdate = () => {
  if (!import.meta.client) {
    return;
  }
  if (motionDisabled.value) {
    parallaxOffset.value = 0;
    return;
  }
  if (frameId) {
    return;
  }
  frameId = window.requestAnimationFrame(() => {
    frameId = 0;
    computeOffsets();
  });
};

const handleScroll = () => {
  scheduleUpdate();
};

const handleResize = () => {
  scheduleUpdate();
};

const setupMotionPreference = () => {
  if (!import.meta.client) {
    return;
  }

  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  const update = (event?: MediaQueryListEvent) => {
    motionDisabled.value = event ? event.matches : media.matches;
    if (motionDisabled.value) {
      parallaxOffset.value = 0;
    } else {
      scheduleUpdate();
    }
  };

  update();

  if (typeof media.addEventListener === "function") {
    media.addEventListener("change", update);
    removeMotionListener = () => media.removeEventListener("change", update);
  } else {
    // @ts-ignore deprecated but required for older browsers
    media.addListener(update);
    removeMotionListener = () => {
      // @ts-ignore deprecated but required for older browsers
      media.removeListener(update);
    };
  }
};

onMounted(() => {
  if (!import.meta.client) {
    return;
  }

  setupMotionPreference();
  window.addEventListener("scroll", handleScroll, {passive: true});
  window.addEventListener("resize", handleResize);
  scheduleUpdate();
});

onBeforeUnmount(() => {
  if (!import.meta.client) {
    return;
  }
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("resize", handleResize);
  if (frameId) {
    window.cancelAnimationFrame(frameId);
    frameId = 0;
  }
  if (removeMotionListener) {
    removeMotionListener();
    removeMotionListener = null;
  }
});

watch(
    () => props.speed,
    () => {
      computeOffsets();
    },
);

watch(
    () => props.height,
    () => {
      scheduleUpdate();
    },
);
</script>

<style scoped>
.parallax-section {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.parallax-background {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  will-change: transform;
  transition: transform 120ms ease-out;
}

.parallax-overlay {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 1.5rem;
  text-align: center;
  color: #FFFFFF;
  will-change: transform;
  transition: transform 120ms ease-out, background 160ms ease;
}

@media (prefers-reduced-motion: reduce) {
  .parallax-background,
  .parallax-overlay {
    transition: none !important;
    transform: none !important;
  }
}
</style>
