const Hero = () => {
  return (
    <section className="py-16 mx-auto max-w-5xl">
      <div className="flex flex-col gap-4">
        <h1 className="text-6xl font-bold text-blance text-gray-100">
          Mejora tus habilidades con nuestros tracks formativos!
        </h1>
        <p className="text-balance text-gray-400">
          Mantente actualizado con las tecnologías más demandadas del mercado. Gracias a nuestros tracks
          en HackABoss te convertirás en un profesional del desarrollo. <span className="text-yellow-500">Complete tus habilidades del Bootcamp!</span>
        </p>
        <div className="flex flex-wrap gap-2">
          <a href="/tracks/completed" className="px-6 py-3 text-gray-900 font-bold rounded-full text-xl bg-yellow-500 hover:bg-yellow-600">
            Ver tracks cerrados
          </a>
          <a href="https://www.hackaboss.com" target="_blank" className="px-6 py-3 text-gray-900 font-bold rounded-full text-xl bg-yellow-500 hover:bg-yellow-600">
            Ir a nuestra página web
          </a>
        </div>
      </div>

    </section>
  )
}

export default Hero
