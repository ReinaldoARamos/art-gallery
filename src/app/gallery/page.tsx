'use client'
import { ArrowRightCircle } from 'lucide-react'
import { Board } from '../components/Board/Board'
import { CaretLeft, CaretRight } from 'phosphor-react'

export default function Gallery() {
  return (
    <>
      <div className="bg-[url('/images/banner.jpg')] bg-cover pt-32 pb-72 ">
        <div className=" text-5xl bg-arrow  text-white font-bold flex justify-center items-center py-5">
          <span>Galeria de arte</span>
        </div>
      </div>

      <div className="pb-14 pt-8 font-bold text-title flex gap-3 justify-center items-center text-4xl  before:h-0.5 before:bg-gray before:w-96 after:h-0.5 after:bg-gray after:w-96 ">
        Obras
      </div>
      <div className="px-72 flex flex-col">
        <div>
          <div>Para colecionar</div>
          <div className="grid grid-cols-4 gap-5">
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
            <Board
              author="Burna Paiva"
              height={315}
              width={315}
              name="O Beijo do Grafite"
              src="/images\image-4.jpg"
            />
            <Board
              author="Amanda Brito"
              height={315}
              width={315}
              name="Sopro de Vida"
              src="/images\image-5.jpg"
            />
            <Board
              author="Denise Sobreira"
              height={315}
              width={315}
              name="Esperança Urbana"
              src="/images\image-7.jpg"
            />
            <Board
              author="Eduardo Pinho"
              height={315}
              width={315}
              name="Sonhos em Tinta"
              src="/images\image-6.jpg"
            />
          </div>
          <button className="flex gap-3 text-lg text-base justify-center w-full items-center pt-16">
            Saiba mais sobre o projeto arte concreta{' '}
            <ArrowRightCircle className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="text-5xl  font-bold text-Title pt-10 flex justify-center pb-10">
        Depoimentos
      </div>

      <div className="w-full bg-zinc-200 py-11 px-72 flex items-center   justify-between">
        <button className="bg-arrow rounded-full p-3">
          <CaretLeft className="h-5 w-5 text-white" />
        </button>
        <div className="flex flex-col px-96">
          <div className="pb-4 text-Title text-7xl font-sans">``</div>
          <div className="text-sm text-brown pb-5  ">
            Como artista urbano, vejo nas ruas um quadro em branco onde posso
            expressar minhas emoções, pensamentos e crenças. Por muitos anos,
            lutei para encontrar um lugar onde meus pares e eu pudéssemos
            compartilhar nossas criações e experiências. Foi então que descobri
            o Projeto Arte Concreta. Desde o início, fui atraído pela abordagem
            única e inclusiva do site em relação à arte urbana. Aqui, todos os
            tipos de artistas são bem-vindos, independentemente do seu estilo ou
            nível de experiência. Aprendi muito com os tutoriais e dicas
            compartilhados no site, o que me ajudou a aprimorar minhas
            habilidades e expandir minha perspectiva artística.
          </div>
          <div className="text-title text-xl">Ana Maria Silva</div>
        </div>
        <button className="bg-arrow rounded-full p-3">
          <CaretRight className="h-5 w-5 text-white" />
        </button>
      </div>
      <div className="pt-16">oi</div>
    </>
  )
}
