import Image from 'next/image'
import { ArtistsBoard } from './ArtistBoard/ArtistBoard'

export default function Artists() {
  return (
    <>
      <div className="flex flex-col pt-12 space-y-12 justify-center items-center pb-24 ">
        <h1 className="text-Title font-bold text-heading">
          Conheça nossos artistas
        </h1>
        <div className="flex gap-16">
          <Image src="/images\image-22.png" alt="" width={315} height={315} />
          <Image src="/images\image-23.png" alt="" width={315} height={315} />
          <Image src="/images\image-24.png" alt="" width={315} height={315} />
        </div>
      </div>
      <div className="px-72 flex  gap-5">
        <div className="flex flex-col">
          <div className="text-Title text-3xl">Artistas em destaque</div>
          <div className="flex gap-4 pt-9">
            <ArtistsBoard />
            <ArtistsBoard />
          </div>
        </div>
        <div>oi</div>
      </div>
    </>
  )
}
