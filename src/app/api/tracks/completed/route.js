/**
 * @jest-environment node
 */
import { getTracksByStatus } from '@/services/tracks.service'

export async function GET () {
  const pendingTracks = await getTracksByStatus('completed')
  return Response.json(pendingTracks)
}
