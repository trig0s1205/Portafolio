<template>
  <div class="ambient" aria-hidden="true">
    <div class="ambient__orb ambient__orb--a" />
    <div class="ambient__orb ambient__orb--b" />
    <div class="ambient__grid" />
    <div class="ambient__noise" />
  </div>
</template>

<style scoped>
.ambient {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
}

.ambient__orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.35;
  will-change: transform;
}

.ambient__orb--a {
  width: min(52vw, 520px);
  height: min(52vw, 520px);
  top: -12%;
  right: -8%;
  background: radial-gradient(circle, rgba(245, 244, 241, 0.14) 0%, transparent 70%);
  animation: driftA 18s ease-in-out infinite;
}

.ambient__orb--b {
  width: min(44vw, 420px);
  height: min(44vw, 420px);
  bottom: 8%;
  left: -10%;
  background: radial-gradient(circle, rgba(245, 244, 241, 0.08) 0%, transparent 72%);
  animation: driftB 22s ease-in-out infinite;
}

.ambient__grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(245, 244, 241, 0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(245, 244, 241, 0.025) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: radial-gradient(ellipse 80% 70% at 50% 30%, black 20%, transparent 75%);
  animation: gridPulse 8s ease-in-out infinite;
}

.ambient__noise {
  position: absolute;
  inset: 0;
  opacity: 0.04;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}

@keyframes driftA {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(-4%, 6%) scale(1.08); }
}

@keyframes driftB {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(5%, -4%) scale(1.06); }
}

@keyframes gridPulse {
  0%, 100% { opacity: 0.55; }
  50% { opacity: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .ambient__orb,
  .ambient__grid {
    animation: none;
  }
}
</style>
