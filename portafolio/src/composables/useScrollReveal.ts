import { onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type RevealVariant = 'up' | 'left' | 'right' | 'scale'

function getFromVars(variant: RevealVariant) {
  switch (variant) {
    case 'left':
      return { opacity: 0, x: -28, y: 0 }
    case 'right':
      return { opacity: 0, x: 28, y: 0 }
    case 'scale':
      return { opacity: 0, y: 12, scale: 0.96 }
    default:
      return { opacity: 0, y: 28 }
  }
}

/**
 * Revela elementos [data-reveal] con variantes y grupos escalonados [data-reveal-group].
 */
export function useScrollReveal(rootRef: { value: HTMLElement | null }) {
  let ctx: gsap.Context | null = null

  onMounted(() => {
    const root = rootRef.value
    if (!root) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReduced) {
      root.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
        el.classList.add('is-revealed')
      })
      return
    }

    ctx = gsap.context(() => {
      root.querySelectorAll<HTMLElement>('[data-reveal-group]').forEach((group) => {
        const items = group.querySelectorAll<HTMLElement>('[data-reveal]')
        if (!items.length) return

        gsap.fromTo(
          items,
          { opacity: 0, y: 32, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.75,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: group,
              start: 'top 85%',
              once: true
            }
          }
        )
      })

      root.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
        if (el.closest('[data-reveal-group]')) return

        const variant = (el.dataset.reveal as RevealVariant) || 'up'
        const from = getFromVars(variant)

        gsap.fromTo(
          el,
          from,
          {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              once: true
            }
          }
        )
      })
    }, root)
  })

  onBeforeUnmount(() => {
    ctx?.revert()
  })
}
