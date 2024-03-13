---
title: 'Integligencia Artificial con Next.js (OpenAI)'
dateString: '29 Febrero 2024'
date: '2024-02-29'
excerpt: 'Integremos inteligencia artificial a proyectos fullstack Next.js ...'
cover: '/tracks/ia-nextjs-openai.png'
deploy: ''
github: 'https://github.com/geekhadev/entrenador-programacion'
youtube: ''
authorName: '@geekhadev'
authorAvatar: 'https://avatars.githubusercontent.com/u/499907?v=4'
authorGithub: 'https://github.com/geekhadev'
status: 'published'
---

### Introducción
- Presentación del proyecto

Creamos una aplicación web con Next.js y OpenAI que nos permite seleccionar un lenguaje de programación y la IA nos genera preguntas de entrevista técnica. Luego al usuario le toca responderlas y la IA le da una evaluación de sus respuestas, aplicando una nota del 0 al 10.

- Breve repaso de Next.js

Repasamos los concepctos básicos de Next.js principalmente el manejo de rutas, del backend y de que son componentes SSR (Server Side Rendering) y CSR (Client Side Rendering).

### Un poco de teoría

- ¿Qué es la inteligencia artificial?

> [Segun Wikipedia](https://es.wikipedia.org/wiki/Inteligencia_artificial#:~:text=La%20inteligencia%20artificial%20(IA)%2C,la%20inteligencia%20humana%20para%20realizar), La inteligencia artificial (IA), en el contexto de las ciencias de la computación, es una disciplina y un conjunto de capacidades cognoscitivas e intelectuales expresadas por sistemas informáticos o combinaciones de algoritmos cuyo propósito es la creación de máquinas que imiten la inteligencia humana para realizar tareas, y que pueden mejorar conforme recopilen información.

- Tipos de modelos de inteligencia artificial

#### ***[OpenAI](https://openai.com/)*** de OpenAI

Ventajas:
  - Es uno de los modelos más avanzados a la actualidad
  - Tiene una API muy sencilla de usar
  - El modelo responde con mucha presición

Desventajas:
  - Es un modelo de pago
  - No es tan sencillo de integrar con otros modelos
  - No es open source

### Preparando las IA

#### Obteniendo una API Key de OpenAI

1. Crear una cuenta en OpenAI (Sección API)
2. Ir al menú API Keys
3. Crear una nueva API Key
4. Recarga saldo a tu cuenta
  - En el menú settings
  - Opción billing
  - Acción Add to credit balance (el mínimo son 5$)

> IMPORTANTE: no compartas tu API Key con nadie, ya que te pueden cobrar por su uso, no la subas a github, ni a ningún otro lugar público.

### Integrando IA con Next.js

💻 Ahora si vamos manos a la obra, vamos a integrar OpenAI con Next.js.

#### Creando nuestro proyecto con Next.js

```bash
npx create-next-app@12 entrenador-programacion
```

> Nota: para este documento usamos los comando de instalación de Next.js, pero en el track en vivo usamos del fork que realizamos en las primeras clases. Si quieres hacerlo con el tema que tiene todo preconfigurado solo debes hacer un fork del repositorio [nextjs-template](https://github.com/hackaboss-workshops-irwing/nextjs-template) Si te gusta el tema deja una ⭐ en el repositorio.

#### Instalamos las dependencias necesarias

```bash
cd entrenador-programacion
npm install openai
```

#### Configuramos las variables de entorno

```bash
touch .env.local
```

```env
NEXT_PUBLIC_OPENAI_API_KEY=sk-123456
```

#### Creamos el API que va a generar las preguntas

```bash
touch pages/api/questions/route.js
```

```javascript
import OpenAI from 'openai'

const openai = new OpenAI({ 
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY 
})

// Método que genera utiliza el modelo generativo de OpenAI
const complete = async ({ messages, model }) => {
  try {
    const response = await openai.chat.completions.create({ 
      messages,
      model
    })
    return response.choices[0].message.content
  } catch (error) {
    console.error('Error:', error)
    return error
  }
}

async function genetare (lang) {
  if (!lang) return

  /*
    Mensajes de contexto para que OpenAI entienda que 
    es lo que queremos este el punto importante para 
    que sea efectiva la utilización de la IA.
  */ 
  const messages = [
    {
      role: 'system',
      content: `
        Comportate como un asistente de programación, 
        utiliza siempre el idioma español. Te voy a 
        compartir un lenguaje de programación y debes 
        generar tres preguntas técnicas, de diferentes 
        dificultades que consideres idoneas para entrenar 
        mis conocimientos. Evita preguntas repetidas, 
        se breve en las preguntas, que no excedan de 140 
        caracteres. Puedes buscar la documentación del 
        lenguaje si lo consideras necesario. Responde 
        siempre en un formato Json, las preguntas 
        deben venir de la siguiente formal:
        [
          '¿Pregunta 1?', 
          '¿Pregunta 2?', 
          '¿Pregunta 3?',
        ]
        No agregues descripciones, explicaciones o 
        cualquier otro tipo de texto a las preguntas nunca.`
    },
    { role: 'user', content: 'Languaje: JavaScript' },
    {
      role: 'assistant',
      content: `
        [
          "¿Cómo se declara una variable constante en JavaScript?",
          "¿Qué usarías para convertir un JSON a un objeto en JavaScript?",
          "¿Cómo se crea una promesa en JavaScript?"
        ]
      `
    },
    { role: 'user', content: 'Languaje: Python' },
    {
      role: 'assistant',
      content: `
        [
          "¿Cómo se declara una variable en Python?",
          "¿Como imprimir un valor en Python?",
          "¿Cómo se crea una función en Python?"
        ]
      `
    },
    { role: 'user', content: `Lenguaje: ${lang}` }
  ]

  return await complete({ messages, model: 'gpt-3.5-turbo' })
}

export async function GET (request) {
  const { searchParams } = new URL(request.url)
  const lang = searchParams.get('lang')

  try {
    const questions = await genetare(lang)
    return Response.json(JSON.parse(questions))
  } catch (error) {
    console.log('Error:', error)
    return Response.json({ error: 'No se pudo generar las preguntas' })
  }
}
```

> Nota: para este caso particular estamos utilizando el modelo `gpt-3.5-turbo` de OpenAI, pero puedes utilizar cualquier otro modelo que te parezca adecuado.

#### Creamos el API que va a evaluar las respuestas

```bash
touch pages/api/analize/route.js
```

```javascript
import OpenAI from 'openai'

const openai = new OpenAI({ apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY })

const complete = async ({ messages, model }) => {
  try {
    const response = await openai.chat.completions.create({ 
      messages, 
      model 
    })
    return response.choices[0].message.content
  } catch (error) {
    console.error('Error:', error)
    return error
  }
}

async function analisis (data) {
  if (!data) return

  const messages = [
    {
      role: 'system',
      content: `
        Comportate como un asistente de programación, 
        utiliza siempre el idioma español. Te voy a 
        compartir preguntas y respuestas de un lenguaje 
        de programación y debes generar un analisis 
        cuantitativo de las respuestas.
        Responde solamente con un número del 0 al 10, 
        donde 0 es la peor nota y 10 la mejor.
        No agregues descripciones, explicaciones o 
        cualquier otro tipo de texto a las preguntas, 
        ni tampoco a las respuesta que vas a generar.`
    },
    {
      role: 'user', content: `
        [
          {
            "question": "¿Como se declara una variable en JavaScript?",
            "awnser": "let x = 1;"
          },
          {
            "question": "¿Como se declara una constante en JavaScript?",
            "awnser": "const x = 1;"
          },
          {
            "question": "¿Como se crea una función en JavaScript?",
            "awnser": "function x () { return 1; }"
          }
        ]`
    },
    { role: 'assistant', content: '10' },
    {
      role: 'user', content: `
      [
        {
          "question": "¿Que es JavaScript?",
          "awnser": "Es el lenguaje Java con un script al final"
        },
        {
          "question": "¿JavaScript es lo mismo que Java?",
          "awnser": "Si, claro que si."
        },
        {
          "question": "¿De que color es el logo de JavaScript?",
          "awnser": "Rojo, morado y verde"
        }
      ]`
    },
    { role: 'assistant', content: '0' },
    {
      role: 'user',
      content: JSON.stringify(data)
    }
  ]

  return await complete({ messages, model: 'gpt-3.5-turbo' })
}

export async function POST (request) {
  const data = await request.json()
  try {
    const analize = await analisis(data)
    return Response.json(analize)
  } catch (error) {
    return Response.json({ error: 'Error al generar las preguntas' })
  }
}
```

> Nota: como vemos la funcionalidad es muy parecida a la anterior así que te puede quedar como ejercicio hacer la función complete como utilidad y reutilizarla en ambos archivos.

#### Creamos la página que va a consumir los API

```javascript
// file: src/app/page.js

/*
 * Este componente lo haremos cliente para que pueda
 * tener las interacciones que queremos para este ejemplo.
 */
'use client'

// Importamos las dependencias
import { useState } from 'react'
import confetti from 'canvas-confetti'

// Definimos a los cuales se le va a generar preguntas
const LANGS = ['JavaScript', 'TypeScript', 'Python', 'PHP']

export default function Home () {
  
  // Creamos los estados que vamos a utilizar
  const [lang, setLang] = useState()
  const [questions, setQuestions] = useState([])
  const [calification, setCalification] = useState(null)

  /*
   * Este método se ejecuta cuando cambia el lenguaje
   * y se encarga de hacer las peticiones al API
   * para obtener las preguntas.
   */
  const handleChangeLang = (e) => {
    if (!e.target.value === '') return

    setLang(e.target.value)

    fetch(`/api/questions?lang=${e.target.value}`)
      .then((res) => res.json())
      .then((data) => setQuestions(data))
  }

  /*
   * Este método se ejecuta cuando se envía el formulario
   * y se encarga de hacer las peticiones al API
   * para obtener la calificación.
   */
  const handleSubmit = (e) => {
    e.preventDefault()

    const data = new FormData(e.target)

    const form = []
    for (const [key, value] of data) {
      const indexQuestions = key.split('-')[1]
      form.push({
        question: questions[indexQuestions],
        awnser: value
      })
    }

    fetch('/api/analize', {
      method: 'POST',
      body: JSON.stringify(form)
    })
      .then((res) => res.json())
      .then((data) => {
        setCalification(data)
        if (data > 5) confetti()
      })
  }

  return (
    <>
      <div className="fixed h-full w-full bg-black">
        <div className="absolute bottom-0 left-[-15%] right-0 top-[-10%] h-[700px] w-[600px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(0,213,220,.15),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-0 right-[-30%] top-[40%] h-[800px] w-[800px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(0,213,220,.15),rgba(255,255,255,0))]"></div>
      </div>

      <main className="flex flex-col p-24 zIndex-10 absolute max-w-3xl mx-auto inset-0">
        
        {/* Titulo */}
        <h1 className="text-6xl bg-gradient-to-r from-cyan-500 to-blue-800 bg-clip-text text-transparent">
          EntrenIA
        </h1>

        {/* SubTitulo */}
        <p className="text-xl text-gray-400 text-balance border-b-2 border-opacity-20 border-cyan-500 pb-12 mt-6 mb-10">
          Valida tus conocimientos en programación, con un asistente de inteligencia artificial.
        </p>

        {/* Calificación obtenida */}
        {calification !== null && (
          <section className="mt-6">
            <h2 className={
              `font-bold text-4xl ${
                calification > 5 ? 'text-green-600' : 'text-red-600'
              }`
            }>Calificación: {calification}</h2>
          </section>
        )}

        {/* Sección para seleccionar el lenguaje */}
        <section className="flex flex-col gap-4">
          <label className="text-2xl font-bold text-gray-400">Lenguajes de programación:</label>
          <select
            value={lang}
            onChange={handleChangeLang}
            className="p-4 border border-gray-300 rounded-md text-gray-700">
            <option value="">Selecciona un lenguaje de programación</option>
            {LANGS.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
        </section>

        {/* Sección para mostrar y responder las preguntas */}
        {questions.length > 0 && (
          <section className="mt-6">
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <h2 className="text-2xl font-bold text-gray-400">Preguntas:</h2>
              <ul className="mt-4 flex flex-col gap-8">
                {questions.map((question, index) => (
                  <li key={question} className="text-lg flex flex-col">
                    <span className="text-cyan-500">{question}</span>
                    <input
                      type="text"
                      className="p-2 py-3 mt-2 border border-gray-300 rounded-md text-gray-600"
                      name={`awser-${index}`}
                      placeholder="Responde aquí..."
                    />
                  </li>
                ))}
              </ul>

              {/* Botón para enviar las respuestas a evaluar */}
              <button
                type="submit"
                className="mt-6 p-2 py-4 bg-gradient-to-r from-cyan-500 to-blue-800 text-white font-bold rounded-md">
                Enviar respuestas
              </button>
            </form>
          </section>
        )}
      </main>
    </>
  )
}
```
