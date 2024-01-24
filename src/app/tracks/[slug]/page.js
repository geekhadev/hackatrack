import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import TrackLayout from '@/components/TrackLayout'
import ButtonDownload from '@/components/ButtonDownload'

const getArticle = async (slug) => {
  const directoryPath = path.join(process.cwd(), './public/content')
  const filePath = path.join(directoryPath, slug + '.md')

  const markdownWithMeta = fs.readFileSync(filePath, 'utf-8')

  const { data: frontmatter, content } = matter(markdownWithMeta)

  return { frontmatter, content }
}

export default async function Page ({ params }) {
  const { frontmatter, content } = await getArticle(params.slug)

  return (
    <TrackLayout>
        <div className='flex flex-col gap-1'>
          <img src={frontmatter.cover} alt={frontmatter.title} className="rounded-lg" />
          <h3 className="col-span-2 text-5xl mt-4 font-bold flex flex-row items-center text-gray-200 text-balance">
            {frontmatter.title}
          </h3>
          <p className="text-gray-400 text-balance">{frontmatter.excerpt}</p>
          <div className='flex gap-2 items-center'>
            {frontmatter.authorAvatar && <img className="size-6 rounded-full" src={frontmatter.authorAvatar} alt={frontmatter.authorName} />}
            {frontmatter.date && <p className="text-gray-400 text-balance">{frontmatter.authorName}</p>}
            {frontmatter.date && <p className="text-yellow-500 text-balance">Incia: {frontmatter.date}</p>}
          </div>
        </div>
        <div className="flex gap-4 flex-wrap mt-4">
          {params.slug && <ButtonDownload slug={params.slug} />}
          {frontmatter.deploy && <a
            href={frontmatter.deploy}
            target='_blank'
            className="
            bg-white/5 border border-white/10
              flex justify-center items-center gap-x-2
              md:py-2 md:px-4 text-base
              hover:scale-105 transition rotate-0
              text-white/50 hover:bg-white/10
              text-gray-100 rounded-full px-3 py-2 hover:text-yellow-400
            ">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-world-upload" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M21 12a9 9 0 1 0 -9 9" /><path d="M3.6 9h16.8" /><path d="M3.6 15h8.4" /><path d="M11.578 3a17 17 0 0 0 0 18" /><path d="M12.5 3c1.719 2.755 2.5 5.876 2.5 9" /><path d="M18 21v-7m3 3l-3 -3l-3 3" /></svg>
              Ver despliegue
          </a>}
          {frontmatter.github && <a
            href={frontmatter.github}
            target='_blank'
            className="
            bg-white/5 border border-white/10
              flex justify-center items-center gap-x-2
              md:py-2 md:px-4 text-base
              hover:scale-105 transition rotate-0
              text-white/50 hover:bg-white/10
              text-gray-100 rounded-full px-3 py-2 hover:text-yellow-400
            ">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
              Ver repositorio
          </a>}
        </div>
        <div className='track-mdx'>
            <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
    </TrackLayout>
  )
}
