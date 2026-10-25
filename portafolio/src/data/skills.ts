import type { SkillCategory } from '@/types'

export const skillCategories: SkillCategory[] = [
  {
    id: 'backend',
    code: 'BE',
    label: 'Backend',
    items: ['.NET Core', 'C#', 'Node.js', 'NestJS', 'Fastify', 'Python']
  },
  {
    id: 'frontend',
    code: 'FE',
    label: 'Frontend',
    items: ['React', 'Next.js', 'Vue.js', 'Nuxt 3', 'Angular', 'TypeScript', 'Tailwind CSS']
  },
  {
    id: 'data',
    code: 'DB',
    label: 'Datos',
    items: ['PostgreSQL', 'SQL Server', 'SQL', 'Modelado relacional']
  },
  {
    id: 'arch',
    code: 'AR',
    label: 'Arquitectura',
    items: ['Clean Architecture', 'APIs externas', 'Meta API', 'WhatsApp Business']
  },
  {
    id: 'tools',
    code: 'OP',
    label: 'Entrega',
    items: ['Git', 'Google Cloud', 'Vercel', 'npm', 'Despliegue en la nube']
  }
]
