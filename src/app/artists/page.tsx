'use client'
import Image from 'next/image'
import { ArtistsBoard } from '../components/ArtistBoard/ArtistBoard'

import { ArrowRightCircle } from 'lucide-react'
import { Tags } from '../components/Tags/Tags'

export default function Artists() {
  return (
    <>
      <div className="flex flex-col pt-12 space-y-12 justify-center items-center pb-24 ">
        <h1 className="text-Title font-bold text-heading">
          Conheça nossos artistas
        </h1>
        <div className="flex gap-16">
          <Image src="/images\image-22.png" alt="" width={315} height={315} />
          <Image src="/images\image-23.png" alt="" width={315} height={315} />
          <Image src="/images\image-24.png" alt="" width={315} height={315} />
        </div>
      </div>
      <div className="text-Title text-3xl px-72 pb-9">Artistas em destaque</div>
      <div className="px-72 flex  gap-5">
        <div className="flex flex-col">
          <div className="flex gap-4 ">
            <ArtistsBoard
              author="Ana Maria Silva"
              city="Belo Horizonte/MG"
              src="artist.png"
            />
            <ArtistsBoard
              author="Gustavo Alves"
              city="Florianópolis/SC"
              src="Image.png"
            />
          </div>
          <div className="text-Title text-3xl">Artistas Novos</div>
          <div className="flex gap-4 pt-9">
            <ArtistsBoard
              author="DIégo Pires"
              city="Blumenau/SC"
              src="image-25.png"
            />
            <ArtistsBoard
              author="Priscilla Sousa"
              city="Montes Claros/Mg"
              src="image-26.png"
            />
          </div>
          <div className="text-Title text-3xl">Outros Artistas</div>
          <div className="grid grid-cols-2 gap-4 pt-9">
            <ArtistsBoard
              author="Bruna Paivas"
              city="Manaus/Mg"
              src="image-27.png"
            />
            <ArtistsBoard
              author="Amanda Brito"
              city="Floriano/PI"
              src="image-28.png"
            />
            <ArtistsBoard
              author="Diégo Pires"
              city="Petrópolis/RJ"
              src="image-29.png"
            />
            <ArtistsBoard
              author="Eduardo Pinho"
              city="Curitiba/PR"
              src="image-30.png"
            />
          </div>
          <button className=" flex justify-center item-center pt-8 pr-2">
            <div className="flex gap-3 items-center text-md ">
              Ver Todos os Artistas <ArrowRightCircle className="h-5 w-6" />
            </div>
          </button>
        </div>
        <div className="flex flex-col ">
          <div>Encontre um artista</div>
          <div className="flex  gap-5 pb-9 pt-1.5">
            <input
              placeholder="Nome do artista "
              className="border border-zinc-400 w-80 "
            />
            <button className="bg-base py-4 px-9 rounded-full ">
              <ArrowRightCircle color="white" width={20} height={20} />
            </button>
          </div>
          <div className="space-y-6">
            <div className="flex flex-col py-6 pl-6 pr-56 border border-gray300 rounded-md pb-6">
              <div className="pb-4 text-xl text-Title font-bold ">
                Arte de rua
              </div>
              <div className="flex flex-col space-y-2">
                <Tags label="Grafite Clássico" />
                <Tags label="Arte de Stêncil" />
                <Tags label="Pôster" />
                <Tags label="Arte de adesivo" />
                <Tags label="Instalações de rua" />
                <Tags label="Arte Mural" />
                <Tags label="Esculturas de Rua" />
                <Tags label="Yarn Bombing" />
              </div>
            </div>
            <div className="flex flex-col py-6 pl-6 pr-56 border border-gray300 rounded-md -">
              <div className="pb-4 text-xl text-Title font-bold ">
                Locais populares
              </div>
              <div className="flex flex-col space-y-4">
                <Tags label="Rio de Janeiro" />
                <Tags label="São Paulo" />
                <Tags label="Curitiba" />
                <Tags label="Florianópolis" />
                <Tags label="Belo Horizonte" />
                <Tags label="Vitória" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[url('/images/bg.jpg')] bg-cover mt-16">
        <div className="flex justify-center items-center pt-20 pb-24">
          <form>
            <h1 className=" text-white text-3xl pb-3 font-light">
              Quero divulgar minhas obras aqui
            </h1>

            <div className="flex flex-col pt-8 ">
              <div className="flex gap-28">
                <div>
                  <span className="pb-1 text-zinc-50 font-semibold">
                    Seu email
                  </span>
                  <div className="pb-10">
                    <input
                      type="email"
                      placeholder="Seu melhor email"
                      className="w-80 border border-zinc-100 rounded-md h-12 placeholder:pl-3 placeholder: text-gray200"
                    />
                  </div>
                </div>
                <div>
                  <span className="pb-1 text-zinc-50 font-semibold">
                    Cidade/UF
                  </span>
                  <div className="pb-10">
                    <input
                      type="text"
                      placeholder="Cidade/UF"
                      className="w-80 border border-zinc-100 rounded-md h-12 placeholder:pl-3 placeholder: text-gray200"
                    />
                  </div>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className=" bg-white text-base rounded-full flex justify-center items-center gap-2 px-12 py-4 font-bold"
            >
              {' '}
              Quero me manter atualizado <ArrowRightCircle />
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
