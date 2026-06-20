import emailjs from '@emailjs/browser'
import type { ContactPayload } from '@/types'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string

/**
 * Envía el mensaje de contacto directo a tu bandeja de Gmail vía EmailJS.
 * No requiere backend propio: EmailJS gestiona el envío server-side.
 * Configura las 3 variables en .env (ver .env.example y README.md).
 */
export async function sendContactMessage(payload: ContactPayload): Promise<void> {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    throw new Error(
      'EmailJS no está configurado. Revisa las variables VITE_EMAILJS_* en tu archivo .env'
    )
  }

  await emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      from_name: payload.name,
      from_email: payload.email,
      message: payload.message
    },
    { publicKey: PUBLIC_KEY }
  )
}
