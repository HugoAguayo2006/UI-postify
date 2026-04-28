# UI Postify

Interfaz de Postify hecha con React, Vite y Tailwind CSS.

## Requisitos

- Node.js instalado.
- npm instalado.

## Instalacion

Instala las dependencias del proyecto:

```bash
npm install
```

## Correr en desarrollo

Levanta el servidor local de Vite:

```bash
npm run dev
```

Despues abre la URL que aparezca en la terminal. Normalmente sera:

```bash
http://localhost:5173
```

## Scripts disponibles

```bash
npm run dev
```

Inicia el proyecto en modo desarrollo.

```bash
npm run build
```

Genera la version de produccion en la carpeta `dist/`.

```bash
npm run preview
```

Sirve localmente la version generada con `npm run build`.

```bash
npm run lint
```

Revisa el codigo con ESLint.

## Variables de entorno

Este proyecto puede usar variables locales en archivos `.env`. Esos archivos no se suben al repositorio porque suelen contener configuracion privada.

Si necesitas documentar variables para el equipo, crea un archivo `.env.example` con nombres de ejemplo y sin secretos reales.
