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
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-markdown" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /><path d="M7 15v-6l2 2l2 -2v6" /><path d="M14 13l2 2l2 -2m-2 2v-6" /></svg>
        Descargar markdown
    </button>
  )
}

export default ButtonDownload
