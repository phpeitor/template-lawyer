# Template Lawyer

[![forthebadge](http://forthebadge.com/images/badges/validated-html5.svg)](https://www.linkedin.com/in/drphp/)
[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](https://www.linkedin.com/in/drphp/)

<a href="https://www.instagram.com/amvsoft.tech/">
  <img src="https://cdn.dribbble.com/userupload/17517558/file/original-b1958094f710985eeec09646f46c99be.jpeg" alt="Instagram" width="700">
</a>

## Descripción

Landing institucional estática para Estudio Wiesse & Abogados. El proyecto es una exportación de WordPress/Elementor adaptada para ejecutarse desde Apache, con navegación por secciones, hero con video, información institucional, servicios, portafolio, publicaciones y contacto.

Actualmente no es una aplicación dinámica: no incluye backend propio, base de datos, autenticación, API ni sistema de reservas.

## Requisitos

- Apache 2.4 o un servidor HTTP compatible con rutas relativas.
- Navegador moderno con soporte para HTML5, video y JavaScript ES6.
- PHP no es necesario para la landing actual.

## Puesta En Marcha

1. Clonar el repositorio dentro del document root de Apache:

```bash
git clone https://github.com/phpeitor/template-lawyer.git
```

2. Iniciar Apache.

3. Abrir la ruta del proyecto, por ejemplo:

```text
http://127.0.0.1/template-lawyer/
```

No se debe abrir `index.html` directamente con `file://`, porque las rutas relativas, el video y algunos recursos del exportador pueden comportarse de forma distinta fuera de un servidor HTTP.

## Estructura

```text
.
├── index.html                         # Markup y contenido de la landing
├── wp-content/
│   ├── cache/autoptimize/css/          # CSS exportado y minificado
│   ├── cache/autoptimize/js/           # JavaScript exportado y minificado
│   ├── themes/watson/                 # Tema original exportado
│   ├── themes/watson-child/           # Estructura del tema hijo
│   └── uploads/                       # Imágenes, video y otros recursos
├── wp-includes/
│   ├── css/
│   │   └── custom.css                 # Estilos propios del proyecto
│   └── js/
│       └── custom.js                  # Configuración y JavaScript propio
└── .ia-context/                       # Convenciones para agentes de desarrollo
```

## Arquitectura Frontend

- `index.html` contiene exclusivamente estructura, contenido y referencias a recursos.
- `wp-includes/css/custom.css` contiene estilos propios y correcciones mantenibles.
- `wp-includes/js/custom.js` contiene la configuración estática necesaria para Elementor y el comportamiento propio de la landing.
- Los archivos de `wp-content/cache/autoptimize/` son artefactos exportados. Deben modificarse solo cuando no exista una fuente editable equivalente y el cambio sea imprescindible.
- Los assets visuales deben reutilizarse desde `wp-content/uploads/` antes de incorporar archivos nuevos.

La navegación principal utiliza estas anclas:

`#home`, `#about`, `#resume`, `#portfolio`, `#blog` y `#contact`.

## Convenciones De Desarrollo

- No mezclar CSS ni JavaScript propio dentro de `index.html`.
- No crear carpetas paralelas `css/` o `js/` en la raíz; los archivos propios pertenecen a `wp-includes/css/` y `wp-includes/js/`.
- Mantener rutas relativas para conservar compatibilidad con Apache y subdirectorios.
- No introducir frameworks, bundlers o backend para cambios que solo afectan a la landing estática.
- No publicar credenciales, tokens, datos de clientes ni información legal confidencial.
- No inventar casos, clientes, testimonios, credenciales profesionales o resultados jurídicos.
- Mantener textos, etiquetas, títulos alternativos y formularios en español cuando se actualice contenido visible.

Las reglas completas de trabajo están en [`.ia-context/AGENTS_ROLES.md`](.ia-context/AGENTS_ROLES.md) y [`.ia-context/FRONTEND_RULES.md`](.ia-context/FRONTEND_RULES.md).

## Validación

Antes de entregar cambios, comprobar:

- La página carga desde Apache sin errores JavaScript.
- Las hojas de estilo y scripts propios responden desde `wp-includes/`.
- El menú y todas las anclas navegan correctamente.
- El hero, imágenes, portafolio, publicaciones, formulario y mapa mantienen su funcionamiento esperado.
- La vista es usable en escritorio y móvil, sin desbordamiento horizontal.
- No quedan placeholders, enlaces vacíos no intencionales ni recursos locales con respuesta 404.

Una comprobación rápida del estado del repositorio puede ejecutarse con:

```bash
git diff --check
git status --short
```

## Estado Del Formulario

El formulario conserva el markup exportado de Contact Form 7, pero esta copia estática no incluye un endpoint backend para procesar envíos. Antes de presentarlo como funcional debe conectarse a un servicio autorizado y documentarse el tratamiento de datos personales.
