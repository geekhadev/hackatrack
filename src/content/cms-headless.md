---
title: 'CMS Headless'
date: '01 Enero 2023'
excerpt: 'es una arquitectura que permite separar el contenido de la presentación ...'
cover: '/tracks/cms-headless.png'
deploy: ''
github: ''
youtube: ''
authorName: '@geekhadev'
authorAvatar: 'https://avatars.githubusercontent.com/u/499907?v=4'
authorGithub: 'https://github.com/geekhadev'
status: 'draft'
---

### Introducción

Next.js es un excelente framework de React que nos permite crear aplicaciones web de forma rápida y sencilla, con una excelente experiencia de desarrollo, y un equipo genial que siempre está en el top de JavaScript. Actualmente ha tenido mucho aumento en su popularidad, según la [StateOfJs](https:StateOfJs.com), se posiciona como uno de los mas usados frameworks de renderizado para  React. 

Pero, ¿Por que Next.js es tan popular?

Para que una herramienta de JavaScript hoy en día se haga tan popular en mi opinión debe debe ser fácil de aprender y debe estar optimizada para el rendimiento de un sitio web, dos cosas que Next.js nos ayuda a cumplir sin mayores complicaciones.

Principales caracteristicas que encontramos en Next.js: sistema de enrutamiento basado en el sistema de archivos que nos hace entender en todo momento la estructura del proyecto, fácil implementación de Server Side Rendering (SSR), Client Side Rendering (CSR) y Static Site Generation (SSG), optimización de imágenes, soporte para TypeScript, creación de API muy similar a Express, integración con una solución de despliegue pensado para Next.js.

Algunos de los casos de uso en los que se puede implementar son: sitios web de comercio electrónico, Aplicaciones web empresariales, Sitios web de medios y noticias, Aplicaciones web de viajes y turismo, básicamente se puede implementar crear cualquier sitio web que requiera un alto rendimiento y una excelente experiencia de usuario. Aunque hay mejores soluciones si lo que buscas es crear un pequeño sitio web personal y estático.

<br />

### Instalación

La instalación de Next.js es un proceso sencillo y rápido. Sigue estos pasos:

> Asegúrate de tener Node.js instalado en tu sistema. Puedes verificar si tienes Node.js instalado escribiendo `node -v` en tu terminal. Si no lo tienes instalado, descárgalo desde el sitio web oficial de [Node.js](https://nodejs.org) e instálalo en tu sistema.

Aunque hay varias formas de instalar Node.js, la forma más sencilla es usar npm y create-next-app para mas detalles de como instalarlo puedes visitar la [Create a Next.js App](https://nextjs.org/learn/basics/create-nextjs-app).

- Instala create-next-app usando npm:

```bash
npx create-next-app hack-a-boss-geekhadev
```
> Este comando creará un nuevo proyecto de Next.js llamado nextjs-app en tu sistema. Si prefieres usar yarn o pnpm en lugar de npm.

Irán apareciendo una serie de preguntas, las cuales puedes responder de la siguiente manera:

```bash
✔ Would you like to use TypeScript? … No / Yes
✔ Would you like to use ESLint? … No / Yes
✔ Would you like to use Tailwind CSS? … No / Yes
✔ Would you like to use `src/` directory? … No / Yes
✔ Would you like to use App Router? (recommended) … No / Yes
✔ Would you like to customize the default import alias (@/*)? … No / Yes
```

¡Y eso es todo! Ahora toma un ☕  mientras se instalan las dependencias.

Luego que se instalen las dependencias, entra al directorio del proyecto y ejecuta el siguiente comando:

```bash
cd hack-a-boss-geekhadev
npm run dev
```

<br />

### Estructura del proyecto

```
nextjs-app/
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

A continuación, se detalla la función de cada directorio y archivo:

`node_modules/`: Este directorio contiene todas las dependencias y módulos necesarios para que funcione el proyecto. No se debe modificar ni eliminar manualmente.

`public/`: Este directorio contiene todos los archivos estáticos que se deben servir públicamente, como imágenes o archivos CSS. Los archivos que se colocan aquí se pueden acceder en la aplicación utilizando el prefijo /public/.

`src/app/`: Este es el "nuevo" directorio de gestión de url basadas en archivos ideado por NextJS. Cada fichero en este directorio se convierte en una ruta accesible a través de la aplicación. Por ejemplo, el archivo index.js se convierte en la página principal del sitio. Además, dentro de este directorio, existe una carpeta llamada api/ que se usa para crear rutas de API. [Documentación Routing](https://nextjs.org/docs/app/building-your-application/routing)

`src/app/global.css`: Este archivo contiene los estilos globales de la aplicación. Se utiliza principalmente para agregar estilos globales y otros elementos que se aplicarán a todas las páginas de la aplicación.

`src/app/layout.js`: Este archivo contiene el componente Layout, que se utiliza para envolver todas las páginas de la aplicación. El componente Layout se utiliza para agregar elementos que se deben mostrar en todas las páginas de la aplicación, como encabezados, pies de página, barras de navegación y otros elementos. (También es posible crear layouts personalizados para páginas específicas) [Documentación Layouts](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts)

`src/app/page.js`: Este fichero es la página principal de la aplicación. Se utiliza para mostrar el contenido principal de la aplicación, es el punto de entrada a la aplicación web.

`.eslintrc`: Este archivo contiene la configuración de ESLint, que es una herramienta de análisis de código estático para identificar patrones problemáticos encontrados en el código JavaScript.

`.gitignore`: Este archivo es utilizado por Git para determinar qué archivos y directorios deben ignorarse durante el seguimiento de versiones del proyecto.

`next.config.js`: Este archivo contiene la configuración de Next.js. Se utiliza para configurar el proyecto, como agregar encabezados HTTP personalizados, agregar plugins, configurar el directorio de compilación, configuraciones de despliegue para vercel, etc.

`package.json`: Este archivo es utilizado por npm (o Yarn) para almacenar la información del proyecto, incluyendo sus dependencias y scripts.

`README.md`: Este archivo es una descripción general del proyecto.

<br />

### Configurando editor

Agregamos una configuración básica para que nuestro editor de código nos ayude a escribir código de la mejor manera posible. Principalmente para mantener una buena indentación y posterior instalaremos un linter para que nos ayude a mantener menos errores en nuestro código.

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

Inicialmente podemos encontrar en nuestro proyecto solo la ruta inicial `/` y la ruta `/api/hello` que nos permite hacer una petición `GET` a la ruta y nos regresa un `json` con un mensaje de saludo.

Vamos a hacer una configuración básica para crear las rutas de nuestro proyecto y vamos a explicar cada ruta su funcionamiento.

| Ruta                    | Path                              | Descripción                                                                       |
|-------------------------|-----------------------------------|-----------------------------------------------------------------------------------|
| /api/tracks             | src/app/api/tracks/index.js       | API de productos (práctica API)                                                   |
| /api/tracks/:slug       | src/app/api/tracks/[slug].js      | API detalle de un track (práctica API)                                            |
| /                       | src/app/page.js                   | Listado de tracks (práctica [SSR](/workshops/nextjs#server-side-rendering))       |
| /tracks/:slug           | src/app/tracks/[slug].js          | Detalle de un producto (práctica [SSR](/workshops/nextjs#server-side-rendering))  |
| /next-tracks            | src/app/next-tracks/page.js       | Próximos tracks (práctica [SSR](/workshops/nextjs#server-side-rendering))         |
| /about-me               | src/app/about-me/page.js          | Próximos tracks (práctica [SSR](/workshops/nextjs#server-side-rendering))         |

> Todas las paths de las rutas se encuentran en la carpeta `src/pages`

<br />

### Configuración test estáticos

Los tests estáticos son utilizados para identificar y corregir errores de sintaxis, estilo y otros problemas en el código fuente en tiempo de programación. Los test estáticos analizan el código fuente y ofrecen sugerencias para mejorar su calidad, legibilidad y mantenibilidad.

Si recuerdan en la instalación del proyecto aceptamos la instalación de un Linter que Next nos propone, este linter es [ESLint](https://eslint.org/), el cual nos ayuda a mantener un código limpio y ordenado. Es una buena práctica que utilices linters en todos tus proyectos así te darás cuenta de muchos errores mucho antes de ir a producción o ejecutar el código.

Vamos a complementar la configuración de ESLint con una guía de estilos y configuración mas estricta para que nos ayude a mantener un código limpio y ordenado.

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

Hay dos formas de correr los test estáticos, la primera es desde la terminal y es principalmente usada para los pipelines de integración continua, la segunda es desde el editor de código, en este caso usaremos VSCode. Así que veremos las dos configuraciones:

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

> Esta configuración es opcional

Y como extensión de complemento puedes instalar Error Lens, la cual nos ayudará a identificar los errores de sintaxis y estilo en el código de una forma más visual.

<br />

### Configuración test para api

Para implementar test a nuestra API que será nuestra principal fuente de datos y la parte mas importante de nuevo proyecto, vamos a utilizar [Jest](https://jestjs.io/)

Por lo que debemos instalarlo como dependencia de desarrollo:

```
npm i -D jest
```

Posterior a ello vamos a crear un archivo de configuración en la carpeta raíz del proyecto llamado `jest.config.js` y vamos a agregar la siguiente configuración:

```js
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './'
})

const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  moduleNameMapper: {
    "^@api(.*)$": "<rootDir>/src/app/api$1" // map @api to src/pages/api
  }
}

module.exports = createJestConfig(customJestConfig)
```

Por último agregamos a los scripts de nuestro package.json los comandos de ejecución:

```
"scripts": {
  ...
  "test": "jest",
  "test:watch": "jest --watch"
},
```

<br />

### Configuración test para componentes

Para la segunda parte de nuestra aplicación debemos construir un sitio web en rutas creadas para mostrar el listado de productos y los detalles de un producto, para ello vamos a utilizar [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) para poder probar nuestros componentes.

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
nextjs-app/
  ├── __tests__/
  │   └── components/
  │       └── title.test.js
  │   └── pages/
  │       └── api/
  │           └── products/
  │               |── [id].test.js
  │               └── index.test.js
  ├── cypress/
  │   └── e2e/
  │       └── home.cy.js
  ├── cypress.config.js
  ├── jest.config.js
  └── yarn.lock

```

### Mock de datos

Para la práctica de API, vamos a utilizar un mock de datos para simular la respuesta de una API real, para ello vamos a crear un directorio llamado `mocks` en la raíz del proyecto y dentro de este directorio vamos a crear un archivo llamado `products.json` y vamos a agregar los siguientes datos:

```json
[
  {
    "id": 1,
    "nombre": "Dell XPS 13",
    "precio": 999.99,
    "marca": "Dell",
    "modelo": "XPS 13 9305",
    "url_imagen": "https://example.com/images/dell-xps-13-9305.jpg"
  },
  {
    "id": 2,
    "nombre": "HP Spectre x360",
    "precio": 1249.99,
    "marca": "HP",
    "modelo": "Spectre x360 14t",
    "url_imagen": "https://example.com/images/hp-spectre-x360-14t.jpg"
  },
  {
    "id": 3,
    "nombre": "Lenovo ThinkPad X1 Carbon",
    "precio": 1399.99,
    "marca": "Lenovo",
    "modelo": "ThinkPad X1 Carbon 9th Gen",
    "url_imagen": "https://example.com/images/lenovo-thinkpad-x1-carbon-9th-gen.jpg"
  },
  {
    "id": 4,
    "nombre": "MSI GS66 Stealth",
    "precio": 1799.99,
    "marca": "MSI",
    "modelo": "GS66 Stealth 10SE",
    "url_imagen": "https://example.com/images/msi-gs66-stealth-10SE.jpg"
  },
  {
    "id": 5,
    "nombre": "ASUS ZenBook 14",
    "precio": 899.99,
    "marca": "Asus",
    "modelo": "ZenBook 14 UX425EA",
    "url_imagen": "https://example.com/images/asus-zenbook-14-ux425ea.jpg"
  },
  {
    "id": 6,
    "nombre": "Dell Inspiron 15 5000",
    "precio": 679.99,
    "marca": "Dell",
    "modelo": "Inspiron 15 5502",
    "url_imagen": "https://example.com/images/dell-inspiron-15-5502.jpg"
  },
  {
    "id": 7,
    "nombre": "HP Pavilion 15",
    "precio": 749.99,
    "marca": "HP",
    "modelo": "Pavilion 15-eg0025nr",
    "url_imagen": "https://example.com/images/hp-pavilion-15-eg0025nr.jpg"
  },
  {
    "id": 8,
    "nombre": "Lenovo IdeaPad Flex 5",
    "precio": 599.99,
    "marca": "Lenovo",
    "modelo": "IdeaPad Flex 5 14",
    "url_imagen": "https://example.com/images/lenovo-ideapad-flex-5-14.jpg"
  },
  {
    "id": 9,
    "nombre": "MSI Modern 14",
    "precio": 849.99,
    "marca": "MSI",
    "modelo": "Modern 14 B11SB",
    "url_imagen": "https://example.com/images/msi-modern-14-b11sb.jpg"
  },
  {
    "id": 10,
    "nombre": "ASUS VivoBook S15",
    "precio": 799.99,
    "marca": "Asus",
    "modelo": "VivoBook S15 S533",
    "url_imagen": "https://example.com/images/asus-vivobook-s15-s533.jpg"
  },
  {
    "id": 11,
    "nombre": "Acer Swift 3",
    "precio": 649.99,
    "marca": "Acer",
    "modelo": "Swift 3 SF314",
    "url_imagen": "https://example.com/images/acer-swift-3-sf314.jpg"
  },
  {
    "id": 12,
    "nombre": "Apple MacBook Air",
    "precio": 999.00,
    "marca": "Apple",
    "modelo": "MacBook Air M1",
    "url_imagen": "https://example.com/images/apple-macbook-air-m1.jpg"
  }
]

```

> Nota: para otras prácticas podríamos sustiruir estos datos simulados por una conexión a base de datos.

<br />

### Creando el API

Para nuestra api debemos crear dos endpoints, uno para obtener todos los productos y otro para obtener un producto por su id.

***Primero los test***

Vamos a crear primero nuestros test y luego vamos a crear los endpoints. Y así podremos de alguna manera tener una guía de lo que vamos a crear. Y prácticaremos los principios de TDD.

```js
// file: /__tests__/pages/api/products/index.test.js

import handler from '@api/products/index';
import products from '../../../../mocks/products.json';

describe('GET /api/products', () => {
  it('should return 200', async () => {

    const req = {}
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis()
    }

    await handler(req, res)

    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.json).toHaveBeenCalledWith(products)
  });
});
```

```js
// file: /__tests__/pages/api/products/[id].test.js

import handler from '@api/products/[id]';
import products from '../../../../mocks/products.json';

describe('GET /api/products/:id', () => {
  it('should return 200 when product is found', async () => {

    const req = {
      query: {
        id: products[0].id
      }
    }
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis()
    }

    await handler(req, res)
  
    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.json).toHaveBeenCalledWith(products[0])
  });
  
  it('should return 404 when product is not found', async () => {

    const req = {
      query: {
        id: 0
      }
    }
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis()
    }
  
    await handler(req, res)
  
    expect(res.status).toHaveBeenCalledWith(404)
  });
});
```

***Primero los endpoints***

Ahora vamos a crear nuestros endpoints.

```js
// file: /src/pages/api/products/index.js

import products from '../../../../mocks/products.json';

const handler = (req, res) => {
  try {
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default handler;
```

```js
// file: /src/pages/api/products/[id].js
import products from '../../../../mocks/products.json';

const handler = (req, res) => {
  try {

    const searchId = Number(req.query.id);

    const product = products.find(({ id }) => id === searchId);
    
    if (!product) res.status(404);
    
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default handler;
```

<br />

### Server Side Rendering

Server Side Rendering (SSR) es una técnica utilizada en el desarrollo web que consiste en generar el contenido HTML de una página web en el servidor antes de enviarlo al navegador del usuario. En lugar de cargar y procesar todo el contenido en el navegador, como ocurre en el Client Side Rendering (CSR), el SSR permite que el servidor renderice el contenido y lo envíe al navegador, lo que resulta en una página web completamente cargada y lista para ser visualizada.

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
import ProductCard from '@/components/products/card';

const API = 'https://domain.app/api/products';

async function getData() {
  const res = await fetch(API)
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default function Home() {
  const data = await getData();
  return (
    <>
      <section>
        {data.length === 0 && (
          <p>No hay productos disponibles</p>
        )}
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </>
  )
}
```

Podemos observar que en la función `getServerSideProps` hacemos una petición a la API para obtener los productos, y luego los pasamos como props a nuestro componente.

Con el uso de `getServerSideProps` Next.js identifica que el componente es una página y que debe ser renderizado en el servidor.

En un ejemplo posterior veremos la diferencia con Client Side Rendering.


<br />

### Client Side Rendering

Client Side Rendering (CSR) es una técnica utilizada en el desarrollo web donde el contenido HTML de una página se genera y renderiza en el navegador del usuario en lugar de en el servidor. En CSR, el navegador recibe los archivos JavaScript, CSS y otros recursos necesarios para construir y mostrar la página. Luego, el navegador ejecuta el JavaScript para generar el contenido HTML y manipular el DOM (Document Object Model) según sea necesario. Esta técnica es común en aplicaciones web de una sola página (SPA) y en aplicaciones web dinámicas.

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
// file: src/pages/index.js

import { useEffect, useState } from 'react';
import ProductCard from '@/components/products/card';

const API = 'https://domain.app/api/products';

async function getData() {
  const res = await fetch(API)
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default function Home({data}) {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getData.then(setProducts);
  }, []);

  return (
    <>
      <section>
        {data.length === 0 && (
          <p>No hay productos disponibles</p>
        )}
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </>
  )
}
```

<br />

### Static Site Generation

Static Site Generation (SSG) es una técnica utilizada en el desarrollo web en la que las páginas de un sitio web se generan y renderizan como archivos HTML estáticos durante la fase de compilación o construcción de la aplicación, en lugar de generarlas dinámicamente en tiempo real (a diferencia de SSR se generan solo una vez). Estos archivos estáticos se sirven a los usuarios cuando visitan el sitio web. El SSG es común en sitios web de contenido estático y en aplicaciones que no requieren actualizaciones en tiempo real o interacciones dinámicas.

***Ventajas:***

- Rendimiento: Los sitios generados estáticamente suelen ser más rápidos, ya que no requieren tiempo de procesamiento en el servidor para generar el contenido HTML. Los archivos estáticos pueden ser servidos rápidamente desde un CDN (Content Delivery Network) y, como resultado, ofrecen tiempos de carga reducidos para los usuarios.

- Seguridad: Los sitios estáticos son más seguros que los sitios dinámicos, ya que no dependen de bases de datos o lenguajes de programación en el servidor. Esto reduce los ataques y el riesgo de vulnerabilidades.

- Bajo costo y facilidad de implementación: Los sitios estáticos generalmente tienen costos de alojamiento más bajos y son más fáciles de implementar en comparación con los sitios dinámicos, ya que no requieren infraestructura de servidor compleja.

- SEO optimizado: Los sitios generados estáticamente son fáciles de indexar por los motores de búsqueda, lo que los hace ideales para SEO.

***Desventajas:***

- Menos dinámico: Aunque es posible agregar interacción y contenido dinámico mediante JavaScript del lado del cliente, los sitios generados estáticamente son, en general, menos dinámicos que los sitios basados en SSR o CSR.

- Actualizaciones de contenido: Los cambios en el contenido del sitio requieren la regeneración y la reimplantación del sitio completo, lo que puede ser más lento y menos flexible que las actualizaciones en tiempo real proporcionadas por el SSR y el CSR.

***Algunos casos en los que usar Static Site Generation (SSG) sería una buena idea:***

- Blogs y sitios de noticias: con contenido mayormente estático se benefician enormemente del SSG, ya que este enfoque proporciona tiempos de carga rápidos, mejor SEO y facilidad de implementación.

- Portafolios y currículums en línea: un portafolio en línea o un sitio web personal para mostrar tus habilidades y experiencia, el SSG es una excelente opción, ya que te permite crear un sitio web de alto rendimiento y optimizado para SEO con un esfuerzo de desarrollo relativamente bajo.

- Documentación y sitios de ayuda: como las guías de usuario y las páginas de preguntas frecuentes, son ideales para esté tipo de renderizado. Estos sitios a menudo contienen una gran cantidad de contenido de texto que no cambia con frecuencia.

- Sitios de eventos y conferencias: estos sitios suelen requerir un alto rendimiento y una buena optimización de SEO para atraer a los asistentes y, a menudo, tienen un ciclo de vida corto y pocas o ninguna actualización de contenido.

- Sitios web de pequeñas empresas: las pequeñas empresas que buscan crear un sitio web informativo con contenido estático, como detalles de contacto, servicios ofrecidos y testimonios de clientes, pueden beneficiarse del SSG. Estos sitios a menudo requieren un mantenimiento mínimo, un alto rendimiento y una buena optimización de SEO, lo que hace que el SSG sea una opción atractiva.

### ¿Qué tipo de renderizado usar?

El tipo de renderizado a utilizar en un proyecto web depende en gran medida de las necesidades específicas del proyecto. Cada técnica tiene sus ventajas y desventajas. Por lo que la elección del enfoque adecuado dependerá de factores como el rendimiento, la interactividad, la optimización de SEO y las consideraciones de escalabilidad.

Incluso es posible que un proyecto se beneficie de la combinación de diferentes técnicas de renderizado. La elección del tipo de renderizado dependerá de un análisis cuidadoso de las necesidades del proyecto y de cómo cada técnica se ajusta a esos requerimientos. En muchos casos, la combinación de diferentes enfoques de renderizado puede ofrecer la mejor solución para equilibrar el rendimiento, la interactividad y la optimización de SEO en una aplicación web.

<br />

### Estilos

Para este proyecto usaremos tailwindcss, pero puedes usar cualquier implementación de css o framework. Para hacer la instalación de tailwindcss puedes seguir los siguientes pasos:

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

> Podría necesitarse reiniciar el servidor de desarrollo.

<br />

### Deploy

Para desplegar un proyecto de Next.js es posible usar diferentes proveedores de hosting, en este caso usaremos Vercel por ser la misma empresa que desarrolla Next.js y por ser una plataforma de hosting gratuita y de fácil uso.

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

<br />

### Repositorio

Después de haber leído la guía, puedes descargar el proyecto completo desde el siguiente enlace: [Descargar proyecto](https://github.com/hackaboss-workshops-irwing/nextjs-app) y empezar a analizar todo el código.

Para instalar el proyecto debes:

1. Clonar el repositorio

```
git clone https://github.com/hackaboss-workshops-irwing/nextjs-app
```

2. Instalar las dependencias

```
npm install
```

3. Ejecutar el proyecto

```
npm run dev
```

<br />

### Recomendaciones

1 - Antes de empezar a hacer código lee la guía completa, esto te ayudará a entender mejor el proyecto.

2 - Analiza el código de la aplicación creada, y haz cambios para que puedas entender mejor como funciona, intenta crear otra pantalla o agregar un filtro de busqueda.

3 - Cuando tengas la recomendación 1 y 2 hechas, intenta crear una aplicación desde cero, y usa el proyecto como referencia.
