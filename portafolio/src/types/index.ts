export interface SkillCategory {
  id: string
  label: string
  code: string // identificador tipo "FE", "BE", "DB"...
  items: string[]
}

export interface ExperienceEntry {
  id: string
  org: string
  role: string
  period: string
  summary: string
  highlights: string[]
}

export interface LogEntry {
  id: string
  code: string // e.g. "LOG-01"
  title: string
  summary: string
  highlights: string[]
  stack: string[]
  href?: string
  period?: string
  context?: string
  status: 'live' | 'building' | 'classified'
}

export type SubmitState = 'idle' | 'sending' | 'sent' | 'error'

export interface ContactPayload {
  name: string
  email: string
  message: string
}
