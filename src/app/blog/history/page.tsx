'use client'

import { ArticlesPost } from '@/app/components/ArticlesPost/ArticlesPost'
import { Button } from '@/app/components/Button/ButtonTest'
import { Directory } from '@/app/components/Directory/Directory'
import { InterviewCard } from '@/app/components/InterviewCard/InterviewCard'
import { NextPageButton } from '@/app/components/NextPageButton/NextPageButton'
import { Tags } from '@/app/components/Tags/Tags'
import { ArrowCircleRight } from 'phosphor-react'

export default function History() {
  return (
    <>
      <div className="bg-[url('/images/history-banner.png')] bg-cover h-64 " />
      <div className="px-72 pt-7">
        <Directory path1="Blog" path2="Tutoriais" />
        <div className="space-y-1">
          <span>Encontre um tutorial</span>
          <div className="flex gap-5">
            <input
              placeholder="Nome do tutorial"
              className="border-gray300 border rounded-lg focus:outline-none p-3"
            />
            <div>
              <Button>
                <ArrowCircleRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
        <h1 className="text-title text-4xl pt-14 pb-16 font-bold">
          História do grafite de rua
        </h1>
        <div className="grid grid-cols-2">
          <InterviewCard />
          <InterviewCard />
          <InterviewCard />
          <InterviewCard />
          <InterviewCard />
          <InterviewCard />
        </div>
        <NextPageButton />
      </div>
    </>
  )
}
