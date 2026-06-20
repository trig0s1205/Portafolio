<template>
  <section id="manifest" class="manifest section" ref="rootRef">
    <div class="container">
      <p class="eyebrow" data-reveal>MANIFEST · 01</p>
      <h2 class="manifest__title" data-reveal>Quién opera la cuenta</h2>

      <p class="manifest__bio" data-reveal>
        Soy idealista por convicción: creo que el software bien hecho cambia
        las cosas, y eso me mantiene en pie cuando algo no sale a la primera.
        No me rindo fácil — prefiero entender el problema antes que esquivarlo.
        Aprendo todos los días, sin excepción, y trabajo mejor en silencio:
        avanzo de fondo, sin anunciarlo, y dejo que el resultado hable cuando
        está listo. Me gusta lo que se construye con precisión — código,
        arquitectura, una moto bien afinada — donde cada pieza tiene un motivo
        para estar ahí.
      </p>

      <div class="manifest__grid">
        <article
          v-for="cat in skillCategories"
          :key="cat.id"
          class="skill-card"
          data-reveal
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
import { useScrollReveal } from '@/composables/useScrollReveal'

const rootRef = ref<HTMLElement | null>(null)
useScrollReveal(rootRef)
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
  margin-bottom: var(--space-5);
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
  transition: border-color 0.25s ease, transform 0.25s ease;
}

.skill-card:hover {
  border-color: var(--line-strong);
  transform: translateY(-3px);
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
}
</style>
