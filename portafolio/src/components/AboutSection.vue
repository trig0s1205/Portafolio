<template>
  <section id="manifest" class="manifest section" ref="rootRef">
    <div class="container">
      <p class="eyebrow" data-reveal>MANIFEST · 01</p>
      <h2 class="manifest__title" data-reveal>Quién opera la cuenta</h2>

      <p class="manifest__bio" data-reveal>
        Soy desarrollador full-stack con el pie en producción: en
        <strong>FOSCAL</strong> construyo soluciones digitales en un entorno hospitalario
        de alta complejidad en Colombia. Fuera del trabajo, llevo mis propios productos
        al mercado — desde un e-commerce de lujo hasta sitios corporativos que convierten
        visitas en clientes.
      </p>

      <p class="manifest__bio" data-reveal>
        Trabajo con agentes de IA integrados en mi flujo diario: automatizo tareas,
        acelero desarrollo y diseño soluciones más inteligentes sin perder calidad
        de código. Me obsesiona la arquitectura limpia, el detalle en la UI y entregar
        cosas que la gente realmente use. Aprendo todos los días. No me rindo fácil.
        Prefiero entender el problema a fondo antes que poner un parche encima.
      </p>

      <div class="manifest__experience">
        <p class="manifest__section-label eyebrow" data-reveal>EXPERIENCIA · CAMPO</p>

        <article
          v-for="exp in experienceEntries"
          :key="exp.id"
          class="exp-card"
          data-reveal="scale"
          data-tilt
        >
          <div class="exp-card__head">
            <div>
              <h3 class="exp-card__org">{{ exp.org }}</h3>
              <p class="exp-card__role">{{ exp.role }} · {{ exp.period }}</p>
            </div>
          </div>

          <p class="exp-card__summary">{{ exp.summary }}</p>

          <ul class="exp-card__highlights">
            <li v-for="item in exp.highlights" :key="item">{{ item }}</li>
          </ul>
        </article>
      </div>

      <p class="manifest__section-label eyebrow manifest__skills-label" data-reveal>STACK · OPERATIVO</p>

      <div class="manifest__grid" data-reveal-group>
        <article
          v-for="cat in skillCategories"
          :key="cat.id"
          class="skill-card"
          data-reveal
          data-tilt
        >
          <div class="skill-card__head">
            <span class="skill-card__code">{{ cat.code }}</span>
            <h3 class="skill-card__label">{{ cat.label }}</h3>
          </div>
          <ul class="skill-card__list">
            <li v-for="item in cat.items" :key="item">{{ item }}</li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { skillCategories } from '@/data/skills'
import { experienceEntries } from '@/data/experience'
import { useScrollReveal } from '@/composables/useScrollReveal'
import { useCardTilt } from '@/composables/useCardTilt'

const rootRef = ref<HTMLElement | null>(null)
useScrollReveal(rootRef)
useCardTilt(rootRef)
</script>

<style scoped>
.manifest__title {
  font-size: clamp(2rem, 5vw, 3.2rem);
  margin-top: var(--space-1);
  margin-bottom: var(--space-3);
}

.manifest__bio {
  max-width: 62ch;
  color: var(--fg-dim);
  font-size: 1.08rem;
  line-height: 1.7;
  margin-bottom: var(--space-3);
}

.manifest__bio strong {
  color: var(--fg);
  font-weight: 600;
}

.manifest__section-label {
  margin-bottom: var(--space-2);
}

.manifest__skills-label {
  margin-top: var(--space-5);
}

.manifest__experience {
  margin-top: var(--space-4);
  margin-bottom: var(--space-2);
}

.exp-card {
  background: var(--bg-card);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: var(--space-4);
  box-shadow: var(--shadow-soft), var(--shadow-inset);
  transform-style: preserve-3d;
  will-change: transform;
  transition: border-color 0.35s ease, box-shadow 0.35s ease;
}

.exp-card:hover {
  border-color: var(--line-strong);
  box-shadow: var(--shadow-lift), var(--shadow-inset);
}

.exp-card__org {
  font-size: clamp(1.15rem, 2.5vw, 1.45rem);
  text-transform: none;
  letter-spacing: 0;
  line-height: 1.25;
  margin-bottom: 0.35rem;
}

.exp-card__role {
  font-family: var(--font-mono);
  font-size: 0.74rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
}

.exp-card__summary {
  margin-top: var(--space-2);
  color: var(--fg-dim);
  max-width: 68ch;
  line-height: 1.65;
}

.exp-card__highlights {
  list-style: none;
  margin-top: var(--space-3);
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.exp-card__highlights li {
  position: relative;
  padding-left: 1.1rem;
  color: var(--fg-dim);
  font-size: 0.95rem;
  line-height: 1.5;
}

.exp-card__highlights li::before {
  content: '→';
  position: absolute;
  left: 0;
  font-family: var(--font-mono);
  color: var(--muted);
}

.manifest__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-2);
}

.skill-card {
  background: var(--bg-card);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: var(--space-3);
  box-shadow: var(--shadow-soft), var(--shadow-inset);
  transform-style: preserve-3d;
  will-change: transform;
  transition: border-color 0.35s ease, box-shadow 0.35s ease;
}

.skill-card:hover {
  border-color: var(--line-strong);
  box-shadow: var(--shadow-lift), var(--shadow-inset);
}

.skill-card__head {
  display: flex;
  align-items: baseline;
  gap: 0.6rem;
  margin-bottom: var(--space-2);
}

.skill-card__code {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  color: var(--muted);
  border: 1px solid var(--line-strong);
  border-radius: 999px;
  padding: 0.15rem 0.55rem;
}

.skill-card__label {
  font-size: 1.15rem;
  text-transform: none;
  letter-spacing: 0;
}

.skill-card__list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.skill-card__list li {
  font-family: var(--font-mono);
  font-size: 0.74rem;
  color: var(--fg-dim);
  background: var(--bg-elevated);
  border: 1px solid var(--line);
  border-radius: 6px;
  padding: 0.3rem 0.55rem;
}

@media (max-width: 920px) {
  .manifest__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .manifest__grid {
    grid-template-columns: 1fr;
  }

  .exp-card {
    padding: var(--space-3);
  }
}
</style>
