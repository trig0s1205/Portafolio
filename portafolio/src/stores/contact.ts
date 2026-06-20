import { defineStore } from 'pinia'
import type { ContactPayload, SubmitState } from '@/types'
import { sendContactMessage } from '@/services/email'

interface ContactState {
  status: SubmitState
  errorMessage: string | null
}

export const useContactStore = defineStore('contact', {
  state: (): ContactState => ({
    status: 'idle',
    errorMessage: null
  }),
  actions: {
    async submit(payload: ContactPayload) {
      this.status = 'sending'
      this.errorMessage = null
      try {
        await sendContactMessage(payload)
        this.status = 'sent'
      } catch (err) {
        this.status = 'error'
        this.errorMessage =
          err instanceof Error ? err.message : 'No se pudo enviar el mensaje.'
      }
    },
    reset() {
      this.status = 'idle'
      this.errorMessage = null
    }
  }
})
