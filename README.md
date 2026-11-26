# Material complementario de «Cómo crear una página web y no morir en el intento»

Este repositorio acompaña al libro **Cómo crear una página web y no morir en el intento**, de Rafael Pannacci. Aquí están los dos proyectos de ejemplo que el libro usa en los capítulos 5 y 6: la misma página, construida de dos maneras.

| Carpeta | Qué es | Capítulo |
|---|---|---|
| `ruedalibre-astro` | La página hecha con Astro. Se publica en Cloudflare. | 5 y 10 |
| `ruedalibre-react` | La misma página hecha con React y Vite. Se publica en Vercel. | 6 y 9 |

**Ruedalibre es un negocio inventado**: una bicicletería a domicilio en Quito. El dominio `ruedalibre.example` está reservado para ejemplos y no corresponde a ningún sitio real. El teléfono de WhatsApp (`593990000000`), el correo (`hola@ruedalibre.example`) y el RUC del aviso de privacidad son de relleno. Antes de publicar tu propia página, cámbialos por los tuyos, como explica el capítulo 5.

## Cómo descargarlo

No necesitas saber usar Git:

1. Pulsa el botón verde **Code**, arriba a la derecha de esta página.
2. Elige **Download ZIP** y descomprime el archivo.
3. Copia la carpeta del proyecto que quieras (`ruedalibre-astro` o `ruedalibre-react`) a un lugar de tu computadora, por ejemplo Documentos.

Si prefieres Git: `git clone https://github.com/somossoftgrama/como-crear-una-pagina-web-material.git`

## Cómo usarlo

Abre la carpeta del proyecto en Visual Studio Code, abre la terminal integrada y ejecuta:

```
npm install
npm run dev
```

Se abre una dirección local (`http://localhost:4321` en Astro, `http://localhost:5173` en React). Para generar la versión que se publica:

```
npm run build
npm run preview
```

En `ruedalibre-react` también está `npm run lint`, que revisa la calidad del código.

## Requisitos

- **Node.js**: Astro 7 pide la versión 22.23.4 o superior. Vite 8 pide la 20.19 o superior, o la 22.12 o superior. Instala la versión LTS vigente desde [nodejs.org](https://nodejs.org).
- Probado el 26 de noviembre de 2026 con Node.js 24.20.0, Astro 7.4.13, React 19.3.1 y Vite 8.4.0. Las versiones están fijadas en `package.json` y `package-lock.json`, así que `npm install` instala exactamente esas.

## Lo que se midió

Son datos de este ejemplo, no una regla universal. Se midió el resultado de `npm run build` de cada proyecto:

| | Astro | React con Vite |
|---|---|---|
| Archivos finales (sin comprimir) | 11 080 bytes (unos 11 kB) | 230 301 bytes (unos 230 kB) |
| JavaScript que se descarga | Ninguno | 223 551 bytes (unos 224 kB) |
| El HTML trae el texto | Sí | No: el `body` solo contiene `<div id="root"></div>` |

## Licencia

El código de las carpetas `ruedalibre-astro` y `ruedalibre-react` se publica con licencia MIT (archivo `LICENSE`): puedes usarlo y adaptarlo, también para tus propios proyectos. El texto del libro no está incluido en este repositorio.

## Actualizaciones y dudas

Los servicios que usa el libro cambian de nombre, de menú y de precio. Para las actualizaciones, entra en [softgrama.com](https://www.softgrama.com). Si algo no funciona con versiones más nuevas, puedes abrir un *issue* en este repositorio.
