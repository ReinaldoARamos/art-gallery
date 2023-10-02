'use client'
import { Directory } from '@/app/components/Directory/Directory'
import { EventBoard } from '@/app/components/EventsBoard/EventsBoard'
import { NextPageButton } from '@/app/components/NextPageButton/NextPageButton'
import { SearchBar } from '@/app/components/Searchbar/SearchBar'

export default function AllEvents() {
  return (
    <>
      <div className="bg-[url('/images/inteview-banner.png')] bg-cover h-64 " />
      <div className="px-72 pt-7">
        <Directory path1={'Eventos'} path2={'Todos os eventos'} />
        <SearchBar
          input1={'Encontre um festival'}
          input2={'Filtar por local'}
          input3={'Filtar pro data'}
          placeholder1={'Nome do festival'}
          placeholder2={'Selecione um local'}
          placeholder3={'Filtra pro data'}
        />
        <h1 className="pt-8 pb-11 text-Title text-4xl">Todos os festivais</h1>
        <div className="grid grid-cols-4 pb-9">
          <EventBoard
            src="/images\festival-1.png"
            width={315}
            height={315}
            date="20 de agosto de 2023"
            hour="13:00 ás 20:00"
            local="Parque do Ibirapuera, São Paulo"
            name="Arte em movimento"
          />
          <EventBoard
            src="/images\festival-2.png"
            width={315}
            height={315}
            date="02 de agosto de 2023"
            hour="12:00 ás 19:00"
            local="Vila Madalena, São Paulo"
            name="Salvador  Urbano"
          />
          <EventBoard
            src="/images\festival-3.png"
            width={315}
            height={315}
            date="5 de agosto de 2023"
            hour="15:00 ás 17:00"
            local="Rua do Bom Jesus, Recife"
            name="Arte de Rua na Selva"
          />
          <EventBoard
            src="/images\festival-4.png"
            width={315}
            height={315}
            date="12 de agosto de 2023"
            hour="10:00 ás 15:00"
            local="Complexo da Maré, Rio de Janeiro"
            name="Cores do Morro"
          />
          <EventBoard
            src="/images\event-1.png"
            width={315}
            height={315}
            date="12 de agosto de 2023"
            hour="10:00 ás 15:00"
            local="Complexo da Maré, Rio de Janeiro"
            name="Revelando talentos urbanos"
          />
          <EventBoard
            src="/images\event-2.png"
            width={315}
            height={315}
            date="12 de agosto de 2023"
            hour="10:00 ás 15:00"
            local="Complexo da Maré, Rio de Janeiro"
            name="Arte Livre SP"
          />
          <EventBoard
            src="/images\event-3.png"
            width={315}
            height={315}
            date="12 de agosto de 2023"
            hour="10:00 ás 15:00"
            local="Complexo da Maré, Rio de Janeiro"
            name="BH Arte Urbana"
          />
          <EventBoard
            src="/images\event-4.png"
            width={315}
            height={315}
            date="12 de agosto de 2023"
            hour="10:00 ás 15:00"
            local="Complexo da Maré, Rio de Janeiro"
            name="Graffiti Fest Fortaleza"
          />
        </div>
        <NextPageButton />
      </div>
    </>
  )
}
