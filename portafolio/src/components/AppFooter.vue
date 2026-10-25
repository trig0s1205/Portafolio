
<script setup lang="ts">
import { ref } from 'vue'
import PulseLine from './PulseLine.vue'
import { useScrollReveal } from '@/composables/useScrollReveal'

const rootRef = ref<HTMLElement | null>(null)
useScrollReveal(rootRef)
</script>


<template>
  <footer class="footer" ref="rootRef">
    <div class="container footer__inner">
      <PulseLine compact data-reveal />
      <div class="footer__row" data-reveal>
        <span class="footer__id">Daniel Felipe Trigos Sarmiento</span>
        <span class="footer__note">Floridablanca · Full Stack · 2026</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--line);
  padding: var(--space-4) 0 var(--space-5);
  position: relative;
}

.footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: min(480px, 60%);
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(245, 244, 241, 0.2), transparent);
}

.footer__row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: var(--space-2);
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  color: var(--muted);
}

.footer__id {
  color: var(--fg-dim);
  transition: color 0.25s ease;
}

.footer__id:hover {
  color: var(--fg);
}

@media (max-width: 560px) {
  .footer__row {
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-start;
  }
}
</style>
