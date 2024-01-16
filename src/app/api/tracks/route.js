/**
 * @jest-environment node
 */

import { TRACKS } from '@/data/tracks.data'

export async function GET () {
  return Response.json(TRACKS)
}
