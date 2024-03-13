import MainLayout from '@/components/MainLayout'
import Hero from '@/components/Hero'
import TracksList from '@/components/TracksList'
import TipsList from '@/components/TipsList'
import { getTracksByStatus } from '@/services/tracks.service'

export let metadata = {
  metadataBase: new URL('https://hackatrack.vercel.app'),
  alternates: {
    canonical: '/'
  }
}

export default async function Home () {
  const tracks = await getTracksByStatus('draft')
  const tips = await getTracksByStatus('tip')

  const openGraphCover = tracks && tracks[0] && tracks[0].cover ? tracks[0].cover : '/cover.png'

  metadata = {
    ...metadata,
    title: 'Nuevos eventos! - HACK A BOSS',
    description: 'Nuestros próximos tracks formativos y mucho más!',
    openGraph: {
      images: [openGraphCover]
    }
  }

  return (
    <MainLayout>
      <Hero />
      <TracksList title='Nuevos tracks' badget='No te los pierdas!' tracks={tracks} />
      <TipsList title='Tips' badget='Super útiles!' tips={tips} />
    </MainLayout>
  )
}
