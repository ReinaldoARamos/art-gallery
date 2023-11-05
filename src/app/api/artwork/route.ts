import { prisma } from '@/app/lib/prisma'

export async function GET() {
  const artwork = await prisma.artwork.findMany({
    include: {
      author: true,
    },
  })

  return Response.json(artwork)
}
