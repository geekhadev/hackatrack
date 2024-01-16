export const getTracks = async () => {
  const response = await fetch(`${process.env.API}/tracks`)
  const tracks = await response.json()
  return tracks
}
