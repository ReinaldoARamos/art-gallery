import Image from 'next/image'

import { ArrowRightCircle } from 'lucide-react'
import { Board } from './components/Board/Board'
import ImageSlider from './components/ImageSlider/ImageSlider'
import { Tags } from './components/Tags/Tags'
import { BlogLink } from './components/BlogLink/BlogLink'
import { Button } from './components/Button/ButtonTest'

const images = ['slider-1.jpg', 'slider-2.jpg', 'slider-3.jpg']
export default function Home() {
  return (
    <>
      <div className="space-y-32 px-72">
        <div className="mt-20   flex">
          <div className="space-y-14 flex flex-col j pr-56">
            <h1 className="text-heading   item-center  font-bold text-Title  ">
              <div>Dismitificando a arte urbana</div>
              <div>e o grafite</div>
            </h1>
            <p className="text-brown  text-2xl">
              Seja você um artista, um amante da arte ou
              <br />
              simplesmente alguém curioso sobre o universo da
              <br />
              arte de rua e do grafite, este espaço é seu
            </p>
            <div>
              {' '}
              <Button>
                Ver Galeria de Arte <ArrowRightCircle className="h-6 w-6" />
              </Button>
            </div>
          </div>
          <Image src="/images\Quadro.jpg" alt="" width={540} height={375} />
        </div>
        <div className="flex">
          <Image src="/images\Quadro2.jpg" alt="" width={540} height={340} />
          <div className="flex flex-col pl-36 justify-between">
            <div>
              <h1 className="text-heading   item-center  font-bold text-Title  mb-3">
                Nosso Propósito
              </h1>
              <span className="mb-3 text-lg text-heading">
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
            <button className="flex gap-3 text-lg text-brown items-center">
              Saiba mais sobre o projeto arte concreta{' '}
              <ArrowRightCircle className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="text-heading   item-center  font-bold text-Title  mb-3">
            Obras em destaque
          </h1>
          <div className="flex gap-5">
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
          <Button variant="ghost">
            Ver galeria completa <ArrowRightCircle className="h-6 w-6" />
          </Button>
        </div>
        <div className="flex flex-col">
          <h1 className="text-heading   item-center  font-bold text-Title  mb-3">
            Artistas em Destaque
          </h1>
          <div className="flex gap-5">
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
          <Button variant="ghost">
            Ver Todos os nossos artistas{' '}
            <ArrowRightCircle className="h-6 w-6" />
          </Button>
        </div>
        <div className="">
          <ImageSlider images={images} />
        </div>
        <div className="grid grid-cols-2">
          <div className="space-y-8">
            <h1 className="text-heading   item-center  font-bold text-Title  mb-9">
              Conheça nosso blog
            </h1>
            <div className="text-md text-brown">
              Venha conhecer o blog Arte Concreta, um espaço dedicado
              <br />à celebração e exploração da arte de rua, grafite e outras
              <br />
              manifestações da cultura urbana que expressam a voz,
              <br />a criatividade e o espírito revolucionário das nossas
              cidades.
            </div>
            <div className="flex flex-wrap gap-3  max-w-lg">
              <Tags label="Obras de arte" />
              <Tags label="História da Arte Urbana" />
              <Tags label="Opniões e críticas" />
              <Tags label="Cultura Urbana" />
              <Tags label="Stencil" />
            </div>
            <button className="flex   justify-center  text-base">
              <div className="flex gap-3 items-center text-md">
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
