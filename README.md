# Buceo Japón

Esta web usa un solo diseño: **Astro + Tailwind CSS**.

## Empezar

Instala las dependencias una vez:

```bash
npm install
```

Arranca la web:

```bash
npm run dev
```

Abre la dirección que aparece en la terminal (`http://localhost:4325`; la vista previa de `npm run preview` usa `http://localhost:4395`). Astro actualiza la página al guardar. Para parar el servidor, pulsa `Ctrl + C`.

## Carpetas

```text
public/images/   Fotos que se usan en la web
src/
  assets/        Dibujos SVG del sitio
  components/    Piezas reutilizables de la página
  data/          Textos, precios y otros datos
  layouts/       Estructura compartida de las páginas
  pages/         Páginas del sitio; cada archivo crea una ruta
  styles/        Estilos globales y configuración de Tailwind
```

## Dónde cambiar cosas

- Edita la portada en `src/pages/index.astro` y las páginas interiores en `src/pages/`.
- Edita los textos y precios compartidos en `src/data/content.js`.
- Edita colores y estilos globales en `src/styles/global.css`. Las clases de Tailwind se escriben en `class` dentro de los archivos `.astro`.
- Guarda las fotos en `public/images/` y úsalas con una ruta como `/images/israel.webp`.
- Los componentes reutilizables están en `src/components/`.

Por ejemplo, `src/pages/quien-soy.astro` corresponde a la dirección `/quien-soy/`.

## Poner fotos en «Dónde buceamos»

Copia cada foto en `public/images/puntos-buceo/` y ponle el nombre del punto de buceo. Aparecerá como una franja entre el kanji japonés y el nombre/descripción:

| Punto | Nombre del archivo |
| --- | --- |
| Kawana | `kawana.webp` |
| Atami | `atami.webp` |
| Izu Oceanic Park | `izu-oceanic-park.webp` |
| Yawatano | `yawatano.webp` |
| Osezaki | `osezaki.webp` |

También acepta `.jpg`, `.jpeg`, `.png` y `.avif`. No hace falta editar el código. Si todavía no has añadido una foto, la tarjeta mantiene su diseño original. Las fotos que estén directamente en `public/images/` no se muestran en estas tarjetas.

## Comprobar y publicar

```bash
npm run build
npm run preview
```

Para publicar en GitHub Pages:

```bash
npm run publish:pages
```

El comando compila Astro y copia el sitio generado a la raíz del repositorio, que es lo que publica GitHub Pages en este proyecto. Después, haz commit y push a `main`. No edites `dist/`: Astro la vuelve a crear al compilar.

El comando también borra de la raíz las páginas que ya no existen en `src/pages/`. Para saber cuáles publicó, guarda la lista en `scripts/published-files.json`; haz commit de ese archivo junto con lo demás. Solo borra páginas (`.html`) que haya publicado él, y la carpeta de esa página si se queda vacía. Las imágenes nunca se borran. La primera vez que se usa todavía no hay lista, así que no borra nada.

Para comprobar el comando de publicación:

```bash
npm test
```

## Quitar o renombrar una página

Si borras una página, quien tenga el enlace antiguo verá un error 404. Para llevarlo a otra página, añade una redirección en `astro.config.mjs`:

```js
export default defineConfig({
  redirects: {
    '/tarifas/': '/precios/',
  },
  // ...
});
```

Al publicar, Astro crea en la ruta antigua una página que manda al visitante a la nueva.
