<template>
  <div class="pulse" :class="{ 'pulse--compact': compact }" aria-hidden="true">
    <svg
      ref="svgRef"
      class="pulse__svg"
      viewBox="0 0 1000 80"
      preserveAspectRatio="none"
    >
      <path
        ref="pathRef"
        class="pulse__path"
        d="M0,40 L380,40 L410,40 L425,10 L440,70 L455,18 L470,40 L500,40 L1000,40"
        fill="none"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

withDefaults(defineProps<{ compact?: boolean }>(), { compact: false })

const svgRef = ref<SVGSVGElement | null>(null)
const pathRef = ref<SVGPathElement | null>(null)

onMounted(() => {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const path = pathRef.value
  if (!path) return

  const length = path.getTotalLength()
  gsap.set(path, { strokeDasharray: length, strokeDashoffset: length })

  if (prefersReduced) {
    gsap.set(path, { strokeDashoffset: 0 })
    return
  }

  gsap.to(path, {
    strokeDashoffset: 0,
    duration: 2.4,
    ease: 'power1.inOut',
    delay: 0.3,
    repeat: -1,
    repeatDelay: 2.6
  })
})
</script>

<style scoped>
.pulse {
  width: 100%;
  height: 36px;
  opacity: 0.55;
}

.pulse--compact {
  height: 20px;
  opacity: 0.35;
}

.pulse__svg {
  width: 100%;
  height: 100%;
  display: block;
}

.pulse__path {
  stroke: var(--fg);
  stroke-width: 1.4;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style>
