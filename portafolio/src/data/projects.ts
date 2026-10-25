import type { LogEntry } from '@/types'

export const logEntries: LogEntry[] = [
  {
    id: 'luxtimee',
    code: '01',
    title: 'Luxtimee',
    period: '2026',
    context: 'Contrato freelance · en producción',
    summary:
      'Plataforma de e-commerce y gestión de pedidos para una relojería de lujo. Arquitectura, backend, frontend, datos y despliegue, de principio a fin.',
    highlights: [
      'NestJS con Clean Architecture y capas desacopladas',
      'Nuxt 3 para la experiencia de compra',
      'PostgreSQL en Google Cloud',
      'Entrega cerrada, documentada y en producción'
    ],
    stack: ['Nuxt 3', 'NestJS', 'PostgreSQL', 'Google Cloud', 'Clean Architecture'],
    href: 'https://luxtimee.com',
    status: 'live'
  },
  {
    id: 'cashsolution',
    code: '02',
    title: 'CashSolution',
    period: '2026',
    context: 'Proyecto freelance · Bucaramanga',
    summary:
      'Presencia comercial y automatización operativa para una firma contable y financiera: la landing capta, WhatsApp atiende y el negocio deja de duplicar datos a mano.',
    highlights: [
      'Landing comercial con paso directo a WhatsApp',
      'Puente entre WhatsApp y los registros en Excel',
      'Avisos de facturas por pagar al celular del negocio'
    ],
    stack: ['JavaScript', 'WhatsApp', 'Excel', 'Web'],
    href: 'https://www.cashsolution.com.co/',
    status: 'live'
  },
  {
    id: 'whatsapp-orders',
    code: '03',
    title: 'Bot de pedidos por WhatsApp',
    period: '2026',
    context: 'Proyecto propio · comida rápida',
    summary:
      'Bot sobre la API de WhatsApp Business que toma pedidos y responde solo. Los pedidos quedan en PostgreSQL y se gestionan en un panel con roles de administrador y cocina.',
    highlights: [
      'Meta API para tomar pedidos y responder mensajes',
      'Panel en React: el administrador verifica la captura y la cocina recibe lo confirmado',
      'Backend en Node.js y Python entre la API, la base y el panel',
      'Arquitectura pensada para adaptarse y venderse a otros negocios'
    ],
    stack: ['React', 'Node.js', 'Python', 'Meta API', 'PostgreSQL'],
    status: 'building'
  },
  {
    id: 'smoothie-saas',
    code: '04',
    title: 'SaaS para locales de granizados',
    period: '2026',
    context: 'Producto propio · multi-tenant',
    summary:
      'Un sitio independiente por local, con catálogo y registro de pedidos. Cada negocio recibe sus ventas por WhatsApp y paga una suscripción mensual.',
    highlights: [
      'Sitios separados para locales de Bucaramanga, con catálogo online',
      'Pedidos que llegan al WhatsApp de cada negocio',
      'Modelo de suscripción mensual por local',
      'Frontend en React y Next.js, backend en Node.js y datos en PostgreSQL'
    ],
    stack: ['React', 'Next.js', 'Node.js', 'PostgreSQL'],
    status: 'building'
  },
  {
    id: 'dixus',
    code: '05',
    title: 'DIXUS',
    period: '2026',
    context: 'Proyecto propio · relojería de lujo',
    summary:
      'Panel de control para catálogo y registro de garantías VIP. Nació como prototipo de interfaz y avanza hacia backend en PostgreSQL, acceso con Google y pedidos por WhatsApp.',
    highlights: [
      'Control Hub para catálogo y garantías VIP',
      'Validación de formularios con retroalimentación en el panel',
      'Camino previsto: PostgreSQL, autenticación con Google y pedidos por WhatsApp'
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'PostgreSQL'],
    href: 'https://dixus-time.vercel.app',
    status: 'building'
  }
]
