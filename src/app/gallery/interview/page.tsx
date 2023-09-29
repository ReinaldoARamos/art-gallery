'use client'
import { Directory } from '@/app/components/Directory/Directory'
import { InterviewCard } from '@/app/components/InterviewCard/InterviewCard'
import { NextPageButton } from '@/app/components/NextPageButton/NextPageButton'
import { SearchBar } from '@/app/components/Searchbar/SearchBar'
import Image from 'next/image'
export default function Intervirw() {
  return (
    <>
      <div className="bg-[url('/images/inteview-banner.png')] bg-cover h-64 "></div>
      <div className="px-72 pt-7 ">
        <Directory path1="Galeria" path2="Todas as entrevistas" />
        <SearchBar
          input1={'Selecione uma entrevista'}
          input2={'Filtrar por artista'}
          input3={'Filtrar por data'}
          placeholder1={'Nome da entrevista'}
          placeholder2={'Selecione um artista'}
          placeholder3={'Selecione uma data'}
        />
        <div className="pt-14">
          <h1 className="text-title font-bold text-4xl pb-8">
            Todas as entrevistas
          </h1>
          <div className="grid grid-cols-2 pb-24">
            <InterviewCard />
            <InterviewCard />
            <InterviewCard />
            <InterviewCard />
            <InterviewCard />
            <InterviewCard />
          </div>
          <NextPageButton />
        </div>
      </div>
    </>
  )
}
