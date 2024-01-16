export const getTracks = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/tracks`)
  const tracks = await response.json()
  return tracks
}
