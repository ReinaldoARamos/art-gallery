import Image from 'next/image'
import { Button } from '../Button/ButtonTest'
import { ArrowRightCircle } from 'lucide-react'
import { UseRedirect } from '@/app/hooks/useRedirect'

interface ArticlesProps {
  src: string
  title: string
  date: string
  author: string
  description: string
}
export function Articles({
  date,
  description,
  src,
  title,
  author,
}: ArticlesProps) {
  const RedirectTo = UseRedirect()
  return (
    <div className="flex gap-5">
      <Image alt="" src={src} width={760} height={364} />
      <div className="flex flex-col ">
        <h1 className="text-title text-3xl pb-4">{title}</h1>
        <div className="pb-9">
          <span>Publicado por {author}</span>
          <p>Em {date}</p>
        </div>
        <div className="text-md text-brown">{description}</div>
        <div className="pt-4">
          <Button
            variant="lightwithborder"
            onClick={() => {
              RedirectTo('/blog/post')
            }}
          >
            Ler mais <ArrowRightCircle />
          </Button>
        </div>
      </div>
    </div>
  )
}
