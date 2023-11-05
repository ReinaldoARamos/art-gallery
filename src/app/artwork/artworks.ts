import { prisma } from '@/app/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const artwork = await prisma.artwotk.findMany()

  res.json(artwork)
}
