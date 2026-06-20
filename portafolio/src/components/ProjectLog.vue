<template>
  <section id="log" class="log section" ref="rootRef">
    <div class="container">
      <p class="eyebrow" data-reveal>BITÁCORA · 02</p>
      <h2 class="log__title" data-reveal>Registro de operaciones</h2>
      <p class="log__sub" data-reveal>
        Entradas activas. Cada una con su propio stack, su propio motivo.
      </p>

      <div class="log__list">
        <article
          v-for="entry in logEntries"
          :key="entry.id"
          class="log-entry"
          data-reveal
        >
          <div class="log-entry__meta">
            <span class="log-entry__code">{{ entry.code }}</span>
            <span class="log-entry__status" :class="`is-${entry.status}`">
              {{ statusLabel(entry.status) }}
            </span>
          </div>

          <h3 class="log-entry__title">{{ entry.title }}</h3>
          <p class="log-entry__summary">{{ entry.summary }}</p>

          <ul class="log-entry__stack">
            <li v-for="tech in entry.stack" :key="tech">{{ tech }}</li>
          </ul>

          <a v-if="entry.href" :href="entry.href" class="log-entry__link">
            Ver detalle →
          </a>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { logEntries } from '@/data/projects'
import { useScrollReveal } from '@/composables/useScrollReveal'
import type { LogEntry } from '@/types'

const rootRef = ref<HTMLElement | null>(null)
useScrollReveal(rootRef)

function statusLabel(status: LogEntry['status']) {
  return { live: 'En vivo', building: 'En construcción', classified: 'Privado' }[status]
}
</script>

<style scoped>
.log__title {
  font-size: clamp(2rem, 5vw, 3.2rem);
  margin-top: var(--space-1);
  margin-bottom: var(--space-1);
}

.log__sub {
  color: var(--muted);
  margin-bottom: var(--space-5);
}

.log__list {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.log-entry {
  background: var(--bg-card);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: var(--space-3) var(--space-4);
  box-shadow: var(--shadow-soft), var(--shadow-inset);
  transition: border-color 0.25s ease, transform 0.25s ease;
}

.log-entry:hover {
  border-color: var(--line-strong);
  transform: translateY(-2px);
}

.log-entry__meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--space-2);
}

.log-entry__code {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  color: var(--muted);
}

.log-entry__status {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  border: 1px solid var(--line-strong);
  color: var(--fg-dim);
}

.log-entry__status.is-live {
  color: var(--fg);
  border-color: var(--fg);
}

.log-entry__title {
  font-size: 1.5rem;
  text-transform: none;
  letter-spacing: 0;
  margin-bottom: var(--space-1);
}

.log-entry__summary {
  color: var(--fg-dim);
  max-width: 60ch;
  margin-bottom: var(--space-2);
}

.log-entry__stack {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: var(--space-1);
}

.log-entry__stack li {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--muted);
  background: var(--bg-elevated);
  border: 1px solid var(--line);
  border-radius: 6px;
  padding: 0.25rem 0.5rem;
}

.log-entry__link {
  display: inline-block;
  margin-top: var(--space-1);
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--fg);
  border-bottom: 1px solid var(--line-strong);
}

@media (max-width: 640px) {
  .log-entry {
    padding: var(--space-2);
  }
}
</style>
