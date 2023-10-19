'use client'

import { ArticlesPost } from '@/app/components/ArticlesPost/ArticlesPost'
import { Button } from '@/app/components/Button/ButtonTest'
import { Directory } from '@/app/components/Directory/Directory'
import { NextPageButton } from '@/app/components/NextPageButton/NextPageButton'
import { Tags } from '@/app/components/Tags/Tags'
import { ArrowCircleRight } from 'phosphor-react'

export default function Tutorials() {
  return (
    <>
      <div className="bg-[url('/images/tutorial-banner.png')] bg-cover h-64 " />
      <div className="lg:px-72 px-6 pt-7">
        <Directory path1="Blog" path2="Tutoriais" />

        <h1 className="text-title text-4xl pt-14 pb-16 font-bold lg:text-left text-center">
          Tutoriais
        </h1>
        <div className="flex gap-5">
          <div className="space-y-12">
            <ArticlesPost
              src={'/images/post-3.png'}
              author={'Júlia Albuquerque'}
              title={'A Arte Viva das Ruas'}
              date={'30/05/2023'}
              article={
                'Este tutorial abrangente guiará você, passo a passo, através do complexo e vibrante mundo da arte de rua. Desde o planejamento e design até técnicas e dicas de segurança, estamos aqui para ajudá-lo a expressar a sua voz através da arte mais democrática que existe.'
              }
            />
            <ArticlesPost
              src={'/images/post-4.png'}
              author={'Júlia Albuquerque'}
              title={'Expressando-se na Cidade'}
              date={'30/05/2023'}
              article={
                'Nesta postagem de blog, compartilharemos dicas valiosas para artistas emergentes que querem mergulhar no mundo vibrante e expressivo da arte de rua. Desde a escolha do material até o desenvolvimento de seu estilo único, temos tudo o que você precisa para começar.'
              }
            />
          </div>
          <div className="space-y-4 lg:block hidden">
            <div className="space-y-1">
              <span>Encontre um tutorial</span>
              <div className="flex gap-5">
                <input
                  placeholder="Nome do tutorial"
                  className="border-gray300 border rounded-lg focus:outline-none p-3"
                />
                <div>
                  <Button>
                    <ArrowCircleRight className="h-6 w-6" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col py-6 pl-6 pr-56 border border-gray300 rounded-md pb-16">
              <div className="flex flex-col space-y-2 ">
                <Tags label="Grafite Clássico" />
                <Tags label="Arte de Stêncil" />
                <Tags label="Pôster" />
                <Tags label="Arte de adesivo" />
                <Tags label="Instalações de rua" />
                <Tags label="Arte Mural" />
                <Tags label="Esculturas de Rua" />
                <Tags label="Yarn Bombing" />
              </div>
            </div>
          </div>
        </div>
        <div className="pt-16">
          {' '}
          <NextPageButton />
        </div>
      </div>
    </>
  )
}
