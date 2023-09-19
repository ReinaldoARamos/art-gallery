import Image from 'next/image'
import { Button } from './components/Button/Button'
import { ArrowRightCircle } from 'lucide-react'

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
      <div>oi</div>
    </div>
  )
}
