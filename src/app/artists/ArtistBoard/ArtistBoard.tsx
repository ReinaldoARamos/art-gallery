import Image from 'next/image'

interface ArtistBoardProps {
  src: string
  author: string
  city: string
}
export function ArtistsBoard({ author, city, src }: ArtistBoardProps) {
  return (
    <div className="flex flex-col pb-14">
      <Image
        src={`/images\\${src}`}
        alt=""
        width={427}
        height={157}
        className="object-cover pb-5"
      />
      <div className="text-title text-2xl pb-3 flex justify-center ">
        {author}
      </div>
      <div className="text-md text-brown flex justify-center">{city}</div>
    </div>
  )
}
