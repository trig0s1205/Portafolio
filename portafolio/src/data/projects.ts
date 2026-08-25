import type { LogEntry } from '@/types'

export const logEntries: LogEntry[] = [
  {
    id: 'luxtimee',
    code: 'LOG-01',
    title: 'Luxtimee',
    summary:
      'E-commerce de relojería de lujo construido como monorepo de punta a punta: vitrina premium, checkout, panel administrativo, registro VIP de propietarios y servicio de imágenes dedicado. Diseñado para sentirse exclusivo y funcionar rápido bajo carga real.',
    stack: ['Vue 3', 'TypeScript', 'NestJS', 'Prisma', 'PostgreSQL', 'pnpm', 'Docker'],
    href: 'https://github.com/trig0s1205/Luxtimee',
    status: 'building'
  },
  {
    id: 'cashsolution',
    code: 'LOG-02',
    title: 'CashSolution',
    summary:
      'Sitio corporativo para firma de gestión financiera y contable en Colombia: landing de alto impacto, secciones de servicios, formulario de contacto funcional, integración con WhatsApp y animaciones de scroll pensadas para convertir visitantes en clientes.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Web3Forms', 'Cloudinary', 'Responsive UI'],
    href: 'https://www.cashsolution.com.co/',
    status: 'live'
  },
  {
    id: 'foscal-tools',
    code: 'LOG-03',
    title: 'Herramientas digitales · FOSCAL',
    summary:
      'Sistemas internos para operación hospitalaria y salud de alta complejidad: flujos clínicos-administrativos, seguimiento operativo y herramientas que traducen datos en decisiones en tiempo real.',
    stack: ['TypeScript', '.NET', 'Vue.js', 'SQL Server', 'Agentes IA', 'REST APIs'],
    status: 'classified'
  }
]
