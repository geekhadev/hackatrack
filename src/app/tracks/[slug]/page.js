import { marked } from 'marked'
import TrackLayout from '@/components/TrackLayout'
import { findTrackFetch } from '@/services/tracks.service'

export default async function Page ({ params }) {
  const { frontmatter, content } = await findTrackFetch(params.slug)
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
