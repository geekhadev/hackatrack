/**
 * @jest-environment node
 */

import { TRACKS } from '@/mocks/tracks.mock'

export async function GET () {
  return Response.json(TRACKS)
}
