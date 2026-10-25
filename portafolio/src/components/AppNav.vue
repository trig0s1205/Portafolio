<template>
  <header ref="navRef" class="nav" :class="{ 'nav--scrolled': scrolled }">
    <div class="container nav__inner">
      <a href="#top" class="nav__id">TRG<span>1205</span></a>
      <nav class="nav__links">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          :class="{ 'is-active': activeSection === link.id }"
        >
          {{ link.label }}
        </a>
      </nav>
      <span class="nav__status">
        <span class="nav__dot" />
        ACTIVO
      </span>
    </div>
  </header>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const scrolled = ref(false)
const activeSection = ref('top')
const navRef = ref<HTMLElement | null>(null)
let navTriggers: ScrollTrigger[] = []

const links = [
  { id: 'manifest', href: '#manifest', label: 'Perfil' },
  { id: 'trayectoria', href: '#trayectoria', label: 'Trayectoria' },
  { id: 'log', href: '#log', label: 'Proyectos' },
  { id: 'transmission', href: '#transmission', label: 'Contacto' }
]

function onScroll() {
  scrolled.value = window.scrollY > 24
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!prefersReduced && navRef.value) {
    gsap.from(navRef.value, {
      y: -72,
      opacity: 0,
      duration: 0.85,
      ease: 'power3.out',
      delay: 0.05
    })
  }

  links.forEach(({ id }) => {
    const section = document.getElementById(id)
    if (!section) return

    const trigger = ScrollTrigger.create({
      trigger: section,
      start: 'top 45%',
      end: 'bottom 45%',
      onEnter: () => { activeSection.value = id },
      onEnterBack: () => { activeSection.value = id }
    })
    if (trigger) navTriggers.push(trigger)
  })

  const topTrigger = ScrollTrigger.create({
    trigger: '#top',
    start: 'top top',
    end: 'bottom 60%',
    onEnter: () => { activeSection.value = 'top' },
    onEnterBack: () => { activeSection.value = 'top' }
  })
  if (topTrigger) navTriggers.push(topTrigger)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  navTriggers.forEach((t) => t.kill())
  navTriggers = []
})
</script>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  border-bottom: 1px solid transparent;
  transition: border-color 0.4s ease, background-color 0.4s ease, backdrop-filter 0.4s ease;
}

.nav--scrolled {
  border-color: var(--line);
  background: rgba(10, 10, 11, 0.82);
  backdrop-filter: blur(14px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
}

.nav__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

.nav__id {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  letter-spacing: 0.08em;
  color: var(--fg);
  transition: opacity 0.2s ease;
}

.nav__id:hover {
  opacity: 0.75;
}

.nav__id span {
  color: var(--muted);
}

.nav__links {
  display: flex;
  gap: var(--space-3);
}

.nav__links a {
  position: relative;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--fg-dim);
  transition: color 0.25s ease;
  padding-bottom: 0.2rem;
}

.nav__links a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background: var(--fg);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.35s cubic-bezier(0.65, 0, 0.35, 1);
}

.nav__links a:hover,
.nav__links a.is-active {
  color: var(--fg);
}

.nav__links a:hover::after,
.nav__links a.is-active::after {
  transform: scaleX(1);
  transform-origin: left;
}

.nav__status {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-family: var(--font-mono);
  font-size: 0.68rem;
  letter-spacing: 0.12em;
  color: var(--muted);
}

.nav__dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--fg);
  box-shadow: 0 0 10px var(--glow), 0 0 20px rgba(245, 244, 241, 0.08);
  animation: blink 2.6s ease-in-out infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.35; transform: scale(0.85); }
}

@media (max-width: 640px) {
  .nav__links { display: none; }
}
</style>
