<template>
  <header class="nav" :class="{ 'nav--scrolled': scrolled }">
    <div class="container nav__inner">
      <a href="#top" class="nav__id">TRG<span>1205</span></a>
      <nav class="nav__links">
        <a href="#manifest">Manifest</a>
        <a href="#log">Log</a>
        <a href="#transmission">Contacto</a>
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

const scrolled = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 24
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  border-bottom: 1px solid transparent;
  transition: border-color 0.3s ease, background-color 0.3s ease;
}

.nav--scrolled {
  border-color: var(--line);
  background: rgba(10, 10, 11, 0.78);
  backdrop-filter: blur(10px);
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
}

.nav__id span {
  color: var(--muted);
}

.nav__links {
  display: flex;
  gap: var(--space-3);
}

.nav__links a {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--fg-dim);
  transition: color 0.2s ease;
}

.nav__links a:hover {
  color: var(--fg);
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
  box-shadow: 0 0 8px var(--glow);
  animation: blink 2.6s ease-in-out infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.25; }
}

@media (max-width: 640px) {
  .nav__links { display: none; }
}
</style>
