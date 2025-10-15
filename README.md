# Andrés España — Portfolio (Next.js)

Proyecto personal construido con Next.js (app router) y TypeScript. Incluye una sección de hero con animación de "Ribbons" (WebGL) y páginas de proyectos, contacto y sobre mí.

## Requisitos
- Node.js 18+
- pnpm (recomendado, el repositorio incluye `pnpm-lock.yaml`)

## Notas sobre Ribbons (animación del cursor)
- El componente `components/Ribbons.tsx` usa `ogl` y WebGL. Está cargado solo en el cliente (SSR deshabilitado).
- Para que las cintas sigan el cursor, el código escucha eventos en `window` (mousemove, touch).
- La sección `Hero` oculta el cursor por defecto (`cursor-none`) y los elementos interactivos (`button`, `a`, la imagen del perfil) tienen `cursor-pointer` para que se vea el puntero cuando corresponda.

## CI
- Hay un workflow de GitHub Actions en `.github/workflows/ci.yml` que corre `pnpm install`, `pnpm lint`, `pnpm build` y `pnpm test`.
