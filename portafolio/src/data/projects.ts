import type { LogEntry } from '@/types'

// Reemplaza title / summary / stack / href cuando tengas los proyectos reales.
// El "code" (LOG-01, LOG-02...) funciona como número de bitácora, no como prioridad.
export const logEntries: LogEntry[] = [
  {
    id: 'luxury-brand',
    code: 'LOG-01',
    title: 'Proyecto Luxury Brand',
    summary:
      'E-commerce de relojería de lujo de punta a punta: vitrina, checkout y un panel de control para gestionar catálogo y registro VIP de propietarios.',
    stack: ['Vue', 'TypeScript', 'Vite', 'PostgreSQL'],
    status: 'building'
  },
  {
    id: 'auth-system',
    code: 'LOG-02',
    title: 'Proyecto Auth System',
    summary:
      'Sistema de autenticación construido sobre NestJS con cobertura de pruebas de seguridad automatizadas usando Playwright.',
    stack: ['NestJS', 'TypeScript', 'Playwright', 'Redis'],
    status: 'building'
  },
  {
    id: 'legal-tech',
    code: 'LOG-03',
    title: 'Proyecto Legal-Tech',
    summary:
      'Herramienta para organizar expedientes judiciales: estructura archivos, detecta inconsistencias y entrega un documento listo para presentar.',
    stack: ['Python', 'PDF Processing', 'Clean Architecture'],
    status: 'classified'
  }
]
