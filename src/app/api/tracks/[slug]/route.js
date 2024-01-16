// En pages/api/article/[slug].js
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export async function GET (request) {
  const url = new URL(request.url)
  const slug = url.pathname.split('/').pop()

  try {
    const markdownWithMeta = fs.readFileSync(
      path.join('src/content', slug + '.md'),
      'utf-8'
    )

    const { data: frontmatter, content } = matter(markdownWithMeta)

    return Response.json({ frontmatter, content })
  } catch (err) {
    return Response.json({ message: 'No se encontró el artículo' })
  }
}
