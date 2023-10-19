'use client'
import { ArtistsBoard } from '@/app/components/ArtistBoard/ArtistBoard'
import { Directory } from '@/app/components/Directory/Directory'
import { NextPageButton } from '@/app/components/NextPageButton/NextPageButton'
import { SearchBar } from '@/app/components/Searchbar/SearchBar'

export default function AllArtists() {
  return (
    <>
      <div className="bg-[url('/images/artist-banner.png')] bg-cover h-64 "></div>
      <div className="lg:px-72 px-6 pt-7">
        <Directory path1="Artistas" path2=" Todos os artistas" />
        <SearchBar
          input1="Encontre um artista"
          placeholder1="Nome do artista"
          input2="Filtrar por local"
          placeholder2="Selecine um local"
          input3="Filtar por estilo"
          placeholder3="Selecione um estilo"
        />
        <h1 className="text-title text-4xl flex justify-center lg:justify-normal  font-bold py-14 ">
          Todos os artistas
        </h1>
        <div className="lg:grid lg:grid-cols-3 flex flex-col">
          <ArtistsBoard
            src="image-26.png"
            author="Ana Maria"
            city="São Paulo/SP"
          />
          <ArtistsBoard
            src="image-27.png"
            author="Carlos Silva"
            city="Rio de Janeiro/RJ"
          />
          <ArtistsBoard
            src="image-28.png"
            author="Mariana Oliveira"
            city="Belo Horizonte/MG"
          />
          <ArtistsBoard
            src="image-30.png"
            author="Lucas Pereira"
            city="Curitiba/PR"
          />
          <ArtistsBoard
            src="image-29.png"
            author="Julia Costa"
            city="Porto Alegre/RS"
          />
          <ArtistsBoard
            src="image-39.png"
            author="Diego Alves"
            city="Fortaleza/CE"
          />
          <ArtistsBoard
            src="image-37.png"
            author="Camila Lima"
            city="Salvador/BA"
          />
          <ArtistsBoard
            src="image-33.png"
            author="Fernando Souza"
            city="Recife/PE"
          />
          <ArtistsBoard
            src="image-34.png"
            author="Bianca Oliveira"
            city="Brasília/DF"
          />
          <ArtistsBoard
            src="image-38.png"
            author="Rodrigo Santos"
            city="Manaus/AM"
          />
          <ArtistsBoard
            src="image-31.png"
            author="Cristina Almeida"
            city="Belém/PA"
          />
          <ArtistsBoard
            src="image-25.png"
            author="Rafael Pereira"
            city="Vitória/ES"
          />
        </div>
        <NextPageButton />
      </div>
    </>
  )
}
