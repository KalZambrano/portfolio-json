
<div align="center">
  <h2>Portfolio JSON - Résumé Web</h2>

Un portafolio responsive maquetado para web con soporte para múltiples idiomas (ES, EN, FR, PT), dark mode y light mode. 

<p>
Esquema del JSON de CV de <a href="https://jsonresume.org/schema/">jsonresume.org</a>
</p>

<p>
Basado en el diseño de <a href="https://github.com/midudev/minimalist-portfolio-json">Midudev</a>
</p>
</div>

<img src="portada.png"></img> 

## Descripción

Este proyecto es un template de CV/Résumé completamente personalizable que se alimenta de archivos JSON. Permite mostrar tu información profesional de una manera elegante y moderna, con:

- **Soporte multiidioma**: Español (predeterminado), Inglés, Francés y Portugués
- **Tema oscuro/claro**: Cambio automático según preferencias del sistema o manual
- **Totalmente responsive**: Adaptado para cualquier dispositivo
- **Fácil de personalizar**: Solo edita los archivos JSON según tu idioma

## 🛠️ Stack

- [**Astro**](https://astro.build/): Framework web rápido y moderno.
- [**Typescript**](https://www.typescriptlang.org/): JavaScript con sintaxis de tipado.
- [**Tailwind CSS**](https://tailwindcss.com/): Utilidades CSS para un diseño flexible.
- [**Tailwind Animations**](https://tailwind-animations.com/): Animaciones rapidas y espectaculares.

## 🚀 Empezar

### 1. Usa este [repo](https://github.com/midudev/minimalist-portfolio-json) como _template_ de un proyecto de Astro


```sh
# Inicializa el proyecto
npm create astro@latest -- --template KalZambrano/portfolio-json
```

### 2. Editar contenido

Edita los archivos JSON según el idioma que desees actualizar:

- `cv_spanish.json` - Para contenido en español
- `cv_english.json` - Para contenido en inglés
- `cv_french.json` - Para contenido en francés
- `cv_portuguese.json` - Para contenido en portugués

Cada archivo contiene secciones como: información personal, educación, experiencia, proyectos, habilidades, etc.

### 3. Gestionar idiomas (opcional)

Si deseas eliminar algunos idiomas y que no se muestren en la interfaz de selección, edita el componente `src/components/LanguageSelector.astro` para remover las opciones que no necesites.

### 4. Ejecutar en desarrollo

Una vez editados los archivos, inicia el servidor de desarrollo:

```sh
# Revisa el resultado
npm run dev
```

El proyecto estará disponible en `http://localhost:4321`

## 📦 Comandos disponibles

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando              | Acción                                      |
| :------------------- | :------------------------------------------ |
| `npm install`        | Instala las dependencias                   |
| `npm run dev`        | Inicia servidor local en `localhost:4321` |
| `npm run build`      | Compila el proyecto a `./dist/`            |
| `npm run preview`    | Previsualiza el build local                |

## 📁 Estructura del proyecto

```text
/
├── public/
├── src/
│   ├── assets/
│   │   ├── skills/
│   │   └── social/
│   ├── components/
│   │   ├── App.astro
│   │   ├── LanguageSelector.astro
│   │   └── sections/
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── en/
│   │   ├── fr/
│   │   └── pt/
│   ├── cv.d.ts
│   └── types.d.ts
├── cv_spanish.json
├── cv_english.json
├── cv_french.json
├── cv_portuguese.json
└── package.json
```

## 🎨 Personalización

- **Colores y estilos**: Modifica `src/styles/global.css` y los archivos `.astro`
- **Idiomas**: Usa `LanguageSelector.astro` para agregar o quitar opciones de idioma
- **Contenido**: Actualiza los archivos JSON (`cv_*.json`) con tu información

## 📄 Licencia

Libre para usar y modificar.
