import type { SkillCategory } from '@/types'

// Edita libremente estas listas para mantenerlas sincronizadas con tu README.
export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    code: 'FE',
    label: 'Frontend',
    items: [
      'HTML5', 'CSS3', 'TypeScript', 'JavaScript', 'Vue.js', 'Next.js',
      'Vite', 'Blazor WASM', 'Blazor Server', 'ASP.NET Core MVC', 'Razor Pages'
    ]
  },
  {
    id: 'backend',
    code: 'BE',
    label: 'Backend',
    items: ['Python', 'Node.js', 'PHP', 'TypeScript', 'C#', '.NET', 'NestJS']
  },
  {
    id: 'data',
    code: 'DB',
    label: 'Bases de datos',
    items: ['PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB', 'Redis', 'Prisma ORM']
  },
  {
    id: 'ai',
    code: 'AI',
    label: 'IA / LLMs',
    items: ['LangGraph', 'LM Studio', 'OpenRouter', 'Modelos open-source y de pago']
  },
  {
    id: 'arch',
    code: 'AR',
    label: 'Arquitectura',
    items: ['Arquitectura Hexagonal', 'Clean Architecture', 'REST APIs']
  },
  {
    id: 'tools',
    code: 'OP',
    label: 'Herramientas',
    items: ['Vercel', 'Playwright', 'Figma', 'Stitch', 'Git']
  }
]
