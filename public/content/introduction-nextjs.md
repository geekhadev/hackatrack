---
title: 'Introducción a NextJS'
date: '13 Enero 2024'
excerpt: 'Next.js: el framework de React para crear web apps rápidas y optimizadas.'
cover: '/tracks/introduction-nextjs.png'
deploy: ''
github: 'https://github.com/geekhadev/hackatrack'
youtube: ''
authorName: '@geekhadev'
authorAvatar: 'https://avatars.githubusercontent.com/u/499907?v=4'
authorGithub: 'https://github.com/geekhadev'
status: 'published'
---

### Introducción

[Next.js](https://nextjs.org/) es un excelente framework de [React](https://react.dev/) que nos permite crear aplicaciones web de forma rápida y sencilla, con una excelente experiencia de desarrollo, y un equipo genial que siempre está en el top de JavaScript. Actualmente ha tenido mucho aumento en su popularidad, según la [StateOfJs](https:StateOfJs.com), se posiciona como uno de los mas usados frameworks de renderizado para  React.

Pero, ¿Por que Next.js es tan popular?

Para que una herramienta de JavaScript hoy en día se haga tan popular influyen varios factores: debe ser fácil de aprender y debe estar optimizada para el rendimiento de un sitio web de alta concurrencia, dos cosas que Next.js nos ayuda a cumplir sin mayores complicaciones.

Algunas de las principales caracteristicas que encontramos en Next.js: sistema de enrutamiento basado en el sistema de archivos que nos hace entender en todo momento la estructura de rutas de nuestro proyecto, fácil implementación de Server Side Rendering (SSR), Client Side Rendering (CSR) y Static Site Generation (SSG), optimización de imágenes usando el component `next/image`, soporte para TypeScript, creación de API integrada en el framework y de fácil implementación y bajo o nula configuración, integración con una solución de despliegue pensado  y optimizado para Next.js, y una gran comunidad que cada crea nuevas integraciones y plantillas.

Algunos de los casos de uso en los que se puede implementar son: sitios web de comercio electrónico, Aplicaciones web empresariales, Sitios web de medios y noticias, Aplicaciones web de viajes y turismo, básicamente se puede implementar crear cualquier sitio web que requiera un alto rendimiento y una excelente experiencia de usuario. Aunque dependiendo de las necesidades de tu proyecto podrías encontrar mejores soluciones.

<br />

### Requisitos

Para poder seguir este track formativo es necesario tener conocimientos básicos de JavaScript, HTML y CSS, y tener instalado las siguientes herramientas:

- Editor de código de preferencias ([Visual studio code](https://code.visualstudio.com/), [Intellij](https://www.jetbrains.com/idea/))
- Conexión a Internet
- [Node +12]()
- [npm](https://docs.npmjs.com/cli/v8/commands/npm-install), [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable), [pnpm](https://pnpm.io/installation)
- [NVM](https://github.com/nvm-sh/nvm) (opcional)

### Instalación

La instalación de Next.js es un proceso sencillo y rápido. Sigue estos pasos:

> Asegúrate de tener Node.js instalado en tu sistema. Puedes verificar si tienes Node.js instalado escribiendo `node -v` en tu terminal. Si no lo tienes instalado, descárgalo desde el sitio web oficial de [Node.js](https://nodejs.org) e instálalo en tu sistema.

Aunque hay varias formas de instalar Node.js, la forma más sencilla es usar npm y create-next-app para mas detalles de como instalarlo puedes visitar la [Create a Next.js App](https://nextjs.org/learn/basics/create-nextjs-app).

- Instala create-next-app usando npm:

```bash
npx create-next-app@latest hackatrack
```
> Este comando creará un nuevo proyecto de Next.js llamado nextjs-app en tu sistema. Si prefieres usar otro package manager como yarn o pnpm, puedes usarlo en lugar de npm al ejecutar este comando.

Irán apareciendo una serie de preguntas, las cuales puedes responder de la siguiente manera:

```bash
✔ Would you like to use TypeScript? … No / Yes -> no
✔ Would you like to use ESLint? … No / Yes -> yes
✔ Would you like to use Tailwind CSS? … No / Yes -> yes
✔ Would you like to use `src/` directory? … No / Yes -> yes
✔ Would you like to use App Router? (recommended) … No / Yes -> yes
✔ Would you like to customize the default import alias (@/*)? … No / Yes -> no
```

> Nota: no hay respuestas correctas, todo dependerá de lo que quieras en la configuración de tu proyecto, esto es solo la configuracieon que usamos para el track.

¡Y eso es todo! Ahora toma un ☕  mientras se instalan las dependencias.

Luego que se instalen las dependencias, entra al directorio del proyecto y ejecuta el siguiente comando:

```bash
cd hackatrack
npm run dev
```

<br />

### Estructura del proyecto

```
your-project/
  ├── node_modules/
  ├── public/
  │   ├── next.svg
  │   └── vercel.svg
  ├── src/
  │   └── app/
  │       ├── page.js
  │       ├── layout.js
  │       ├── global.css
  │       ├── favicon.ico
  │       └── api/
  │           └── check.js
  ├── .eslintrc.json
  ├── .gitignore
  ├── jsconfig.json
  ├── next.config.js
  ├── package-lock.json
  ├── package.json
  ├── postcss.config.js
  ├── README.md
  └── tailwind.config.js
```

A continuación, se detalla la función de los directorios y archivos mas importantes al iniciar nuestro proyecto:

`node_modules/`: Este directorio contiene todas las dependencias y módulos necesarios para que funcione el proyecto. No se debe modificar ni eliminar manualmente. Se recomienda que este directorio no se debe subir a un repositorio de control de versiones.

`public/`: Este directorio contiene todos los archivos estáticos que se deben servir públicamente, como imágenes o archivos CSS. Los archivos que se colocan aquí se pueden acceder en el despliegue de la aplicación en la ruta /nombre-archivo.extensión. Por ejemplo, el archivo next.svg se puede acceder en la ruta /next.svg. [Documentación Static File Serving](https://nextjs.org/docs/basic-features/static-file-serving)

`src/app/`: Este es el "nuevo" directorio de gestión de url basadas en archivos ideado por NextJS. Cada fichero en este directorio se convierte en una ruta accesible a través de la aplicación. Por ejemplo, el archivo index.js se convierte en la página principal del sitio. Además, dentro de este directorio, existe una carpeta llamada api/ que se usa para crear rutas de API. [Documentación Routing](https://nextjs.org/docs/app/building-your-application/routing)

`src/app/global.css`: Este archivo contiene los estilos globales de la aplicación. Se utiliza principalmente para agregar estilos globales y otros elementos que se aplicarán a todas las páginas de la aplicación.

`src/app/layout.js`: Este archivo contiene el componente Layout, que se utiliza para envolver todas las páginas de la aplicación. El componente Layout se utiliza para agregar elementos que se deben mostrar en todas las páginas de la aplicación, como encabezados, pies de página, barras de navegación y otros elementos. (También es posible crear layouts personalizados para páginas específicas) [Documentación Layouts](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts)

`src/app/page.js`: Este fichero es la página principal de la aplicación. Se utiliza para mostrar el contenido principal de la aplicación, es el punto de entrada a la aplicación web y hace referencia a la url `http://localhost:3000/`.

`.eslintrc`: Este archivo contiene la configuración de ESLint, que es una herramienta de análisis de código estático para identificar patrones problemáticos encontrados en el código JavaScript.

`.gitignore`: Este archivo es utilizado por Git para determinar qué archivos y directorios deben ignorarse durante el seguimiento de versiones del proyecto.

`next.config.js`: Este archivo contiene la configuración de Next.js. Se utiliza para configurar el proyecto, como agregar encabezados HTTP personalizados, agregar plugins, configurar el directorio de compilación, configuraciones de despliegue para vercel, etc.

`package.json`: Este archivo es utilizado por npm (o Yarn) para almacenar la información del proyecto, incluyendo sus dependencias y scripts.

`README.md`: Este archivo es una descripción general del proyecto.

<br />

### Configurando editor

Agregamos una configuración básica para que nuestro editor de código nos ayude a escribir código de la mejor manera posible. Principalmente para mantener una buena indentación y posterior instalaremos un linter para que nos ayude a detectar errores en nuestro código.

Crea un fichero en la raíz del proyecto llamado `.editorconfig` y agrega la siguiente configuración:

```
root = true
[*]
end_of_line = lf
insert_final_newline = true
charset = utf-8
indent_style = space
indent_size = 2
```

<br />

### Rutas

Inicialmente podemos encontrar en nuestro proyecto solo la ruta inicial `/` y la ruta `/api/hello` que nos permite hacer una petición `GET` nos regresa un `json` con un mensaje de saludo.

Estas son las rutas que vamos a utilizar para hacer las prácticas de nuestro track, prácticaremos: construción de API, parámetros en rutas de apis, páginas server side render, cliente side render, obtención de parametros en rutas.

| Ruta                    | Path                              | Descripción                                                                       |
|-------------------------|-----------------------------------|-----------------------------------------------------------------------------------|
| /api/tracks             | src/app/api/tracks/index.js       | [API]() de tracks                                                                 |
| /api/tracks/:slug       | src/app/api/tracks/[slug].js      | [API]() detalle de un track                                                       |
| /                       | src/app/page.js                   | Listado de tracks ([SSR](/workshops/nextjs#server-side-rendering))                |
| /tracks/:slug           | src/app/tracks/[slug].js          | Detalle de un track ([CSR](/workshops/nextjs#client-side-rendering))              |
| /tracks/pendding        | src/app/tracks/pending/page.js    | Tracks pendientes ([SSR](/workshops/nextjs#server-side-rendering))                |

> Todas las paths de las rutas se encuentran en la carpeta `src/pages` y son las utilizadas en el track en vivo, es posible que luego en el avance del proyecto se reciban pull request o mejoras y se cambien estás rutas en el proyecto final.

<br />

### Configuración test estáticos

Los tests estáticos son utilizados para identificar y corregir errores de sintaxis, estilo y otros problemas en el código fuente, se ejecuta en tiempo de programación. Los test estáticos analizan el código fuente y ofrecen sugerencias para mejorar su calidad, legibilidad y mantenibilidad.

Si recuerdan en la instalación del proyecto aceptamos la instalación de un Linter que Next nos propone, este linter es [ESLint](https://eslint.org/), el cual nos ayuda a mantener un código limpio y ordenado. Es una buena práctica que utilices linters en todos tus proyectos así te darás cuenta de muchos errores mucho antes de ir a producción o ejecutar el código.

Inicializamos la configuración del Eslint:

```bash
npx eslint --init
```

Nos hará una serie de preguntas, las cuales puedes responder de la siguiente manera:

```bash
? How would you like to use ESLint? … 
  To check syntax only
  To check syntax and find problems
❯ To check syntax, find problems, and enforce code style

? What type of modules does your project use? … 
❯ JavaScript modules (import/export)
  CommonJS (require/exports)
  None of these

? Which framework does your project use? … 
❯ React
  Vue.js
  None of these

? Does your project use TypeScript? › No / Yes

? Where does your code run? …
  ✔ Browser
  ✔ Node

? How would you like to define a style for your project? … 
❯ Use a popular style guide
  Answer questions about your style

? Which style guide do you want to follow? … 
  Airbnb: https://github.com/airbnb/javascript
❯ Standard: https://github.com/standard/standard
  Google: https://github.com/google/eslint-config-google
  XO: https://github.com/xojs/eslint-config-xo

? What format do you want your config file to be in? … 
  JavaScript
  YAML
❯ JSON

? Would you like to install them now? › No / Yes

? Which package manager do you want to use? … 
❯ npm
  yarn
  pnpm
```

> Nota: recuerda que la guía de estilos y parámetros de configuración del linter pueden variar según tus gustos y las necesidades del proyecto y del equipo.

***Configuración del comando `lint` para uso en la terminal***

Configuración del comando `lint` en el `package.json`, en caso de que no se encuentren los comandos en el archivo, agregarlos.

```
"scripts": {
  ...,
  "lint": "next lint",
  "lint:fix": "next lint --fix"
},
```

> Si te preguntas cual es la diferencia entre `lint` y `lint:fix`, la primera es para correr los test estáticos y la segunda hace lo mismo pero además intenta corregir los errores que pueda.

***Configuración del linter en VSCode***

Para configurar el linter en VSCode, debemos instalar la extensión de ESLint, la cual nos ayudará a correr los test estáticos desde el editor de código.

Una vez instalada la extensión, podemos mejorar su funcionamiento agregando algunas configuraciones al editor, para ello debemos abrir el archivo de configuración de de usuario, en Mac es `CMD + p` y escribir `>>Preferences: Open User Settings (JSON)`.

```
{
  ...
  "eslint.format.enable": true,
  "eslint.debug": true,
  "eslint.codeActionsOnSave.rules": null,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
  ...
}
```

Agregamos la extensión de NextJS para que nos ayude a identificar ciertas funcionalidades de NextJS que no son reconocidas por ESLint.

```json
{
  ...
  "extends": [
    ...
    "next/core-web-vitals"
  ],
}
```

> Nota: esta configuración es opcional, pero ayuda a evitar errores y alertas de estilos que pueden ser propios por NextJS.

Y como extensión de complemento puedes instalar Error Lens, la cual nos ayudará a identificar los errores de sintaxis y estilo en el código de una forma más visual.

<br />

### Configuración test para api

Para implementar test a nuestra API que será nuestra principal fuente de datos, vamos a utilizar [Jest](https://jestjs.io/)

Por lo que debemos instalarlo como dependencia de desarrollo:

```
npm i -D jest
```

> Nota: actualmente hay otras soluciones como [vitest]() para tests un poco más rápidos y optimizados.

Posterior a ello vamos a crear un archivo de configuración en la carpeta raíz del proyecto llamado `jest.config.js` y vamos a agregar la siguiente configuración:

```js
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './'
})

const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  moduleNameMapper: {
    "^@api(.*)$": "<rootDir>/src/app/api$1"
  }
}

module.exports = createJestConfig(customJestConfig)
```

Por último agregamos a los scripts de nuestro `package.json` los comandos de ejecución:

```json
"scripts": {
  ...
  "test": "jest",
  "test:watch": "jest --watch"
},
```

<br />

### Configuración test para componentes

Para la segunda parte de nuestra aplicación debemos construir un sitio web que nos servirá para mostrar el listado de tracks y los detalles de un track, para ello vamos a utilizar [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) para poder probar nuestros componentes.

Para usar React Testing Library vamos a instalar las siguientes dependencias:

```bash
npm i -D @testing-library/react @testing-library/jest-dom jest-environment-jsdom
```

Posteriormente debemos anexar a la configuración de Jest lo siguiente:

```js
const customJestConfig = {
  ...,
  moduleNameMapper: {
    ...
    "^@components(.*)$": "<rootDir>/src/components$1"
  },
  testEnvironment: 'jest-environment-jsdom'
}
```

Y tenemos lista la configuración para poder ejecutar los test de nuestros componentes con el mismo comando que usamos para la API.

Un ejemplo de test para un componente sería el siguiente:

```js
// file: /test/app/components/header.test.js

import { render, screen } from '@testing-library/react'
import Header from '@components/header'

describe('Header', () => {
  it('should render the heading', () => {
    render(<Header />)

    const heading = screen.getByText(/Hackatrack/i)

    expect(heading).toBeInTheDocument()
  })
})
```

<br />

### Configuración test para e2e

Por último vamos a configurar los test para la parte de e2e, para ello vamos a utilizar [Cypress](https://www.cypress.io/)

Para instalar Cypress vamos a ejecutar el siguiente comando:

```bash
npm i -D cypress
```

Posteriormente vamos a crear un archivo de configuración en la raíz del proyecto llamado `cypress.config.js` y agregar la siguiente configuración:

```js
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "baseUrl": "http://localhost:3000",
    "video": false,
    "screenshotOnRunFailure": false,
    "supportFile": false,
    setupNodeEvents(on, config) {},
  },
});
```

Luego para escribir nuestros test e2e creamos un directorio llamado `cypress` en la raíz del proyecto y dentro un llamado `e2e` el cual contendrá nuestros test y cada test debe tener la extensión `.cy.js`


Ya solo queda, como en los pasos anteriores, agregar el comando a los scripts de nuestro `package.json`:

```
"scripts": {
  ...
  "test:e2e": "cypress run"
},
```

<br />

> Nota: algunas configuraciones podrían variar en diferentes versiones de Nextjs o de las dependencias instaladas, también es posible que se requieran mejores configuraciones para implementar CI/CD, pero para este proyecto no es necesario.

***Nuevos directorios y archivos agregados a nuestro proyecto***

```
your-project/
  ├── node_modules/
  ├── public/
  │   ├── next.svg
  │   └── vercel.svg
  ├── src/
  │   └── app/
  │       ├── page.js
  │       ├── layout.js
  │       ├── global.css
  │       ├── favicon.ico
  │       └── api/
  │           └── check.js
  ├── tests/
  │   └── components/
  │       └── header.test.js
  │   └── api/
  │       └── tracks/
  │           └── route.test.js
  ├── cypress/
  │   └── e2e/
  │       └── home.cy.js
  ├── .eslintrc.json
  ├── .gitignore
  ├── jsconfig.json
  ├── next.config.js
  ├── package-lock.json
  ├── package.json
  ├── postcss.config.js
  ├── cypress.config.js
  ├── jest.config.js
  ├── README.md
  └── tailwind.config.js
```

> Nota: una forma sencilla de asociar nuestros tests a los archivos a testear es utilizar la misma estructura de archivos y directorios en nuestros tests.

### Mock de datos

Para la práctica de API, vamos a utilizar un mock de datos para simular la respuesta de una API real, para ello vamos a crear un directorio llamado `data` en la raíz del proyecto y dentro de este directorio vamos a crear un archivo llamado `tracks.data.json` y vamos a agregar los siguientes datos:

```json
[
    {
        "title": "Track 1",
        "date": "13 Enero 2024",
        "excerpt": "este es un track formativo de prueba ...",
        "cover": "placeholder.png",,
        "deploy": "",
        "github": "",
        "youtube": "",
        "authorName": "@geekhadev",
        "authorAvatar": "placeholder.png",
        "authorGithub": "https://github.com",
        "status": "published",
        "slug": "track-1"
    },
    {
        "title": "Track 2",
        "date": "10 Octubre 2023",
        "excerpt": "este es un track formativo de prueba ...",
        "cover": "placeholder.png",,
        "deploy": "",
        "github": "",
        "youtube": "",
        "authorName": "@geekhadev",
        "authorAvatar": "placeholder.png",
        "authorGithub": "https://github.com",
        "status": "published",
        "slug": "track-2"
    },
    {
        "title": "Track 3",
        "date": "13 Enero 2024",
        "excerpt": "este es un track formativo de prueba ...",
        "cover": "placeholder.png",,
        "deploy": "",
        "github": "",
        "youtube": "",
        "authorName": "@geekhadev",
        "authorAvatar": "placeholder.png",
        "authorGithub": "https://github.com",
        "status": "draft",
        "slug": "track-3"
    },
]

```

> Nota: para otras prácticas podrías sustiruir estos datos simulados por una conexión a base de datos o a cualquier otra fuente de datos.

<br />

### Creando el API

Para nuestra api debemos crear dos endpoints, uno para obtener todos los tracks y otro para obtener un track por su slug.

***Primero los test***

Vamos a crear primero nuestros test y luego vamos a crear los endpoints. Y así podremos de alguna manera tener una guía de lo que vamos a crear. Y prácticaremos los principios de TDD.

```js
// file: /test/app/api/tracks/route.test.js

import { GET } from '@api/tracks/route'
import TRACKS from '@/data/tracks.data.json'

describe('GET /api/tracks', () => {
  it('should return 200', async () => {
    const req = {}
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis()
    }

    const response = await GET(req, res)
    const data = await response.json()

    expect(response.status).toBe(200)
    expect(JSON.stringify(data)).toBe(JSON.stringify(TRACKS))
  })
})
```

```js
// file: /test/app/api/tracks/[slug]/route.test.js

import { GET } from '@api/tracks/[slug]/route'
import TRACKS from '@/data/tracks.data.json'

describe('GET /api/tracks/:slug', () => {
  it('should return 200 when track is found', async () => {
    const req = {
      query: {
        slug: TRACKS[0].slug
      }
    }
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis()
    }

    const response = await GET(req, res)
    const data = await response.json()

    expect(response.status).toBe(200)
    expect(JSON.stringify(data)).toBe(JSON.stringify(TRACKS[0]))
  })

  it('should return 404 when track is not found', async () => {
    const req = {
      query: {
        slug: 'not-found'
      }
    }
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis()
    }

    const response = await GET(req, res)
    console.log(response.status)

    expect(response.status).toBe(404)
  })
})

```

***Ahora los endpoints***

Ahora vamos a crear nuestros endpoints.

```js
// file: /src/app/api/tracks/route.js

/**
 * @jest-environment node
 */
import TRACKS from '@/data/tracks.data.json'

export async function GET () {
  return Response.json(TRACKS)
}
```

```js
// file: /src/app/api/tracks/[slug]/route.js
/**
 * @jest-environment node
 */
import TRACKS from '@/data/tracks.data.json'

export async function GET (req, res) {
  const { slug } = req.query
  const TRACK = TRACKS.find(track => track.slug === slug)

  if (!TRACK) {
    return Response.json({
      error: 'Not found'
    }, {
      status: 404
    })
  }

  return Response.json(TRACK)
}
```

<br />

### Server Side Rendering

Server Side Rendering (SSR) es una técnica utilizada en el desarrollo web que consiste en generar el contenido HTML de una página web en el servidor antes de enviarlo al navegador del usuario. En lugar de cargar y procesar todo el contenido en el navegador, como ocurre en el Client Side Rendering (CSR), el SSR permite que el servidor renderice el contenido y lo envíe al navegador resolviendo muchas funcionalidades de JavaScript, lo que resulta en una página web completamente cargada y lista para ser visualizada.

***Ventajas:***

- Mejor rendimiento inicial: Al recibir el contenido HTML ya renderizado, el tiempo de carga y visualización de la página suele ser más rápido que en el CSR, mejorando la experiencia del usuario.

- SEO optimizado: Como los motores de búsqueda pueden indexar fácilmente el contenido HTML generado por el servidor, SSR es beneficioso para la optimización de motores de búsqueda (SEO).

- Menor carga en el navegador: El SSR reduce la carga de trabajo en el navegador del usuario, ya que gran parte del proceso de renderizado se realiza en el servidor.

***Desventajas:***

- Mayor carga en el servidor: El SSR requiere que el servidor realice más trabajo, lo que puede resultar en mayor uso de recursos y tiempos de respuesta más lentos en momentos de alta demanda.

- Menos interactividad: Dado que el SSR se centra en el renderizado en el servidor, puede ser menos interactivo que el CSR, especialmente cuando se trata de aplicaciones web dinámicas.

***Algunos casos en los que usar SSR sería una buena idea:***

Sitios de contenido estático: como un blog o un sitio de noticias, el SSR es una excelente opción. Estos sitios se benefician del rendimiento inicial y la optimización SEO.

Comercio electrónico: Las tiendas en línea dependen en gran medida del tráfico orgánico para atraer clientes y generar ventas. El SSR mejora la indexación en los motores de búsqueda y proporciona una experiencia de usuario más rápida.

Landing Pages: son cruciales para la generación de leads y las campañas de marketing. El SSR puede proporcionar un mejor rendimiento inicial y una mejor indexación en los motores de búsqueda.

Accesibilidad: aplicaciones que deban ser accesibles para usuarios con conexiones lentas a Internet o dispositivos menos potentes también pueden beneficiarse del SSR, ya que reduce la carga en el navegador del usuario y proporciona una experiencia de carga más rápida.

En nuestra práctica la forma de utilizar SSR en Next.js es de la siguiente manera:

```js
// file: src/app/page.js
import Track from '@/components/Track';
import NoHaveTracks from '@/components/NoHaveTracks';

const API = 'http://localhost:3000/api/tracks';

async function getData() {
  const res = await fetch(API)
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function Home() {
  const data = await getData();
  return (
    <section>
      {data && data.length === 0 
        ? <NoHaveTracks /> 
        : data.map((track) => <Track key={track.id} track={track} />)
      }
    </section>
  )
}
```

Podemos observar que en la función `getData` hacemos una petición a la API para obtener los tracks, y luego los pasamos como props a nuestro componente.

Incluso podemos ver que el componente se declara como una función asincrona por lo que no necesitamos estados ni efectos para obtener los datos. Esto permite que sea un poco más fácil su implementación y entendimiento.

> Nota: esto funciona porque por defecto en NextJS 13 los componentes son SSR en caso que se indique lo contrario agregando la etiqueta 'use cliente' en la parte inicial del componente. En un ejemplo posterior veremos la diferencia con Client Side Rendering.

<br />

### Client Side Rendering

Client Side Rendering (CSR) es una técnica utilizada en el desarrollo web donde el contenido de una página se genera y renderiza en el navegador del usuario en lugar de en el servidor. En CSR, el navegador recibe los archivos JavaScript, CSS y otros recursos necesarios para construir y mostrar la página y funcionalidades. Luego, el navegador ejecuta el JavaScript para generar el contenido HTML y manipular el DOM (Document Object Model) según sea necesario. Esta técnica es común en aplicaciones web de una sola página (SPA) y en aplicaciones web muy dinámicas.

***Ventajas:***

- Menor carga en el servidor: En CSR, el procesamiento y la generación del contenido HTML se realizan en el navegador del usuario, lo que reduce la carga en el servidor.

- Mayor interactividad: El CSR permite una experiencia de usuario más dinámica e interactiva, ya que las actualizaciones de contenido y las transiciones entre vistas se realizan en tiempo real en el navegador.

- Escalabilidad: Al delegar gran parte del trabajo de renderizado al navegador del usuario, las aplicaciones CSR pueden escalar más fácilmente, ya que el servidor se centra principalmente en proporcionar datos y recursos.

***Desventajas:***

- Tiempo de carga inicial más largo: El CSR puede tener tiempos de carga iniciales más largos, ya que el navegador debe descargar y ejecutar los archivos JavaScript antes de mostrar el contenido.

- SEO limitado: El CSR puede presentar desafíos para la optimización en motores de búsqueda (SEO), ya que algunos motores de búsqueda pueden tener dificultades para indexar el contenido generado dinámicamente.

***Algunos casos en los que usar CSR sería una buena idea:***

- Aplicaciones web de una sola página (SPA): son aplicaciones que funcionan dentro de un solo archivo HTML, donde la navegación y la actualización del contenido se realizan dinámicamente sin recargar la página.

- Aplicaciones web dinámicas e interactivas: webs con una gran cantidad de interacción del usuario, como juegos en línea, herramientas de diseño o aplicaciones de colaboración en tiempo real.

Aplicaciones internas o de intranet: donde el SEO no es una preocupación importante, como paneles administrativos, CRM, ERP y otros similares.

Aplicaciones con cargas de trabajo intensivas en el cliente: si requiere una gran cantidad de procesamiento en el lado del cliente, como editores de imágenes o aplicaciones de análisis de datos, el CSR puede ser una buena opción, ya que aprovecha al máximo la capacidad de procesamiento del navegador del usuario.

Aplicaciones con arquitecturas de microservicios: si se utiliza microservicios para manejar diferentes partes de la funcionalidad pueden beneficiarse del CSR, ya que permite una mayor modularidad y separación de responsabilidades entre el cliente y el servidor.

En Next.js no hay una forma especial para hacer CSR por lo que podemos métodos tradicionales de React como `useEffect` para hacer peticiones a la API y obtener los datos.

Veamos el ejemplo anterior pero con CSR:

```js
// file: src/app/page.js
import { useEffect, useState } from 'react';
import Track from '@/components/Track';
import NoHaveTracks from '@/components/NoHaveTracks';

const API = 'http://localhost:3000/api/tracks';

async function getData() {
  const res = await fetch(API)
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default function Home() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    getData.then(setData);
  }, []);

  return (
    <section>
      {data && data.length === 0 
        ? <NoHaveTracks /> 
        : data.map((track) => <Track key={track.id} track={track} />)
      }
    </section>
  )
}
```

> Nota: una mejora a implementar en este ejemplo sería agregar un estado de carga para mostrar un loader mientras se obtienen los datos.

<br />

### ¿Qué tipo de renderizado usar?

El tipo de renderizado a utilizar en un proyecto web depende en gran medida de las necesidades específicas del proyecto. Cada técnica tiene sus ventajas y desventajas. Por lo que la elección del enfoque adecuado dependerá de factores como el rendimiento, la interactividad, la optimización de SEO y las consideraciones de escalabilidad.

Incluso es posible que un proyecto se beneficie de la combinación de diferentes técnicas de renderizado. La elección del tipo de renderizado dependerá de un análisis cuidadoso de las necesidades del proyecto y de cómo cada técnica se ajusta a esos requerimientos. En muchos casos, la combinación de diferentes enfoques de renderizado puede ofrecer la mejor solución para equilibrar el rendimiento, la interactividad y la optimización de SEO en una aplicación web.

<br />

### Estilos

Para este proyecto usaremos tailwindcss, pero puedes usar cualquier implementación de css o framework. 

> Nota: este paso puede ser opcional, ya que en la instalación del proyecto hemos seleccionado la instalación con tailwindcss. Esto solo debes hacerlo en caso de que no hayas seleccionado esa opción o que de alguna forma hayas eliminado los estilos globales o las configuraciones.

Para hacer la instalación de tailwindcss puedes seguir los siguientes pasos:

Ejecutamos el comando de instlación de tailwindcss y sus dependencias.

```bash
npm install -D tailwindcss postcss autoprefixer
```

Ejecutamos el script de inicialización de tailwindcss.

```bash
npx tailwindcss init -p
```

Modificamos el archivo `tailwind.config.js` para que quede de la siguiente manera:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
    },
  },
  plugins: [],
}
```

Agregamos los estilos globales en el archivo `src/app/globals.css`.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

> Nota: Podría necesitarse reiniciar el servidor de desarrollo.

<br />

### Deploy

Para desplegar un proyecto de Next.js es posible usar diferentes proveedores, en este caso usaremos [Vercel](https://vercel.com) por ser la empresa que desarrolla Next.js y por ende la plataforma mejor pensada para desplegar proyectos de NextJS. Ah si! y también porque es gratuita (hasta cierto nivel).

Así como contamos con diversos proveedores de hosting, también contamos con diversas formas de desplegar nuestro proyecto, en este caso usaremos el método más fácil a mi parcer de desplegar en Vercel el CLI.

Para instalar el CLI de Vercel ejecutamos el siguiente comando:

```bash
npm i -g vercel
```

Una vez instalado el CLI de Vercel, ejecutamos el comando de login:

```bash
vercel login
```

Y nos pedirá que iniciemos sesión con nuestra cuenta de Vercel.

Una vez iniciada sesión, ejecutamos el comando de deploy:

```bash
vercel deploy
```

Y solo queda seguir las intrucciones del CLI.

> Nota: también se puede hacer el despliegue vinculando nuestro proyecto de Github a Vercel, revisa la [documentación](https://nextjs.org/learn-pages-router/basics/deploying-nextjs-app/deploy) para más información.

<br />

### Recomendaciones

1 - Antes de empezar a hacer código lee la guía completa, esto te ayudará a entender mejor el proyecto.

2 - Sigue los pasos de la guía, pero también haz pasos nuevos y modificaciones para que te enfrentes a nuevos retos.

3 - Ante cualquier imprevisto visita la documentación de NextJS, es muy completa y te ayudará a resolver cualquier duda.

### Comunidad

Tenemos un canal de NextJS en el servidor de Discord de Hack A Boss, donde puedes compartir tus dudas, avances y proyectos con la comunidad.
