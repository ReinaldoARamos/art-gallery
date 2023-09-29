import { ArrowCircleRight, CaretDown } from 'phosphor-react'
import { Button } from '../Button/ButtonTest'

export function SearchBar() {
  return (
    <div className="flex gap-12">
      <div>
        <h3 className="text-title text-md font-semibold pb-1.5">
          Encontre uma obra
        </h3>
        <div className="flex gap-3">
          <input
            placeholder="Nome da obra"
            className="p-3 w-[32.5rem] border border-zinc-300 rounded-md focus:outline-none"
          />
          <Button>
            <ArrowCircleRight className="h-6 w-6" />
          </Button>
        </div>
      </div>

      <div>
        <h3 className="text-title text-md font-semibold pb-1.5">
          Filtrar por artista
        </h3>
        <div className="flex items-center justify-center  border border-zinc-300 rounded-md">
          <input
            placeholder="Selecione um artista"
            className="p-3 w-80 focus:outline-none"
          />
          <CaretDown className="h-6 w-6" />
        </div>
      </div>
      <div>
        <h3 className="text-title text-md font-semibold pb-1.5">
          Filtrar por data
        </h3>
        <div className="flex items-center justify-center  border border-zinc-300 rounded-md">
          <input
            placeholder="Selecione uma data"
            className="p-3 w-80 focus:outline-none"
          />
          <CaretDown className="h-6 w-6" />
        </div>
      </div>
    </div>
  )
}
