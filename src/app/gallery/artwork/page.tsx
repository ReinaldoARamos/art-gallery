'use client'
import { Board } from '@/app/components/Board/Board'
import { Directory } from '@/app/components/Directory/Directory'
import { NextPageButton } from '@/app/components/NextPageButton/NextPageButton'
import { SearchBar } from '@/app/components/Searchbar/SearchBar'

export default function Artists() {
  return (
    <>
      <div className="bg-[url('/images/artwork-banner.jpg')] bg-cover h-64 "></div>
      <div className="lg:px-72 px-6">
        <div className="pt-7 pb-14">
          <Directory path1="Galeria" path2="Todos as obras" />
          <SearchBar
            input1="Encontre uma obra"
            placeholder1="Nome da obra"
            input2="Filtrar por artista"
            placeholder2="Selecione um artista"
            input3="Filtrar por estilo"
            placeholder3="Selecione um Estilo"
          />
        </div>
        <h1 className="text-title text-4xl pb-9">Todos as Obras</h1>
        <div className="lg:grid lg:grid-cols-4 gap-6 flex flex-col">
          <Board
            author="Diego Pires"
            height={315}
            width={315}
            name="Foco Inevitável"
            src="/images\obras\image.png"
          />
          <Board
            author="Paula"
            height={315}
            width={315}
            name="Fragmentos"
            src="/images\obras\image-1.png"
          />
          <Board
            author="Diego Pires"
            height={315}
            width={315}
            name="Dançando com as Cores"
            src="/images\obras\image-2.png"
          />
          <Board
            author="Ana Maria"
            height={315}
            width={315}
            name="Expressão Profunda"
            src="/images\obras\image-3.png"
          />
          <Board
            author="Amanda Brito"
            height={315}
            width={315}
            name="Vigilância Multifocal"
            src="/images\obras\image-4.png"
          />
          <Board
            author="Gustavo Alves"
            height={315}
            width={315}
            name="Melodia Cromática"
            src="/images\obras\image-5.png"
          />
          <Board
            author="Diego Pires"
            height={315}
            width={315}
            name="Escorrendo em Cores"
            src="/images\obras\image-6.png"
          />
          <Board
            author="Paula"
            height={315}
            width={315}
            name="O Contraste"
            src="/images\obras\image-7.png"
          />
          <Board
            author="Ana Maria"
            height={315}
            width={315}
            name="Espírito Ancestral"
            src="/images\obras\image-8.png"
          />
          <Board
            author="Amanda Brito"
            height={315}
            width={315}
            name="Melancolia Velada"
            src="/images\obras\image-9.png"
          />
          <Board
            author="Artur Nogueira"
            height={315}
            width={315}
            name="Laços Genéticos"
            src="/images\obras\image-10.png"
          />
          <Board
            author="Gustavo Alves"
            height={315}
            width={315}
            name="Inocência em Harmonia"
            src="/images\obras\image-11.png"
          />
        </div>
        <NextPageButton />
      </div>
    </>
  )
}
