
<script setup lang="ts">
import PulseLine from './PulseLine.vue'
</script>


<template>
  <footer class="footer">
    <div class="container footer__inner">
      <PulseLine compact />
      <div class="footer__row">
        <span class="footer__id">TRG1205</span>
        <span class="footer__note">Construido en silencio · 2026</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--line);
  padding: var(--space-4) 0 var(--space-5);
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
}

@media (max-width: 560px) {
  .footer__row {
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-start;
  }
}
</style>
