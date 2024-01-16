import MainLayout from '@/components/MainLayout'
import TracksList from '@/components/TracksList'
import { getTracksByStatus } from '@/services/tracks.service'

export default async function TracksCompleted () {
  const tracks = await getTracksByStatus('published')
  return (
    <MainLayout>
      <TracksList title='Tracks completados' badget='Revivelos!' tracks={tracks} />
    </MainLayout>
  )
}
