'use client'
import { ArrowRightCircle } from 'lucide-react'
import { Board } from '../components/Board/Board'
import Testiominals from '../components/Testiominals/Testiominals'
import { InterviewCard } from '../components/InterviewCard/InterviewCard'
import { Button } from '../components/Button/ButtonTest'

import { UseRedirect } from '../hooks/useRedirect'
import BoardSlider from '../components/BoardSlider/BoardSlider'

export default function Gallery() {
  const redirectTo = UseRedirect()
  const images = ['gallery-1.png', 'gallery-1.png', 'gallery-1.png']
  const images2 = ['Teste.png', 'Teste.png', 'Teste.png']
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
      <div className="lg:px-72 px-6 flex flex-col">
        <div>
          <div className="text-base lg:text-2xl text-5xl pb-4 flex justify-center">
            Para Decorar
          </div>
          <div className="lg:grid lg:grid-cols-4 lg:gap-5 hidden">
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
          <div>
            <BoardSlider images={images} />
            <div className="space-y-3  pt-6 flex justify-center flex-col items-center">
              <h2 className="text-2xl text-gray400">Cromática Transição</h2>
              <span>Ana Luísa Ferreira</span>
            </div>
          </div>
          <div className="flex justify-center">
            <Button
              variant="ghost"
              onClick={() => redirectTo(`gallery/artwork`)}
            >
              Ver todas as obras
              <ArrowRightCircle className="w-6 h-6" />
            </Button>
          </div>
          <div className="lg:grid lg:grid-cols-4 lg:gap-5 hidden">
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
          <div>
            <BoardSlider images={images2} />
            <div className="space-y-3  pt-6 flex justify-center flex-col items-center">
              <h2 className="text-2xl text-gray400">Voo da Liberdade</h2>
              <span>Ana Maria Silva</span>
            </div>
          </div>
          <div className="flex justify-center">
            <Button
              variant="ghost"
              onClick={() => redirectTo(`gallery/artwork`)}
            >
              Ver todas as obras
              <ArrowRightCircle className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>

      <div className="text-5xl  font-bold text-Title pt-10 flex justify-center pb-10">
        Depoimentos
      </div>
      <Testiominals
        testimonials={[
          {
            author: 'Ana Maria Vieira',
            depoiment:
              'Como artista urbano, vejo nas ruas um quadro em branco onde posso expressar minhas emoções, pensamentos e crenças. Por muitos anos, lutei para encontrar um lugar onde meus pares e eu pudéssemos compartilhar nossas criações e experiências. Foi então que descobri o Projeto Arte Concreta. Desde o início, fui atraído pela abordagem única e inclusiva do site em relação à arte urbana. Aqui, todos os tipos de artistas são bem-vindos, independentemente do seu estilo ou nível de experiência. Aprendi muito com os tutoriais e dicas compartilhados no site, o que me ajudou a aprimorar minhas habilidades e expandir minha perspectiva artística.',
          },
          {
            author: 'Gustavo Freitas',
            depoiment:
              'O Projeto Arte Concreta foi um ponto de virada na minha trajetória artística, proporcionando uma plataforma inclusiva e inspiradora. Através dele, encontrei um espaço para compartilhar minhas criações, aprender com outros artistas e expandir minha perspectiva. Essa comunidade acolhedora e diversa redefiniu minha abordagem à arte urbana, abrindo portas para novas possibilidades e desafios. Cada tutorial e interação moldou meu estilo e aprimorou minhas habilidades, tornando o Projeto Arte Concreta não apenas um site, mas uma fonte de crescimento artístico contínuo que mudou profundamente minha vida na arte.',
          },
          {
            author: 'Arthur do Val',
            depoiment:
              'O Projeto Arte Concreta foi um divisor de águas em minha jornada artística, proporcionando uma plataforma inclusiva e inspiradora. Através dele, encontrei um espaço para compartilhar minhas criações, aprender com outros artistas e expandir minha perspectiva. Essa comunidade acolhedora e diversa redefiniu minha abordagem à arte urbana, abrindo portas para novas possibilidades e desafios. Cada tutorial e interação moldou meu estilo e aprimorou minhas habilidades, tornando o Projeto Arte Concreta não apenas um site, mas uma fonte de crescimento artístico contínuo que mudou profundamente minha vida na arte.',
          },
          // Add more testimonials as needed
        ]}
      />

      <div className=" flex flex-col px-72 pb-20 ">
        <div className="pt-16 flex justify-center items-center text-Title text-5xl pb-10">
          Entrevistas
        </div>
        <div className="flex justify-center  item-center gap-5">
          <InterviewCard />
          <InterviewCard />
        </div>
        <button className=" flex justify-end item-center pt-8 pr-2">
          <Button
            variant="ghost"
            onClick={() => redirectTo(`gallery/interview`)}
          >
            Ver todas as entrevistas <ArrowRightCircle className="w-6 h-6" />
          </Button>
        </button>
      </div>
    </>
  )
}
