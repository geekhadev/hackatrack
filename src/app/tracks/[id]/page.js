'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import MainLayout from '@/components/MainLayout'
import { getTracks } from '@/services/tracks.service'

const TrackPage = ({ params: { id } }) => {
  const [track, setTrack] = useState(null)

  useEffect(() => {
    getTracks().then(tracks => {
      const trackFinded = tracks.find(track => track.id === Number(id))
      setTrack(trackFinded)
    })
  }, [id])

  if (!track) {
    return <div>Loading...</div>
  }

  return (
    <MainLayout>
      <h1>Detalle de un track {id}</h1>
      <p>{track.title}</p>
      <Link href="/">
        Volver a los tracks
      </Link>
    </MainLayout>
  )
}

export default TrackPage
