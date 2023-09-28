import { CaretRight } from 'phosphor-react'

export function Directory() {
  return (
    <div className="pb-8 flex">
      <span className="text-brown text-md border-b border-zinc-400">
        Galeria
      </span>{' '}
      <CaretRight className="h-6 w-6" />{' '}
      <span className="text-brown text-md font-bold border-b border-zinc-800">
        Todos os artistas
      </span>
    </div>
  )
}
