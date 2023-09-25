'use client'
import Image from 'next/image'
import { Button } from '../components/Button/ButtonTest'
import { ArrowCircleRight } from 'phosphor-react'
export default function Events() {
  return (
    <div className="px-72 pt-14">
      <div className="flex gap-28">
        <Image src="/images\image-36.png" alt="" width={540} height={375} />
        <div className="flex flex-col space-y-6 ">
          <h1 className="text-Title text-5xl font-bold">
            Conexão Concreta: Simpósio Internacional de Arte Urbana
          </h1>
          <span className="text-md text-brown text-justify">
            No Conexão Concreta, a arte vai muito além do concreto. Os
            participantes terão a oportunidade de se engajar em diálogos
            críticos sobre a influência da arte urbana na sociedade
            contemporânea, seu papel na transformação de espaços públicos e o
            impacto de novas tecnologias e mídias na prática da arte urbana.
          </span>
          <div>
            <Button>
              Saber mais sobre esse evento{' '}
              <ArrowCircleRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
