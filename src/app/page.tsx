'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { ArrowRightCircle } from 'lucide-react'

import { Board } from './components/Board/Board'
import ImageSlider from './components/ImageSlider/ImageSlider'
import { Tags } from './components/Tags/Tags'
import { BlogLink } from './components/BlogLink/BlogLink'
import { Button } from './components/Button/ButtonTest'
import ImageSliderSm from './components/ImageSliderSm/ImageSliderSm'
import BoardSlider from './components/BoardSlider/BoardSlider'
import { UseRedirect } from './hooks/useRedirect'
import { useQuery } from '@tanstack/react-query'
import { api } from './lib/axios'
const images = ['slider-1.jpg', 'slider-2.jpg', 'slider-3.jpg']
const images2 = ['Teste.png', 'Teste.png', 'Teste.png']
const images3 = ['Board-Slide-1.png', 'Board-Slide-1.png', 'Board-Slide-1.png']
const images4 = ['Board-Slide-2.png', 'Board-Slide-2.png', 'Board-Slide-2.png']

interface ArtworkProps {
  id: string
  title: string
  image_url: string
  authorId?: number
}

export default function Home() {
  const RedirectTo = UseRedirect()

  const { data } = useQuery<ArtworkProps[]>({
    queryKey: ['artwork'],
    queryFn: async () => {
      const response = await api.get(`/artwork`)
      console.log(response.data)
      return response.data
    },
  })

  return (
    <>
      <div className="space-y-32   px-6 lg:px-72">
        <div className="mt-20   flex flex-col lg:flex-row   items-center justify-center">
          <div className="space-y-14  j lg:pr-56  flex flex-col   ">
            <h1 className="text-heading  font-bold text-Title  ">
              Dismitificando a arte urbana
            </h1>
            <div>
              {data?.map((artwork) => (
                <div key={artwork.id}>
                  <h2>{artwork.title}</h2>
                </div>
              ))}
            </div>
            <p className="text-brown  text-justify text-2xl">
              Seja você um artista, um amante da arte ou
              <br />
              simplesmente alguém curioso sobre o universo da
              <br />
              arte de rua e do grafite, este espaço é seu
            </p>
            <div className="flex justify-center items-center">
              {' '}
              <Button onClick={() => RedirectTo('/gallery')}>
                Ver Galeria de Arte <ArrowRightCircle className="h-6 w-6" />
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center pt-6">
            {' '}
            <Image src="/images\Quadro.jpg" alt="" width={540} height={375} />
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row ">
          <div className="justify-center flex items-center lg:hidden">
            <Image src="/images\Quadro2.jpg" alt="" width={540} height={340} />
          </div>
          <Image
            src="/images\Quadro2.jpg"
            alt=""
            width={540}
            height={340}
            className="sm:hidden lg:block md:hidden"
          />
          <div className="flex flex-col lg:pl-36 lg:justify-between pb  -6 ">
            <div>
              <h1 className="text-heading  flex justify-center item-center  font-bold text-Title  mb-3">
                Nosso Propósito
              </h1>
              <span className="mb-3 text-lg text-heading flex justify-center  text-justify">
                Bem-vindo ao Projeto Arte Concreta - um espaço dedicado à
                celebração, exploração e promoção da arte de rua e do grafite.
                Nossa missão é oferecer uma plataforma para artistas e
                entusiastas da arte urbana, onde eles possam se conectar,
                aprender, compartilhar e, acima de tudo, apreciar a riqueza e
                diversidade desta forma de arte contemporânea. Acreditamos na
                arte como um poderoso meio de expressão social e cultural e, por
                isso, nos empenhamos em destacar a relevância e o impacto do
                grafite e da arte de rua nas nossas cidades e comunidades.
              </span>
            </div>
            <button
              className=" gap-3 text-lg text-brown items-center pt-6 pb-6 flex justify-center "
              onClick={() => RedirectTo('/about')}
            >
              Saiba mais sobre o projeto arte concreta{' '}
              <ArrowRightCircle className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="flex flex-col ">
          <h1 className="lg:text-heading  text-2xl justify-center flex item-center  font-bold text-Title  mb-3 sm:flex sm:justify-center">
            Obras em destaque
          </h1>
          <div className="lg:flex lg:gap-5 hidden">
            <Board
              author="Ana Maria Silva"
              height={315}
              width={315}
              name="Voo da liberdade"
              src="/images\image.jpg"
            />
            <Board
              author="Gustavo Alves"
              height={315}
              width={315}
              name="Cidade em Movimento"
              src="/images\image-1.jpg"
            />
            <Board
              author="Diego Pires"
              height={315}
              width={315}
              name="Dançando com as Cores"
              src="/images\image-3.jpg"
            />
            <Board
              author="Preiscilla Souza"
              height={315}
              width={315}
              name="Melodia Urbana"
              src="/images\image-2.jpg"
            />
          </div>
          <BoardSlider images={images3} />
          <Button variant="ghost" onClick={() => RedirectTo('/gallery')}>
            Ver galeria completa <ArrowRightCircle className="h-6 w-6" />
          </Button>
        </div>
        <div className="flex flex-col ">
          <h1 className="lg:text-heading  text-2xl justify-center flex item-center  font-bold text-Title  mb-3 sm:flex sm:justify-center">
            Artistas em Destaque
          </h1>
          <div className="lg:flex lg:gap-5 hidden">
            <Board
              author="Belo Horizonte/MG"
              height={157}
              width={316}
              name="Ana Maria Silva"
              src="/images\camila.jpg"
            />
            <Board
              author="Florianópolis/SC"
              height={157}
              width={316}
              name="Gustavo Alves"
              src="/images\gustavo.jpg"
            />
            <Board
              author="Rio De Janeiro/RJ"
              height={157}
              width={316}
              name="Matheus Oliveira"
              src="/images\matheus.jpg"
            />
            <Board
              author="Recife/BA"
              height={157}
              width={316}
              name="Carolina Martins"
              src="/images\Camila.jpg"
            />
          </div>
          <BoardSlider images={images4} />
          <Button variant="ghost" onClick={() => RedirectTo('/artists')}>
            Ver Todos os nossos artistas{' '}
            <ArrowRightCircle className="h-6 w-6" />
          </Button>
        </div>

        <ImageSlider images={images} />

        <ImageSliderSm images={images2} />
        <div className="lg:grid lg:grid-cols-2 flex flex-col ">
          <div className="space-y-8">
            <h1 className="text-heading  flex justify-center items-center  item-center  font-bold text-Title  mb-9">
              Conheça nosso blog
            </h1>
            <div className="text-md text-brown flex items-center justify-center">
              Venha conhecer o blog Arte Concreta, um espaço dedicado
              <br />à celebração e exploração da arte de rua, grafite e outras
              <br />
              manifestações da cultura urbana que expressam a voz,
              <br />a criatividade e o espírito revolucionário das nossas
              cidades.
            </div>
            <div className="flex justify-center items-center">
              <div className="flex flex-wrap gap-3  max-w-lg  ">
                <Tags label="Obras de arte" />
                <Tags label="História da Arte Urbana" />
                <Tags label="Opniões e críticas" />
                <Tags label="Cultura Urbana" />
                <Tags label="Stencil" />
              </div>
            </div>
            <button className="flex   justify-center  text-base">
              <div className="flex gap-3 items-center text-md ">
                Acompanhar o blog <ArrowRightCircle className="h-5 w-5" />
              </div>
            </button>
          </div>
          <div className="space-y-6">
            <BlogLink
              title="A Arte Viva nas Ruas"
              description="Entendendo como a arte concreta reinventa nosso espaço público"
            />
            <BlogLink
              title="Os Maestros do Grafite"
              description="Conheça os nomes que deram forma e cor ao nosso mundo urbano"
            />
            <BlogLink
              title="Jornada Artística"
              description="Um olhar íntimo sobre o processo criativo e a jornada de um artista de rua"
            />
            <BlogLink
              title="O que é arte Urbana?"
              description="Explorando a relação entre a arte de rua, a expressão social e a mudança política"
            />
          </div>
        </div>
      </div>
      <div className="bg-[url('/images/bg.jpg')] bg-cover">
        <div className="flex justify-center items-center pt-6 pb-16">
          <form>
            <h1 className="text-center text-white text-3xl pb-3">
              Fique atualizado
            </h1>
            <span className="text-zinc-200 text-md ">
              Sobre tudo que está rolando sobre as artes de rua
            </span>

            <div className="flex flex-col pt-8 ">
              <span className="pb-1 text-zinc-50 font-semibold">Seu email</span>
              <div className="pb-10">
                <input
                  type="email"
                  placeholder="Seu melhor email"
                  className="w-full border border-zinc-100 rounded-md h-12 placeholder:pl-3 placeholder: text-gray200"
                />
              </div>

              <Button variant="light">
                Quero me manter atualizado{' '}
                <ArrowRightCircle className="h-6 w-6" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
