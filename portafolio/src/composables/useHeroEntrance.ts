import { onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'

/** Animación de entrada cinematográfica para el hero al cargar la página. */
export function useHeroEntrance(rootRef: { value: HTMLElement | null }) {
  let ctx: gsap.Context | null = null

  onMounted(() => {
    const root = rootRef.value
    if (!root) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      root.querySelectorAll('[data-hero]').forEach((el) => {
        ;(el as HTMLElement).style.opacity = '1'
      })
      return
    }

    ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.from('[data-hero="eyebrow"]', {
        opacity: 0,
        y: 16,
        duration: 0.6
      })

      tl.from(
        '[data-hero="title"]',
        {
          opacity: 0,
          y: 48,
          scale: 0.96,
          duration: 1.1,
          ease: 'power4.out'
        },
        '-=0.25'
      )

      tl.from(
        '[data-hero="name"]',
        {
          opacity: 0,
          x: -20,
          duration: 0.55
        },
        '-=0.65'
      )

      tl.from(
        '[data-hero="pulse"]',
        {
          opacity: 0,
          scaleX: 0,
          duration: 0.8,
          transformOrigin: 'left center'
        },
        '-=0.35'
      )

      tl.from(
        '[data-hero="line"]',
        {
          opacity: 0,
          y: 24,
          duration: 0.65,
          stagger: 0.1
        },
        '-=0.45'
      )

      tl.from(
        '[data-hero="pill"]',
        {
          opacity: 0,
          y: 14,
          scale: 0.92,
          duration: 0.45,
          stagger: 0.07
        },
        '-=0.35'
      )

      tl.from(
        '[data-hero="cta"]',
        {
          opacity: 0,
          y: 20,
          duration: 0.55,
          stagger: 0.1
        },
        '-=0.25'
      )
    }, root)
  })

  onBeforeUnmount(() => {
    ctx?.revert()
  })
}
