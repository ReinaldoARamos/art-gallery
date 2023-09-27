import Image from 'next/image'

interface AboutMessagesProps {
  title: string
  src: string
  description: string
  width: number
  height: number
}
export function AboutMessages({
  description,
  src,
  title,
  height,
  width,
}: AboutMessagesProps) {
  return (
    <div className="flex flex-col pb-24">
      <Image src={src} alt="" width={width} height={height} className="pb-2" />
      <h1 className="text-Title text-2xl">{title}</h1>
      <span className="pt-6 text-brown text-md text-justify">
        {' '}
        {description}
      </span>
    </div>
  )
}
