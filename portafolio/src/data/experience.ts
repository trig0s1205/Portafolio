import type { ExperienceEntry } from '@/types'

export const experienceEntries: ExperienceEntry[] = [
  {
    id: 'luxtime',
    org: 'Luxtime — relojería de lujo',
    role: 'Desarrollador Full Stack · contrato freelance',
    period: 'Julio 2026 – Agosto 2026',
    summary:
      'Único responsable técnico de la plataforma de e-commerce y gestión de pedidos. Cubrió arquitectura, backend, frontend, base de datos, despliegue y el cierre contractual del proyecto, entregado en producción.',
    highlights: [
      'Backend en NestJS con Clean Architecture, en capas desacopladas para mantenimiento y escala',
      'Frontend en Nuxt 3, pensado para una experiencia de compra acorde a una marca de lujo',
      'PostgreSQL en Google Cloud, con integridad relacional en catálogo y pedidos',
      'Documentación profesional y contrato formalizado bajo legislación colombiana',
      'Proyecto cerrado y en producción, dentro del alcance acordado con el cliente'
    ]
  },
  {
    id: 'cashsolution',
    org: 'CashSolution',
    role: 'Desarrollador Full Stack · proyecto freelance',
    period: 'Febrero 2026 – Marzo 2026',
    summary:
      'Landing comercial y automatizaciones para una firma de gestión financiera en Bucaramanga: captación de clientes, menos carga manual y control de facturas por pagar.',
    highlights: [
      'Landing con redirección directa a WhatsApp para captación y atención',
      'Automatización que conecta el WhatsApp del negocio con su registro en Excel',
      'Alertas al celular sobre facturas por pagar, en una operación que antes vivía en hojas de cálculo'
    ]
  },
  {
    id: 'foscal',
    org: 'FOSCAL — Fundación Oftalmológica de Santander',
    role: 'Desarrollador Full Stack',
    period: '2024 – 2025',
    summary:
      'Módulos internos sobre .NET Core para la operación diaria de una institución de salud de alta complejidad en Bucaramanga. El trabajo cruzó varios frentes del área de sistemas, con requerimientos de negocio distintos y poca tolerancia al error.',
    highlights: [
      'Módulos internos usados en la operación diaria de la fundación',
      'Flujos de backend nuevos, orientados a escalabilidad y mantenibilidad',
      'Automatización del registro de incapacidades laborales, con menos trabajo manual y menos error documental',
      'Flujos de compra a proveedores extranjeros, digitalizando un proceso administrativo crítico',
      'SQL Server para diseño y consulta, y Razor / ASP.NET MVC para las interfaces internas'
    ]
  }
]
