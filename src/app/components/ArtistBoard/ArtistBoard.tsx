import Image from 'next/image'

interface ArtistBoardProps {
  src: string
  author: string
  city: string
}
export function ArtistsBoard({ author, city, src }: ArtistBoardProps) {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        src={`/images\\${src}`}
        alt=""
        width={427}
        height={157}
        className="object-cover pb-5"
      />

      <span className="pb-3 text-boardbrown text-2xl font-bold">{author}</span>
      <span className="text-boardgray text-md pb-9">{city}</span>
    </div>
  )
}
