<template>
  <section id="transmission" class="contact section" ref="rootRef">
    <div class="container">
      <p class="eyebrow" data-reveal>TRANSMISIÓN · 03</p>
      <h2 class="contact__title" data-reveal>Abrir canal</h2>
      <p class="contact__sub" data-reveal>
        Si esto te trajo hasta aquí — un jurado, un equipo, una idea —
        este es el canal directo. Respondo yo, sin intermediarios.
      </p>

      <div class="contact__grid">
        <form class="contact__form" data-reveal @submit.prevent="handleSubmit">
          <label class="field">
            <span>Nombre</span>
            <input
              v-model="form.name"
              type="text"
              name="name"
              required
              placeholder="Tu nombre"
              :disabled="store.status === 'sending'"
            />
          </label>

          <label class="field">
            <span>Correo</span>
            <input
              v-model="form.email"
              type="email"
              name="email"
              required
              placeholder="tu@correo.com"
              :disabled="store.status === 'sending'"
            />
          </label>

          <label class="field">
            <span>Mensaje</span>
            <textarea
              v-model="form.message"
              name="message"
              required
              rows="5"
              placeholder="Cuéntame en qué estás pensando."
              :disabled="store.status === 'sending'"
            />
          </label>

          <button class="contact__submit" type="submit" :disabled="store.status === 'sending'">
            {{ submitLabel }}
          </button>

          <p v-if="store.status === 'sent'" class="contact__feedback is-ok">
            Mensaje enviado. Te responderé directamente a tu correo.
          </p>
          <p v-if="store.status === 'error'" class="contact__feedback is-error">
            No se pudo enviar: {{ store.errorMessage }}
          </p>
        </form>

        <aside class="contact__side" data-reveal>
          <p class="contact__side-label eyebrow">Canales directos</p>
          <a :href="contactLinks.github" target="_blank" rel="noopener" class="contact__link">
            GitHub
          </a>
          <a :href="contactLinks.linkedin" target="_blank" rel="noopener" class="contact__link">
            LinkedIn
          </a>
          <a :href="`mailto:${contactLinks.email}`" class="contact__link">
            {{ contactLinks.email }}
          </a>
        </aside>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { useContactStore } from '@/stores/contact'
import { useScrollReveal } from '@/composables/useScrollReveal'
import { contactLinks } from '@/data/contact'

const rootRef = ref<HTMLElement | null>(null)
useScrollReveal(rootRef)

const store = useContactStore()

const form = reactive({ name: '', email: '', message: '' })

const submitLabel = computed(() => {
  if (store.status === 'sending') return 'Enviando…'
  if (store.status === 'sent') return 'Enviado'
  return 'Enviar mensaje'
})

async function handleSubmit() {
  await store.submit({ ...form })
  if (store.status === 'sent') {
    form.name = ''
    form.email = ''
    form.message = ''
  }
}
</script>

<style scoped>
.contact__title {
  font-size: clamp(2rem, 5vw, 3.2rem);
  margin-top: var(--space-1);
  margin-bottom: var(--space-1);
}

.contact__sub {
  color: var(--muted);
  max-width: 56ch;
  margin-bottom: var(--space-5);
}

.contact__grid {
  display: grid;
  grid-template-columns: 1.4fr 0.6fr;
  gap: var(--space-4);
}

.contact__form {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  background: var(--bg-card);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: var(--space-4);
  box-shadow: var(--shadow-soft), var(--shadow-inset);
}

.field {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
}

.field input,
.field textarea {
  font-family: var(--font-body);
  font-size: 0.95rem;
  text-transform: none;
  letter-spacing: 0;
  color: var(--fg);
  background: var(--bg-elevated);
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 0.75rem 0.9rem;
  resize: vertical;
  transition: border-color 0.2s ease;
}

.field input:focus,
.field textarea:focus {
  border-color: var(--line-strong);
}

.contact__submit {
  align-self: flex-start;
  margin-top: var(--space-1);
  font-family: var(--font-mono);
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.85rem 1.8rem;
  border-radius: 999px;
  background: var(--fg);
  color: var(--bg);
  box-shadow: var(--shadow-soft);
  transition: transform 0.25s ease, opacity 0.25s ease;
}

.contact__submit:hover:not(:disabled) {
  transform: translateY(-2px);
}

.contact__submit:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.contact__feedback {
  font-size: 0.85rem;
  font-family: var(--font-mono);
}

.contact__feedback.is-ok {
  color: var(--fg);
}

.contact__feedback.is-error {
  color: #ff8a8a;
}

.contact__side {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-1);
}

.contact__side-label {
  margin-bottom: var(--space-1);
}

.contact__link {
  font-family: var(--font-mono);
  font-size: 0.9rem;
  color: var(--fg-dim);
  border-bottom: 1px solid var(--line);
  padding-bottom: 0.4rem;
  width: fit-content;
  transition: color 0.2s ease, border-color 0.2s ease;
}

.contact__link:hover {
  color: var(--fg);
  border-color: var(--fg);
}

@media (max-width: 800px) {
  .contact__grid {
    grid-template-columns: 1fr;
  }
}
</style>
