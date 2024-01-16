const Hero = () => {
  return (
    <section className="py-16 mx-auto max-w-5xl">
      <div className="flex flex-col gap-6">
        <h1 className="text-5xl font-bold text-blance text-gray-100">
          Hack A Boss tracks formativos!
        </h1>
        <p className="text-balance text-gray-400">
          Mantente actualizado con las tecnologías más demandadas del mercado. Gracias a nuestros tracks
          en HackABoss te convertirás en un profesional del desarrollo. <span className="text-yellow-500">Complete tus habilidades del Bootcamp!</span>
        </p>
        <div className="flex gap-4 flex-wrap">
          <a href="/tracks/completed" className="
          bg-white/5 border border-white/10
            flex justify-center items-center gap-x-2
            md:py-2 md:px-4 text-base
            hover:scale-105 transition
            text-white/50 hover:bg-white/10
            text-gray-100 rounded-full px-3 py-2 hover:text-yellow-400
          ">
            Ver tracks cerrados
          </a>
          <a href="https://www.hackaboss.com" target="_blank" className="
            bg-white/5 border border-white/10
            flex justify-center items-center gap-x-2
            md:py-2 md:px-4 text-base
            hover:scale-105 transition
            text-white/50 hover:bg-white/10
            text-gray-100 rounded-full px-3 py-2 hover:text-yellow-400
          ">
            Ir a nuestra página web
          </a>
        </div>
      </div>

    </section>
  )
}

export default Hero
