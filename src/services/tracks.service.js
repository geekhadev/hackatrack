export const getTracks = async () => {
  const response = await fetch('http://localhost:3000/api/tracks')
  const tracks = await response.json()
  return tracks
}

export const findTracks = async (id) => {
  const response = await fetch('/api/tracks/' + id)
  const tracks = await response.json()
  return tracks
}