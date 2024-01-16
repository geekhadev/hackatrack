import MainLayout from '@/components/MainLayout'
import Hero from '@/components/Hero'
import TracksList from '@/components/TracksList'
import { getTracksByStatus } from '@/services/tracks.service'

export default async function Home () {
  const tracks = await getTracksByStatus('pending')
  return (
    <MainLayout>
      <Hero />
      <TracksList title='Nuevos tracks' badget='No te los pierdas!' tracks={tracks} />
    </MainLayout>
  )
}
