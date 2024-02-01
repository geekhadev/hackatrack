import MainLayout from '@/components/MainLayout'
import TracksList from '@/components/TracksList'
import { getTracksByStatus } from '@/services/tracks.service'

export let metadata = {
  metadataBase: new URL('https://hackatrack.vercel.app'),
  alternates: {
    canonical: '/'
  }
}

export default async function TracksCompleted () {
  const tracks = await getTracksByStatus('published')

  const openGraphCover = tracks && tracks[0] && tracks[0].cover ? tracks[0].cover : '/cover.png'

  metadata = {
    ...metadata,
    title: 'Eventos pasados! - HACK A BOSS',
    description: 'Nuestros próximos tracks formativos y mucho más!',
    openGraph: {
      images: [openGraphCover]
    }
  }

  return (
    <MainLayout>
      <TracksList title='Tracks pasados' badget='Revivelos!' tracks={tracks} />
    </MainLayout>
  )
}
