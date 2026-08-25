import type { SkillCategory } from '@/types'

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    code: 'FE',
    label: 'Frontend',
    items: [
      'HTML5', 'CSS3', 'TypeScript', 'JavaScript', 'Vue.js', 'Next.js',
      'Vite', 'GSAP', 'Pinia', 'Blazor WASM', 'Blazor Server',
      'ASP.NET Core MVC', 'Razor Pages', 'Responsive Design'
    ]
  },
  {
    id: 'backend',
    code: 'BE',
    label: 'Backend',
    items: [
      'Python', 'Node.js', 'NestJS', 'Express', 'PHP',
      'TypeScript', 'C#', '.NET', 'REST APIs', 'Prisma ORM'
    ]
  },
  {
    id: 'data',
    code: 'DB',
    label: 'Bases de datos',
    items: ['PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB', 'Redis', 'Prisma']
  },
  {
    id: 'ai',
    code: 'AI',
    label: 'IA / Agentes',
    items: [
      'Cursor Agents', 'LangGraph', 'LM Studio', 'OpenRouter',
      'Prompt Engineering', 'MCP', 'RAG', 'Automatización con LLMs'
    ]
  },
  {
    id: 'arch',
    code: 'AR',
    label: 'Arquitectura',
    items: [
      'Arquitectura Hexagonal', 'Clean Architecture',
      'Monorepos', 'Microservicios', 'Domain-Driven Design'
    ]
  },
  {
    id: 'tools',
    code: 'OP',
    label: 'DevOps & Herramientas',
    items: [
      'Git', 'Docker', 'pnpm', 'Vercel', 'Playwright',
      'Figma', 'EmailJS', 'Web3Forms', 'Cloudinary'
    ]
  }
]
