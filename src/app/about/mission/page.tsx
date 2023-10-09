'use client'
import { Board } from '@/app/components/Board/Board'
import { Button } from '@/app/components/Button/ButtonTest'
import { Directory } from '@/app/components/Directory/Directory'
import { InterviewCard } from '@/app/components/InterviewCard/InterviewCard'
import Testiominals from '@/app/components/Testiominals/Testiominals'
import { UseRedirect } from '@/app/hooks/useRedirect'
import { ArrowRightCircle } from 'lucide-react'
import Image from 'next/image'

export default function Gallery() {
  const redirectTo = UseRedirect()

  return (
    <>
      <div className="bg-[url('/images/our-mission.png')] bg-cover pt-32 pb-72 ">
        <div className=" text-5xl bg-arrow  text-white font-bold flex justify-center items-center py-5">
          <span>nossa missão</span>
        </div>
      </div>

      <div className="px-72">
        <div className="pb-14 pt-8 ">
          <Directory path1="Sobre" path2="Nossa missão" />
        </div>
        <div className="flex gap-40 pb-24">
          <div>
            <h1 className=" text-Title text-3xl font-bold pb-16">
              Nossa missão
            </h1>
            <div>
              Nossa missão é promover, celebrar e preservar a arte de rua, dando
              voz e espaço aos artistas urbanos de todas as comunidades. Nosso
              propósito é aumentar a conscientização sobre a importância do
              grafite e da arte de rua como expressões culturais e sociais
              significativas, ajudando a transformar espaços públicos em
              galerias de arte ao ar livre.
            </div>
          </div>
          <Image width={663} height={196} alt="" src={'/images/about-1.png'} />
        </div>
        <div className="flex gap-40">
          <Image width={663} height={196} alt="" src={'/images/about-2.png'} />
          <div>
            <h1 className=" text-Title text-3xl font-bold pb-16">
              Nossa missão
            </h1>
            <div className="text-right font-md text-b">
              Nossa missão é promover, celebrar e preservar a arte de rua, dando
              voz e espaço aos artistas urbanos de todas as comunidades. Nosso
              propósito é aumentar a conscientização sobre a importância do
              grafite e da arte de rua como expressões culturais e sociais
              significativas, ajudando a transformar espaços públicos em
              galerias de arte ao ar livre.
            </div>
          </div>
        </div>

        <h1 className="text-title text-3xl flex justify-center pt-20 font-bold pb-24">
          Nossos valores
        </h1>
        <div className="flex gap-96 pb-28">
          <div className="flex flex-col">
            <h1 className="text-2xl text-brown pb-4">Creatividade</h1>
            <div className="text-md text-brown">
              Acreditamos na liberdade de expressão artística e valorizamos a
              originalidade e a inovação. Encorajamos artistas a explorarem sua
              criatividade e experimentarem novas técnicas e estilos.
            </div>
          </div>
          <Image width={310} height={196} alt="" src={'/images/about-3.png'} />
        </div>
        <div className="flex gap-96 pb-28">
          <div className="flex flex-col">
            <h1 className="text-2xl text-brown pb-4">Creatividade</h1>
            <div className="text-md text-brown">
              Acreditamos na liberdade de expressão artística e valorizamos a
              originalidade e a inovação. Encorajamos artistas a explorarem sua
              criatividade e experimentarem novas técnicas e estilos.
            </div>
          </div>
          <Image width={310} height={196} alt="" src={'/images/about-3.png'} />
        </div>
        <div className="flex gap-96 pb-28">
          <div className="flex flex-col">
            <h1 className="text-2xl text-brown pb-4">Creatividade</h1>
            <div className="text-md text-brown">
              Acreditamos na liberdade de expressão artística e valorizamos a
              originalidade e a inovação. Encorajamos artistas a explorarem sua
              criatividade e experimentarem novas técnicas e estilos.
            </div>
          </div>
          <Image width={310} height={196} alt="" src={'/images/about-3.png'} />
        </div>
        <div className="flex gap-96 pb-28">
          <div className="flex flex-col">
            <h1 className="text-2xl text-brown pb-4">Creatividade</h1>
            <div className="text-md text-brown">
              Acreditamos na liberdade de expressão artística e valorizamos a
              originalidade e a inovação. Encorajamos artistas a explorarem sua
              criatividade e experimentarem novas técnicas e estilos.
            </div>
          </div>
          <Image width={310} height={196} alt="" src={'/images/about-3.png'} />
        </div>
        <div className="flex gap-96 pb-28">
          <div className="flex flex-col">
            <h1 className="text-2xl text-brown pb-4">Creatividade</h1>
            <div className="text-md text-brown">
              Acreditamos na liberdade de expressão artística e valorizamos a
              originalidade e a inovação. Encorajamos artistas a explorarem sua
              criatividade e experimentarem novas técnicas e estilos.
            </div>
          </div>
          <Image width={310} height={196} alt="" src={'/images/about-3.png'} />
        </div>
      </div>
    </>
  )
}
