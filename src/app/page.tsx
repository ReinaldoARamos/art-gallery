import { Button } from './components/Button/Button'
import { ArrowRightCircle } from 'lucide-react'

export default function Home() {
  return (
    <>
      <div className="mt-20 px-72 space-y-14">
        <h1 className="  text-heading   item-center  font-bold text-Title  ">
          <div>Dismitificando a arte urbana</div>
          <div>e o grafite</div>
        </h1>
        <p className="line-clamp-3">
          Seja você um artista, um amante da arte ou
          <br />
          simplesmente alguém curioso sobre o universo da
          <br />
          arte de rua e do grafite, este espaço é seu
        </p>
        <Button text={'Ver Galeria de Arte'} icon={ArrowRightCircle} />
      </div>
    </>
  )
}
