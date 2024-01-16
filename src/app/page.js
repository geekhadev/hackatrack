import MainLayout from '@/components/MainLayout'
import Hero from '@/components/Hero'
import TracksList from '@/components/TracksList'
import { getTracksFetch } from '@/services/tracks.service'

export default async function Home () {
  const tracks = await getTracksFetch()
  return (
    <MainLayout>
      <Hero />
      <TracksList title='Nuevos tracks' badget='No te los pierdas!' tracks={tracks} />
    </MainLayout>
  )
}
