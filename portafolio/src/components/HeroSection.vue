<template>
  <section id="top" class="hero">
    <div class="hero__grain" aria-hidden="true" />
    <div class="container hero__inner">
      <p class="eyebrow hero__eyebrow">IDENTIFICADOR · ACCESO ÚNICO</p>

      <h1 class="hero__id">
        TRG<span class="hero__id-accent">1205</span>
      </h1>

      <PulseLine />

      <p class="hero__tagline">
        Construye en silencio. <span>Avanza a toda velocidad.</span>
      </p>

      <p class="hero__sub">
        Desarrollador full-stack. Arquitectura hexagonal y clean architecture
        entre .NET, Node y Python — sin ruido, sin prisa visible, con resultado.
      </p>

      <div class="hero__actions">
        <a href="#log" class="hero__cta">Ver bitácora</a>
        <a href="#transmission" class="hero__cta hero__cta--ghost">Contactar</a>
      </div>
    </div>

    <div class="hero__scroll" aria-hidden="true">
      <span class="eyebrow">SCROLL</span>
      <span class="hero__scroll-line" />
    </div>
  </section>
</template>

<script setup lang="ts">
import PulseLine from './PulseLine.vue'
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 64px;
  overflow: hidden;
}

.hero__grain {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 60% 50% at 50% 0%, rgba(245, 244, 241, 0.05), transparent 60%);
  pointer-events: none;
}

.hero__inner {
  position: relative;
  z-index: 1;
}

.hero__eyebrow {
  margin-bottom: var(--space-2);
}

.hero__id {
  font-size: clamp(4.2rem, 16vw, 11rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--fg);
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.06), 0 30px 60px rgba(0, 0, 0, 0.6);
}

.hero__id-accent {
  color: var(--muted);
}

.hero__tagline {
  margin-top: var(--space-3);
  font-family: var(--font-display);
  text-transform: none;
  font-weight: 600;
  font-size: clamp(1.3rem, 3vw, 2rem);
  color: var(--fg-dim);
}

.hero__tagline span {
  color: var(--fg);
}

.hero__sub {
  margin-top: var(--space-2);
  max-width: 46ch;
  color: var(--muted);
  font-size: 1rem;
}

.hero__actions {
  margin-top: var(--space-4);
  display: flex;
  gap: var(--space-2);
  flex-wrap: wrap;
}

.hero__cta {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.9rem 1.6rem;
  border-radius: 999px;
  background: var(--fg);
  color: var(--bg);
  box-shadow: var(--shadow-soft);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.hero__cta:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lift);
}

.hero__cta--ghost {
  background: transparent;
  color: var(--fg);
  border: 1px solid var(--line-strong);
  box-shadow: none;
}

.hero__cta--ghost:hover {
  border-color: var(--fg);
  box-shadow: var(--shadow-soft);
}

.hero__scroll {
  position: absolute;
  bottom: var(--space-3);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.hero__scroll-line {
  width: 1px;
  height: 36px;
  background: linear-gradient(to bottom, var(--fg-dim), transparent);
  animation: scrollPulse 2.2s ease-in-out infinite;
}

@keyframes scrollPulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}

@media (max-width: 640px) {
  .hero__scroll { display: none; }
}
</style>
