/**
 * @jest-environment node
 */

import TRACKS from '@/data/tracks.data.json'

export async function GET () {
  return Response.json(TRACKS)
}
