import emailjs from '@emailjs/browser'
import type { ContactPayload } from '@/types'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim()
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID?.trim()
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim()

let initialized = false

function ensureEmailJsReady(): void {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    throw new Error(
      'EmailJS no está configurado. Crea un archivo .env con VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID y VITE_EMAILJS_PUBLIC_KEY (ver .env.example).'
    )
  }

  if (!initialized) {
    emailjs.init({ publicKey: PUBLIC_KEY })
    initialized = true
  }
}

function getEmailJsErrorMessage(err: unknown): string {
  if (err && typeof err === 'object' && 'text' in err && typeof err.text === 'string') {
    return err.text
  }
  if (err instanceof Error) return err.message
  return 'No se pudo enviar el mensaje.'
}

/**
 * Envía el mensaje de contacto directo a tu bandeja de Gmail vía EmailJS.
 * No requiere backend propio: EmailJS gestiona el envío server-side.
 * Configura las 3 variables en .env (ver .env.example y README.md).
 */
export async function sendContactMessage(payload: ContactPayload): Promise<void> {
  ensureEmailJsReady()

  const name = payload.name.trim()
  const email = payload.email.trim()
  const message = payload.message.trim()

  if (!name || !email || !message) {
    throw new Error('Completa nombre, correo y mensaje antes de enviar.')
  }

  try {
    const response = await emailjs.send(SERVICE_ID!, TEMPLATE_ID!, {
      from_name: name,
      from_email: email,
      reply_to: email,
      message,
      subject: `Portafolio — mensaje de ${name}`
    })

    if (response.status !== 200) {
      throw new Error(response.text || 'El servicio de correo respondió con un error.')
    }
  } catch (err) {
    throw new Error(getEmailJsErrorMessage(err))
  }
}
