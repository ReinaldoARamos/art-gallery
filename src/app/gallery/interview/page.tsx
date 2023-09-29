'use client'
import { Directory } from '@/app/components/Directory/Directory'
import { InterviewCard } from '@/app/components/InterviewCard/InterviewCard'
import { NextPageButton } from '@/app/components/NextPageButton/NextPageButton'
import { SearchBar } from '@/app/components/Searchbar/SearchBar'

export default function Intervirw() {
  return (
    <div className="px-72 pt-7 ">
      <Directory />
      <SearchBar />
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
  )
}
