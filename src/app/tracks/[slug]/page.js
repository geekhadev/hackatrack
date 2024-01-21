import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import TrackLayout from '@/components/TrackLayout'
import ButtonDownload from '@/components/ButtonDownload'

const getArticle = async (slug) => {
  const directoryPath = path.join(process.cwd(), './src/content')
  const filePath = path.join(directoryPath, slug + '.md')

  const markdownWithMeta = fs.readFileSync(filePath, 'utf-8')

  const { data: frontmatter, content } = matter(markdownWithMeta)

  return { frontmatter, content }
}

export default async function Page ({ params }) {
  const { frontmatter, content } = await getArticle(params.slug)

  return (
    <TrackLayout>
        <h1>{frontmatter.title}</h1>
        <p>{frontmatter.date}</p>
        <ButtonDownload slug={params.slug} />
        <div>
            <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
    </TrackLayout>
  )
}
