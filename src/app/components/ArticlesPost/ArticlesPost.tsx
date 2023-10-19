import Image from 'next/image'
import { Button } from '../Button/ButtonTest'
import { ArrowCircleRight } from 'phosphor-react'

import { UseRedirect } from '@/app/hooks/useRedirect'

interface ArticlePostProps {
  src: string
  author: string
  title: string
  date: string
  article: string
}

export function ArticlesPost({
  article,
  author,
  date,
  src,
  title,
}: ArticlePostProps) {
  const RedirectTo = UseRedirect()
  return (
    <div className="flex gap-5 lg:flex-row flex-col ">
      <div className="lg:block flex justify-center items-center">
        <Image alt="" src={src} width={312} height={365} />
      </div>
      <div className="flex flex-col justify-between">
        <div className="">
          <h1 className="text-title font-bold text-3xl pb-3">{title}</h1>
          <div className="flex flex-col space-y-1 pb-9">
            <span className="text-boardbrown text-md">
              Publicado por {author}
            </span>
            <span className="text-brown text-sm">Em {date}</span>
          </div>
          <div className="  lg:w-[33.75rem] w-54 text-justify text-boardbrown text-sm">
            {article}
          </div>
        </div>
        <div className="lg:block flex justify-center pt-10">
          <Button
            variant="lightwithborder"
            onClick={() => {
              RedirectTo('/blog/post')
            }}
          >
            leia mais <ArrowCircleRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </div>
  )
}
