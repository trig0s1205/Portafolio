import { onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'

/** Tilt sutil 3D en tarjetas al mover el mouse. */
export function useCardTilt(rootRef: { value: HTMLElement | null }, selector = '[data-tilt]') {
  const cleanups: (() => void)[] = []

  onMounted(() => {
    const root = rootRef.value
    if (!root) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    root.querySelectorAll<HTMLElement>(selector).forEach((card) => {
      const onMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width - 0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5

        gsap.to(card, {
          rotateY: x * 6,
          rotateX: -y * 6,
          y: -4,
          duration: 0.35,
          ease: 'power2.out',
          transformPerspective: 900
        })
      }

      const onLeave = () => {
        gsap.to(card, {
          rotateY: 0,
          rotateX: 0,
          y: 0,
          duration: 0.5,
          ease: 'power3.out'
        })
      }

      card.addEventListener('mousemove', onMove)
      card.addEventListener('mouseleave', onLeave)
      cleanups.push(() => {
        card.removeEventListener('mousemove', onMove)
        card.removeEventListener('mouseleave', onLeave)
      })
    })
  })

  onBeforeUnmount(() => {
    cleanups.forEach((fn) => fn())
  })
}
