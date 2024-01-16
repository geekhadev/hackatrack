import { TRACKS } from '@/data/tracks.data'

export const getTracksFetch = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/tracks/pending`)
  const tracks = await response.json()
  return tracks
}

export const getTracksByStatus = async (status) => {
  const tracks = TRACKS.filter(track => track.status === status) || []
  return tracks
}
