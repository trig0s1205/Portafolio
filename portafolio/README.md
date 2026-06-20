# TRG1205 — Portafolio

Portafolio personal construido con **Vue 3 + TypeScript + Vite**, con animaciones
con GSAP, estado con Pinia y formulario de contacto conectado directamente a Gmail
vía EmailJS (sin backend propio).

## Stack

- Vue 3 (`<script setup>`) + TypeScript
- Vite
- Pinia (estado del formulario de contacto)
- GSAP + ScrollTrigger (animaciones de scroll y la línea de pulso de la firma visual)
- `@emailjs/browser` (envío de correo)

## 1. Instalar dependencias

```bash
npm install
```

## 2. Configurar el envío de correo (EmailJS → tu Gmail)

1. Crea una cuenta gratuita en [emailjs.com](https://www.emailjs.com/).
2. En **Email Services**, conecta tu cuenta de Gmail → copia el **Service ID**.
3. En **Email Templates**, crea una plantilla con las variables
   `{{from_name}}`, `{{from_email}}` y `{{message}}` → copia el **Template ID**.
4. En **Account → General**, copia tu **Public Key**.
5. Copia `.env.example` a `.env` y completa los 3 valores:

```bash
cp .env.example .env
```

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
```

El plan gratuito de EmailJS permite 200 correos/mes — de sobra para un portafolio.

## 3. Editar tu contenido

Todo el contenido vive en archivos de datos, sin tocar componentes:

| Qué editar | Archivo |
|---|---|
| Habilidades por categoría | `src/data/skills.ts` |
| Proyectos (bitácora) | `src/data/projects.ts` |
| Enlaces de contacto (GitHub, LinkedIn, email) | `src/data/contact.ts` |
| Bio / texto del Hero | `src/components/HeroSection.vue`, `src/components/AboutSection.vue` |

## 4. Levantar en desarrollo

```bash
npm run dev
```

## 5. Compilar para producción

```bash
npm run build
```

Esto genera la carpeta `dist/` lista para desplegar.

## 6. Desplegar en Vercel

```bash
npm i -g vercel
vercel
```

O conecta el repositorio directamente desde [vercel.com/new](https://vercel.com/new) —
Vercel detecta Vite automáticamente. **No olvides** agregar las 3 variables
`VITE_EMAILJS_*` en *Project Settings → Environment Variables* en Vercel,
porque el archivo `.env` no se sube al repositorio.

## Estructura

```
src/
├── components/      # Secciones y piezas de UI
├── composables/      # Lógica reusable (scroll reveal)
├── data/             # Contenido editable (skills, proyectos, contacto)
├── services/          # Integración con EmailJS
├── stores/           # Estado global (Pinia)
└── types/             # Tipos TypeScript compartidos
```
