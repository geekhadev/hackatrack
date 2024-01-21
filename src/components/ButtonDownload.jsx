'use client'

import path from 'path'

const ButtonDownload = ({ slug }) => {
  const handleDownload = (slug) => {
    const link = document.createElement('a')
    const url = new URL(window.location.href)
    const urlDownload = `${url.origin}/content/${slug}.md`
    link.href = urlDownload
    link.download = path.basename(urlDownload)
    link.click()
  }

  return (
    <button
      onClick={() => handleDownload(slug)}
      className="
      bg-white/5 border border-white/10
        flex justify-center items-center gap-x-2
        md:py-2 md:px-4 text-base
        hover:scale-105 transition
        text-white/50 hover:bg-white/10
        text-gray-100 rounded-full px-3 py-2 hover:text-yellow-400
      ">
        Descargar markdown
    </button>
  )
}

export default ButtonDownload
