<template>
  <section id="top" class="hero" ref="heroRef">
    <div class="hero__grain" aria-hidden="true" />
    <div class="hero__shine" aria-hidden="true" />

    <div class="container hero__inner">
      <p class="eyebrow hero__eyebrow" data-hero="eyebrow">DESARROLLADOR FULL-STACK · EL SALVADOR</p>

      <h1 class="hero__id" data-hero="title">
        TRG<span class="hero__id-accent">1205</span>
      </h1>

      <p class="hero__name" data-hero="name">Daniel Trigos</p>

      <div data-hero="pulse">
        <PulseLine />
      </div>

      <p class="hero__tagline" data-hero="line">
        Construyo software que <span>llega a producción</span> y resuelve problemas reales.
      </p>

      <p class="hero__sub" data-hero="line">
        En FOSCAL desarrollo herramientas en un entorno de salud de alta complejidad. Por mi cuenta,
        lanzo productos como Luxtimee y CashSolution. Domino el stack completo —
        y cada vez más, agentes de IA que aceleran cómo trabajo.
      </p>

      <ul class="hero__highlights" aria-label="Enfoque principal">
        <li data-hero="pill">FOSCAL · Salud hospitalaria</li>
        <li data-hero="pill">Agentes IA & automatización</li>
        <li data-hero="pill">Vue · .NET · Node · Python</li>
      </ul>

      <div class="hero__actions">
        <a href="#log" class="hero__cta btn-shine" data-hero="cta">Ver proyectos</a>
        <a href="#transmission" class="hero__cta hero__cta--ghost" data-hero="cta">Hablemos</a>
      </div>
    </div>

    <div class="hero__scroll" data-hero="scroll" aria-hidden="true">
      <span class="eyebrow">SCROLL</span>
      <span class="hero__scroll-line" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PulseLine from './PulseLine.vue'
import { useHeroEntrance } from '@/composables/useHeroEntrance'

const heroRef = ref<HTMLElement | null>(null)
useHeroEntrance(heroRef)
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
    radial-gradient(ellipse 70% 55% at 50% -10%, rgba(245, 244, 241, 0.07), transparent 65%);
  pointer-events: none;
}

.hero__shine {
  position: absolute;
  top: 20%;
  left: -20%;
  width: 55%;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(245, 244, 241, 0.25), transparent);
  transform: rotate(-8deg);
  animation: heroShine 6s ease-in-out infinite;
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
  text-shadow:
    0 1px 0 rgba(255, 255, 255, 0.06),
    0 30px 60px rgba(0, 0, 0, 0.6),
    0 0 80px rgba(245, 244, 241, 0.04);
  line-height: 0.95;
}

.hero__id-accent {
  color: var(--muted);
  display: inline-block;
}

.hero__name {
  margin-top: 0.35rem;
  font-family: var(--font-mono);
  font-size: clamp(0.85rem, 2vw, 1rem);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--fg-dim);
}

.hero__tagline {
  margin-top: var(--space-3);
  font-family: var(--font-display);
  text-transform: none;
  font-weight: 600;
  font-size: clamp(1.35rem, 3.2vw, 2.15rem);
  color: var(--fg-dim);
  max-width: 22ch;
  line-height: 1.15;
}

.hero__tagline span {
  color: var(--fg);
  background: linear-gradient(120deg, var(--fg) 0%, var(--fg-dim) 100%);
  -webkit-background-clip: text;
  background-clip: text;
}

.hero__sub {
  margin-top: var(--space-2);
  max-width: 58ch;
  color: var(--muted);
  font-size: 1.02rem;
  line-height: 1.65;
}

.hero__highlights {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  margin-top: var(--space-3);
}

.hero__highlights li {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--fg-dim);
  background: rgba(19, 19, 21, 0.72);
  border: 1px solid var(--line-strong);
  border-radius: 999px;
  padding: 0.45rem 0.85rem;
  backdrop-filter: blur(8px);
  transition: border-color 0.25s ease, color 0.25s ease, transform 0.25s ease;
}

.hero__highlights li:hover {
  border-color: var(--fg);
  color: var(--fg);
  transform: translateY(-2px);
}

.hero__actions {
  margin-top: var(--space-4);
  display: flex;
  gap: var(--space-2);
  flex-wrap: wrap;
}

.hero__cta {
  position: relative;
  overflow: hidden;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.9rem 1.6rem;
  border-radius: 999px;
  background: var(--fg);
  color: var(--bg);
  box-shadow: var(--shadow-soft);
  transition: transform 0.3s cubic-bezier(0.34, 1.4, 0.64, 1), box-shadow 0.3s ease;
}

.hero__cta:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: var(--shadow-lift);
}

.hero__cta--ghost {
  background: rgba(19, 19, 21, 0.5);
  color: var(--fg);
  border: 1px solid var(--line-strong);
  box-shadow: none;
  backdrop-filter: blur(8px);
}

.hero__cta--ghost:hover {
  border-color: var(--fg);
  box-shadow: var(--shadow-soft);
  background: rgba(19, 19, 21, 0.85);
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
  0%, 100% { opacity: 0.3; transform: scaleY(0.85); }
  50% { opacity: 1; transform: scaleY(1); }
}

@keyframes heroShine {
  0%, 100% { opacity: 0; transform: rotate(-8deg) translateX(-10%); }
  45% { opacity: 0.6; transform: rotate(-8deg) translateX(120%); }
}

@media (max-width: 640px) {
  .hero__scroll { display: none; }
  .hero__tagline { max-width: none; }
}

@media (prefers-reduced-motion: reduce) {
  .hero__shine,
  .hero__scroll-line {
    animation: none;
  }
}
</style>
