# Quimeico

Sitio web de Quimeico: agua en bidones de 20 litros y dispensadores para familias y empresas en Coyhaique, Aysén y Puerto Chacabuco.

Incluye productos, información de la planta, apoyo al deporte regional y contacto por WhatsApp y redes sociales.

## Organización

```text
index.html          Contenido y estructura de la página
src/
  styles.css        Estilos y diseño adaptable a celulares
  main.js           Año del pie de página y navegación activa
public/
  assets/           Fotografías y logo de Quimeico
scripts/
  build.mjs         Generación de la carpeta de publicación
.openai/
  hosting.json      Configuración de hosting de Quimeico
```

## Trabajar en la página

Requiere Node.js 18 o superior. No necesita instalar dependencias.

1. Edita el contenido en `index.html`, el diseño en `src/styles.css` y el comportamiento en `src/main.js`.
2. Guarda las imágenes en `public/assets/`. En el HTML se referencian como `assets/nombre-del-archivo.jpeg`.
3. Genera la página:

   ```sh
   npm run build
   ```

4. Abre `dist/index.html` en el navegador para revisar el resultado.

## Publicación

La carpeta `dist/` contiene la página lista para publicar y se genera con el comando anterior. No se guarda en Git: GitHub conserva los archivos fuente y las imágenes originales.

La configuración existente en `.openai/hosting.json` mantiene la identidad del sitio Quimeico y utiliza `dist/` como carpeta de publicación. Ejecuta `npm run build` antes de publicar.

Este repositorio contiene únicamente el sitio de Quimeico.
