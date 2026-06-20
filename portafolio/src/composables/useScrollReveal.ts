import { onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Revela elementos [data-reveal] dentro de `rootRef` con un fade + lift discreto
 * al entrar en viewport. Respeta prefers-reduced-motion.
 */
export function useScrollReveal(rootRef: { value: HTMLElement | null }) {
  let triggers: ScrollTrigger[] = []

  onMounted(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!rootRef.value) return

    const targets = rootRef.value.querySelectorAll<HTMLElement>('[data-reveal]')

    if (prefersReduced) {
      targets.forEach((el) => el.classList.add('is-revealed'))
      return
    }

    targets.forEach((el, i) => {
      const tween = gsap.fromTo(
        el,
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay: (i % 4) * 0.05,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            once: true
          }
        }
      )
      if (tween.scrollTrigger) triggers.push(tween.scrollTrigger)
    })
  })

  onBeforeUnmount(() => {
    triggers.forEach((t) => t.kill())
    triggers = []
  })
}
