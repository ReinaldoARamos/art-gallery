'use client'
import Image from 'next/image'
import { Button } from '../components/Button/ButtonTest'
import { ArrowCircleRight } from 'phosphor-react'
import { Board } from '../components/Board/Board'
import { EventBoard } from '../components/EventsBoard/EventsBoard'
import { ArrowRightCircle } from 'lucide-react'
export default function Events() {
  return (
    <>
      <div className="px-72 pt-14">
        <div className="flex gap-28 pb-24">
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
        <div className="pb-14 pt-8 font-bold text-title flex gap-3 justify-center items-center text-4xl  before:h-0.5 before:bg-gray before:w-96 after:h-0.5 after:bg-gray after:w-96 ">
          Eventos
        </div>
        <div className="text-3xl text-gray300 flex justify-center">
          Exposições
        </div>
        <div className="flex gap-5 pt-8">
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
        </div>
        <div className="flex justify-center pt-6 group">
          <Button variant="ghost">
            Ver Outros Eventos <ArrowRightCircle className="h-6 w-6  " />
          </Button>
        </div>
        <div className="text-3xl text-gray300 flex justify-center pt-8">
          Workshops
        </div>
        <div className="flex gap-5 pt-8">
          <EventBoard
            src="/images\workshop-5.png"
            width={315}
            height={315}
            date="20 de agosto de 2023"
            hour="13:00 ás 20:00"
            local="Parque do Ibirapuera, São Paulo"
            name="A linguagem dos murais"
          />
          <EventBoard
            src="/images\workshop-6.png"
            width={315}
            height={315}
            date="02 de agosto de 2023"
            hour="12:00 ás 19:00"
            local="Vila Madalena, São Paulo"
            name="Stencil e Spray"
          />
          <EventBoard
            src="/images\workshop-7.png"
            width={315}
            height={315}
            date="5 de agosto de 2023"
            hour="15:00 ás 17:00"
            local="Rua do Bom Jesus, Recife"
            name="A arte do lambe lambe"
          />
          <EventBoard
            src="/images\workshop-8.png"
            width={315}
            height={315}
            date="12 de agosto de 2023"
            hour="10:00 ás 15:00"
            local="Complexo da Maré, Rio de Janeiro"
            name="Pixação e poesia"
          />
        </div>
        <div className="flex justify-center pt-6 group">
          <Button variant="ghost">
            Ver Outros Workshops <ArrowRightCircle className="h-6 w-6  " />
          </Button>
        </div>
        <div className="text-3xl text-gray300 flex justify-center">
          Festivais
        </div>
        <div className="flex gap-5 pt-8">
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
        </div>
        <div className="flex justify-center pt-6 group">
          <Button variant="ghost">
            Ver Outros Festivais <ArrowRightCircle className="h-6 w-6  " />
          </Button>
        </div>
      </div>
      <div className="bg-base flex flex-col justify-center items-center  py-20  ">
        <div className="flex flex-col justify-between">
          <h1 className="text-white text-5xl font-bold">
            Divulgue aqui o seu evento
          </h1>
          <div className="flex justify-between pt-10">
            <div>aaa</div>
            <div>aaa</div>
          </div>
          <div>oi</div>
        </div>
      </div>
    </>
  )
}
