import { ArrowLeftCircle, ArrowRightCircle } from 'lucide-react'
import { Button } from '../Button/ButtonTest'

export function NextPageButton() {
  return (
    <div className="flex gap-5 justify-center items-center pb-14">
      <Button>
        <ArrowLeftCircle className="h-6 w-6" />
        Anterior
      </Button>
      <button className="px-4 py-3 bg-base text-white  hover:bg-arrow hover:font-bold transition duration-300 rounded-full">
        1
      </button>

      <button className="px-4 py-3 bg-base text-white  hover:bg-arrow hover:font-bold transition duration-300 rounded-full">
        2
      </button>
      <button className="px-4 py-3 bg-base text-white  hover:bg-arrow hover:font-bold transition duration-300 rounded-full">
        3
      </button>
      <div className="text-arrow">...</div>
      <button className="px-4 py-3 bg-base text-white hover:bg-arrow hover:font-bold transition duration-300 rounded-full">
        15
      </button>
      <Button>
        Próximo
        <ArrowRightCircle className="h-6 w-6" />
      </Button>
    </div>
  )
}
