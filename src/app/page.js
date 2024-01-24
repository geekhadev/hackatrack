import MainLayout from '@/components/MainLayout'
import Hero from '@/components/Hero'
import TracksList from '@/components/TracksList'
import { getTracksByStatus } from '@/services/tracks.service'

export let metadata = {}

export default async function Home () {
  const tracks = await getTracksByStatus('draft')

  const openGraphCover = tracks && tracks[0] && tracks[0].cover ? tracks[0].cover : '/cover.png'

  metadata = {
    title: 'Nuevos eventos! - Hack A Boss',
    description: 'Nuestros próximos tracks formativos y mucho más!',
    openGraph: {
      images: [openGraphCover]
    }
  }

  return (
    <MainLayout>
      <Hero />
      <TracksList title='Nuevos tracks' badget='No te los pierdas!' tracks={tracks} />
    </MainLayout>
  )
}
