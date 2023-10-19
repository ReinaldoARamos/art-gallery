'use client'
import { Directory } from '@/app/components/Directory/Directory'
import { EventBoard } from '@/app/components/EventsBoard/EventsBoard'
import { NextPageButton } from '@/app/components/NextPageButton/NextPageButton'
import { SearchBar } from '@/app/components/Searchbar/SearchBar'

export default function AllWorkshops() {
  return (
    <>
      <div className="bg-[url('/images/exposition-banner.png')]  h-64  object-cover" />
      <div className="lg:px-72 px-6 pt-7">
        <Directory path1={'Eventos'} path2={'Todos os workshops'} />
        <SearchBar
          input1={'Encontre uma exposição'}
          input2={'Filtar por local'}
          input3={'Filtar pro data'}
          placeholder1={'Nome da exposição'}
          placeholder2={'Selecione um local'}
          placeholder3={'Filtra pro data'}
        />
        <h1 className="pt-8 pb-11 text-Title text-4xl">Todos as exposições</h1>
        <div className="lg:grid lg:grid-cols-4  flex flex-col pb-9">
          <EventBoard
            src="/images\workshop-1.png"
            width={315}
            height={315}
            date="20 de agosto de 2023"
            hour="13:00 ás 20:00"
            local="Parque do Ibirapuera, São Paulo"
            name="Ritmos da Rua"
          />
          <EventBoard
            src="/images\workshop-2.png"
            width={315}
            height={315}
            date="02 de agosto de 2023"
            hour="12:00 ás 19:00"
            local="Vila Madalena, São Paulo"
            name="Grafítie Galáctico"
          />
          <EventBoard
            src="/images\workshop-3.png"
            width={315}
            height={315}
            date="5 de agosto de 2023"
            hour="15:00 ás 17:00"
            local="Rua do Bom Jesus, Recife"
            name="Pinceladas Nordestinas"
          />
          <EventBoard
            src="/images\workshop-4.png"
            width={315}
            height={315}
            date="12 de agosto de 2023"
            hour="10:00 ás 15:00"
            local="Complexo da Maré, Rio de Janeiro"
            name="Concrete Canvas"
          />
          <EventBoard
            src="/images\exposition-1.png"
            width={315}
            height={315}
            date="20 de agosto de 2023"
            hour="13:00 ás 20:00"
            local="Parque do Ibirapuera, São Paulo"
            name="Arte no Asfalto"
          />
          <EventBoard
            src="/images\exposition-2.png"
            width={315}
            height={315}
            date="02 de agosto de 2023"
            hour="12:00 ás 19:00"
            local="Vila Madalena, São Paulo"
            name="As Mãos que Pintam a Cidade"
          />
          <EventBoard
            src="/images\exposition-3.png"
            width={315}
            height={315}
            date="5 de agosto de 2023"
            hour="15:00 ás 17:00"
            local="Rua do Bom Jesus, Recife"
            name="Arte que Ecoa"
          />
          <EventBoard
            src="/images\exposition-4.png"
            width={315}
            height={315}
            date="12 de agosto de 2023"
            hour="10:00 ás 15:00"
            local="Complexo da Maré, Rio de Janeiro"
            name="Pavimento Poético"
          />
        </div>
        <NextPageButton />
      </div>
    </>
  )
}
