import Image from 'next/image'

interface BoardProps {
  name: string
  author: string
  width: number
  height: number
  src: string
}
export function Board({ author, height, name, src, width }: BoardProps) {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image src={src} alt="" width={width} height={height} className=" pb-6" />
      <span className="pb-3 text-boardbrown text-2xl font-bold">{name}</span>
      <span className="text-boardgray text-md pb-9">{author}</span>
    </div>
  )
}
