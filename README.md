# Andrés España — Portfolio (Next.js)

Proyecto personal construido con Next.js (app router) y TypeScript. Incluye una sección de hero con animación de "Ribbons" (WebGL) y páginas de proyectos, contacto y sobre mí.

## Requisitos
- Node.js 18+
- pnpm (recomendado, el repositorio incluye `pnpm-lock.yaml`)

## Instalación (recomendada)

1. Instalar pnpm globalmente (si no lo tienes):

```powershell
npm install -g pnpm
```

2. Instalar dependencias respetando el lockfile:

```powershell
pnpm install
```

3. Ejecutar en modo desarrollo:

```powershell
pnpm dev
```

4. Construir para producción:

```powershell
pnpm build
pnpm start
```

## Notas sobre Ribbons (animación del cursor)
- El componente `components/Ribbons.tsx` usa `ogl` y WebGL. Está cargado solo en el cliente (SSR deshabilitado).
- Para que las cintas sigan el cursor, el código escucha eventos en `window` (mousemove, touch).
- La sección `Hero` oculta el cursor por defecto (`cursor-none`) y los elementos interactivos (`button`, `a`, la imagen del perfil) tienen `cursor-pointer` para que se vea el puntero cuando corresponda.
- Si la animación no se ve, verifica que tu navegador soporte WebGL y que no haya extensiones bloqueando canvases.

## Auditoría y seguridad
- Puedes ejecutar `pnpm audit` y `pnpm audit fix` para ver vulnerabilidades. Ten en cuenta que `pnpm audit fix --force` puede actualizar paquetes a versiones mayores.

## CI
- Hay un workflow de GitHub Actions en `.github/workflows/ci.yml` que corre `pnpm install`, `pnpm lint`, `pnpm build` y `pnpm test`.

## Si algo falla
- Revisa la terminal para ver errores de compilación. Si el error menciona módulos faltantes, instala la dependencia con `pnpm add <package>`.
- Para problemas de tipos con paquetes sin tipos (`ogl`, etc.), hay declaraciones mínimas en `types/`.
