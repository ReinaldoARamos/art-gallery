'use client'

import { ArticlesPost } from '@/app/components/ArticlesPost/ArticlesPost'
import { Button } from '@/app/components/Button/ButtonTest'
import { Directory } from '@/app/components/Directory/Directory'
import { NextPageButton } from '@/app/components/NextPageButton/NextPageButton'
import { Tags } from '@/app/components/Tags/Tags'
import { ArrowCircleRight } from 'phosphor-react'

export default function Articles() {
  return (
    <>
      <div className="bg-[url('/images/artist-banner.png')] bg-cover h-64 " />
      <div className="px-72 pt-7">
        <Directory path1="Blog" path2="Tutoriais" />

        <h1 className="text-title text-4xl pt-14 pb-16 font-bold">Tutoriais</h1>
        <div className="flex gap-5">
          <div className="space-y-12">
            <ArticlesPost
              src={'/images/post-3.png'}
              author={'Júlia Albuquerque'}
              title={'A Arte Viva das Ruas'}
              date={'30/05/2023'}
              article={
                'De norte a sul e de leste a oeste, uma coisa que você não deixará de descobrir em todo o Brasil em quase todas as ruas, há tags, desenhos, graffitis e pinturas nas paredes. O Brasil é conhecido mundialmente pela sua street art. Nas ruas brasileiras podemos encontrar tags, desenhos, grafites, pinturas de parede, lambe-lambe, stickers, é uma infinidade de intervenções urbanas provocadas por artistas das mais variadas técnicas.'
              }
            />
            <ArticlesPost
              src={'/images/post-4.png'}
              author={'Júlia Albuquerque'}
              title={'Expressando-se na Cidade'}
              date={'30/05/2023'}
              article={
                'É um tipo de arte encontrada nos espaços urbanos. Manifesta-se por meio de intervenções, performances, grafite, teatro, dentre outras. Essas ações artísticas ocorrem em ambientes públicos e interagem diretamente com os indivíduos. Geralmente, usam como suporte os grandes centros urbanos, onde há intensa circulação de pessoas e diversidade cultural. Dessa forma, os cidadãos acabam se deparando com a arte sem precisar ir até centros culturais.'
              }
            />
          </div>
          <div className="space-y-4">
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
