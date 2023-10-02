import Image from 'next/image'

interface BoardProps {
  name: string
  local: string
  date: string
  width: number
  height: number
  src: string
  hour: string
}
export function EventBoard({
  local,
  height,
  name,
  src,
  width,
  date,
  hour,
}: BoardProps) {
  return (
    <div className="flex flex-col ">
      <Image src={src} alt="" width={width} height={height} className=" pb-6" />
      <div className="flex flex-col  items-center">
        <span className="pb-3 text-boardbrown text-2xl font-bold">{name}</span>
        <span className="text-brown text-md">Data: {date}</span>
        <span className="text-brown text-md">Horário: {hour}</span>
        <span className="text-brown text-md">Local: {local}</span>
      </div>
    </div>
  )
}
