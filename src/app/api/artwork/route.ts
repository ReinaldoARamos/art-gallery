import { prisma } from '@/app/lib/prisma'

export async function GET() {
  const artwork = await prisma.artwotk.findMany()

  return Response.json(artwork)
}
