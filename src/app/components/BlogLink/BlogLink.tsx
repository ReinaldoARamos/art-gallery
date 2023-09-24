import { ArrowRightCircle } from 'lucide-react'

interface BlogLinkProps {
  title: string
  description: string
}
export function BlogLink({ description, title }: BlogLinkProps) {
  return (
    <div className="flex flex-col  border-b border-b-gray">
      <div className="text-2xl text-boardbrown pb-3">{title}</div>
      <div className="flex justify-between items-center pb-5">
        <span>{description}</span>
        <div className=" hover:cursor-pointer transition duration-300 hover:text-boardbrown group">
          <ArrowRightCircle className="h-10 w-10 text-base group-hover:text-boardbrown" />
        </div>
      </div>
    </div>
  )
}
