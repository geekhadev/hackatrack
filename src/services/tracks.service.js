export const getTracks = async () => {
  const response = await fetch('hacka-six.vercel.app/api/tracks')
  const tracks = await response.json()
  return tracks
}

export const findTracks = async (id) => {
  const response = await fetch('hacka-six.vercel.app/api/tracks/' + id)
  const tracks = await response.json()
  return tracks
}
