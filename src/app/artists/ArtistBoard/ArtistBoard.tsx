import Image from 'next/image'

export function ArtistsBoard() {
  return (
    <div className="flex flex-col">
      <Image
        src="/images\artist.png"
        alt=""
        width={427}
        height={157}
        className="object-cover pb-5"
      />
      <div className="text-title text-2xl pb-3 flex justify-center ">
        Ane Maria Silva
      </div>
      <div className="text-md text-brown flex justify-center">
        Belo Horizonte/MG
      </div>
    </div>
  )
}
