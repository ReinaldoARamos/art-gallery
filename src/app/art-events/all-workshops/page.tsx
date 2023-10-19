'use client'
import { Directory } from '@/app/components/Directory/Directory'
import { EventBoard } from '@/app/components/EventsBoard/EventsBoard'
import { NextPageButton } from '@/app/components/NextPageButton/NextPageButton'
import { SearchBar } from '@/app/components/Searchbar/SearchBar'

export default function AllWorkshops() {
  return (
    <>
      <div className="bg-[url('/images/workshop-banner.png')] bg-cover h-64 " />
      <div className="lg:px-72 px-6 pt-7">
        <Directory path1={'Eventos'} path2={'Todos os workshops'} />
        <SearchBar
          input1={'Encontre um Workshop'}
          input2={'Filtar por local'}
          input3={'Filtar pro data'}
          placeholder1={'Nome do worksop'}
          placeholder2={'Selecione um local'}
          placeholder3={'Filtra pro data'}
        />
        <h1 className="pt-8 pb-11 text-Title text-4xl">Todos os Workshops</h1>
        <div className="lg:grid lg:grid-cols-4 flex flex-col pb-9">
          <EventBoard
            src="/images\workshop-10.png"
            width={315}
            height={315}
            date="20 de agosto de 2023"
            hour="13:00 ás 20:00"
            local="Parque do Ibirapuera, São Paulo"
            name="A Linguagem dos Murais"
          />
          <EventBoard
            src="/images\workshop-11.png"
            width={315}
            height={315}
            date="02 de agosto de 2023"
            hour="12:00 ás 19:00"
            local="Vila Madalena, São Paulo"
            name="Stencil e Spray"
          />
          <EventBoard
            src="/images\workshop-17.png"
            width={315}
            height={315}
            date="5 de agosto de 2023"
            hour="15:00 ás 17:00"
            local="Rua do Bom Jesus, Recife"
            name=" Arte do Lambe-Lambe"
          />
          <EventBoard
            src="/images\workshop-12.png"
            width={315}
            height={315}
            date="12 de agosto de 2023"
            hour="10:00 ás 15:00"
            local="Complexo da Maré, Rio de Janeiro"
            name="Pixação à Poesia"
          />
          <EventBoard
            src="/images\workshop-13.png"
            width={315}
            height={315}
            date="12 de agosto de 2023"
            hour="10:00 ás 15:00"
            local="Complexo da Maré, Rio de Janeiro"
            name="Muros que falam"
          />
          <EventBoard
            src="/images\workshop-14.png"
            width={315}
            height={315}
            date="12 de agosto de 2023"
            hour="10:00 ás 15:00"
            local="Complexo da Maré, Rio de Janeiro"
            name="Palavras nas Paredes"
          />
          <EventBoard
            src="/images\workshop-15.png"
            width={315}
            height={315}
            date="12 de agosto de 2023"
            hour="10:00 ás 15:00"
            local="Complexo da Maré, Rio de Janeiro"
            name="Street Art 360"
          />
          <EventBoard
            src="/images\workshop-16.png"
            width={315}
            height={315}
            date="12 de agosto de 2023"
            hour="10:00 ás 15:00"
            local="Complexo da Maré, Rio de Janeiro"
            name="Luz e Sombra na Arte Urbana"
          />
        </div>
        <NextPageButton />
      </div>
    </>
  )
}
