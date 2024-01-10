import Link from 'next/link'
import MainLayout from '@/components/MainLayout'
import { getTracks } from '@/services/tracks.service'

const TracksPage = async () => {
  const tracks = await getTracks()

  if (!tracks) {
    return <div>Loading...</div>
  }

  console.log('Esto es un mensaje')

  return (
    <MainLayout>
      <h1>Tracks</h1>
      <Link href="/">
        Volver al home
      </Link>

      <div className='flex flex-col gap-2'>
        {tracks.map(track => (
          <Link key={track.id} href={`/tracks/${track.id}`}>{track.title}</Link>
        ))}
      </div>
    </MainLayout>
  )
}

export default TracksPage
