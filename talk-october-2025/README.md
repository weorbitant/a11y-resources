# Charla de accesibilidad web - Octubre 2025

En este repositorio encontraras el contenido práctico sobre nuestra charla de accesibilidad web impartida en octubre de 2025.

## Requisitos previos

Para iniciar este proyecto es necesario tener instalado Node.js. Puedes usar cualquier versión superior a la 18, pero se recomienda la 20.11.0.

## Iniciar la APP.

Instalar dependencias.

```bash
npm i
```

Ejecutar la app

```bash
npm run dev
```

Podrás acceder a la web en: http://localhost:5173/

## Contenido del repositorio

Tenemos un repositorio con una aplicación de React creada con Vite, la cual tiene los siguientes archivos:

- Un archivo index.html con el layout de la página.
- Una carpeta con los assets de la aplicación en `src/assets`.
- Una carpeta con los textos de la página Home en `src/data`.
- La version accesible de la página Home en `src/pages/inaccessible/Home`.
- La version inaccesible de la página Home en `src/pages/inaccessible/Home`.
- La version accesible de la página Blog en `src/pages/inaccessible/Blog`.
- La version inaccesible de la página Blog en `src/pages/inaccessible/Blog`.
- Una página de ejemplo con checkboxes tanto accesibles como inaccesibles en `src/pages/checkbox`.

```
index.html
|-public
|-src
|---assets
|-----RRSS
|-----blog
|-----languages
|---data
|---pages
|-----checkbox
|-----inaccessible
|-------Blog
|-------Home
|-----accessible
|-------Blog
|-------Home
```

## Herramientas usadas para auditoría

- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [wave](https://wave.webaim.org/)
- [axe](https://www.deque.com/axe/)
- [Siteimprove](https://siteimprove.com/en-us/)
- [WCAG 2.2 Guidelines](https://www.w3.org/TR/WCAG22/)
- [NVDA](https://www.nvaccess.org/)

## Autor

Kevin Martinez - [@kevinmartinez](https://github.com/kevinccbsg)
