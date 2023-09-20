import Image from 'next/image'
import { Button } from './components/Button/Button'
import { ArrowRightCircle } from 'lucide-react'
import { Board } from './components/Board/Board'
import ImageSlider from './components/ImageSlider/ImageSlider'

const images = ['slider-1.jpg', 'slider-2.jpg', 'slider-3.jpg']
export default function Home() {
  return (
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
            <Button text={'Ver Galeria de Arte'} icon={ArrowRightCircle} />
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
              Nossa missão é oferecer uma plataforma para artistas e entusiastas
              da arte urbana, onde eles possam se conectar, aprender,
              compartilhar e, acima de tudo, apreciar a riqueza e diversidade
              desta forma de arte contemporânea. Acreditamos na arte como um
              poderoso meio de expressão social e cultural e, por isso, nos
              empenhamos em destacar a relevância e o impacto do grafite e da
              arte de rua nas nossas cidades e comunidades.
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
        <button className="flex   justify-center  text-base">
          <div className="flex gap-3 items-center text-md">
            Ver galeria completa <ArrowRightCircle className="h-5 w-5" />
          </div>
        </button>
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
        <button className="flex   justify-center  text-base">
          <div className="flex gap-3 items-center text-md">
            Ver Todos os Artistas <ArrowRightCircle className="h-5 w-5" />
          </div>
        </button>
      </div>
      <div className="">
        <ImageSlider images={images} />
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
        <button className="flex   justify-center  text-base">
          <div className="flex gap-3 items-center text-md">
            Ver Todos os Artistas <ArrowRightCircle className="h-5 w-5" />
          </div>
        </button>
      </div>
    </div>
  )
}
