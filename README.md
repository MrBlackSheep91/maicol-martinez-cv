# Maicol Martinez - Personal Landing Page

Landing page personal profesional con CV descargable, portfolio de proyectos y formulario de contacto.

## Stack

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Lucide React** (iconos)

## Estructura

```
maicol-landing/
├── app/
│   ├── layout.tsx          # Layout + SEO
│   ├── page.tsx            # Landing principal
│   └── globals.css         # Theme + Tailwind
├── components/
│   ├── navbar.tsx          # Navegación sticky
│   ├── hero-section.tsx    # Hero con foto + CTAs
│   ├── about-section.tsx   # Historia + Timeline
│   ├── services-section.tsx # Servicios ofrecidos
│   ├── skills-section.tsx  # Stack técnico
│   ├── portfolio-section.tsx # Proyectos destacados
│   ├── contact-section.tsx # Formulario + Info
│   └── footer.tsx          # Footer
├── public/
│   ├── profile.jpg         # Foto de perfil (AGREGAR)
│   └── cv-maicol-martinez.pdf # CV descargable (AGREGAR)
└── package.json
```

## Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Build para producción
npm run build
```

## Assets Necesarios

Antes de ejecutar, agrega estos archivos a `/public`:

1. **profile.jpg** - Tu foto de perfil (cuadrada, mínimo 400x400px)
2. **cv-maicol-martinez.pdf** - Tu CV en PDF

## Deploy

### Vercel (Recomendado)

```bash
npm install -g vercel
vercel
```

### Railway

```bash
npm run build
# Deploy manual en Railway dashboard
```

### Static Export

El proyecto está configurado para export estático. Después de `npm run build`, sube la carpeta `out/` a cualquier hosting estático.

## Personalización

### Colores (globals.css)

```css
:root {
  --primary: #0099cc;      /* Cyan - Tech */
  --accent: #e6a800;       /* Gold - Trading */
  --background: #0a0a0a;   /* Dark */
}
```

### Contenido

- **Hero**: Editar `components/hero-section.tsx`
- **About/Timeline**: Editar `components/about-section.tsx`
- **Servicios**: Editar array en `components/services-section.tsx`
- **Skills**: Editar arrays en `components/skills-section.tsx`
- **Portfolio**: Editar array en `components/portfolio-section.tsx`
- **Contacto**: Editar `components/contact-section.tsx`

## Integración Formulario

El formulario actualmente solo hace console.log. Para integrarlo:

### Opción A: N8N Webhook

```typescript
// En contact-section.tsx
const response = await fetch('https://n8n.tudominio.com/webhook/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
})
```

### Opción B: API Route Next.js

```typescript
// Crear app/api/contact/route.ts
export async function POST(request: Request) {
  const data = await request.json()
  // Enviar email, guardar en DB, etc.
  return Response.json({ success: true })
}
```

---

**Creado por:** Maicol Martinez
**Framework:** Next.js + Tailwind + TypeScript
