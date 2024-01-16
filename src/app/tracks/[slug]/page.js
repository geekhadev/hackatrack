import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import TrackLayout from '@/components/TrackLayout'

const getArticle = async (slug) => {
  const markdownWithMeta = fs.readFileSync(
    path.join('src/content', slug + '.md'),
    'utf-8'
  )

  const { data: frontmatter, content } = matter(markdownWithMeta)

  return { frontmatter, content }
}

export default async function Page ({ params }) {
  const { frontmatter, content } = await getArticle(params.slug)
  return (
    <TrackLayout>
        <h1>{frontmatter.title}</h1>
        <p>{frontmatter.date}</p>
        <div>
            <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
    </TrackLayout>
  )
}
