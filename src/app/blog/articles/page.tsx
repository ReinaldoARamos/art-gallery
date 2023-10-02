'use client'

import { ArticlesPost } from '@/app/components/ArticlesPost/ArticlesPost'
import { Directory } from '@/app/components/Directory/Directory'

export default function Articles() {
  return (
    <>
      <div className="bg-[url('/images/artist-banner.png')] bg-cover h-64 " />
      <div className="px-72 pt-7">
        <Directory path1="Blog" path2="Artigos" />

        <h1 className="text-title text-4xl pt-14 pb-16 font-bold">Artigos</h1>
        <div className="flex gap-5">
          <div className="space-y-12">
            <ArticlesPost
              src={'/images/post-1.png'}
              author={'Júlia Albuquerque'}
              title={'10 artistas que voce deveria seguir'}
              date={'30/05/2023'}
              article={
                'De norte a sul e de leste a oeste, uma coisa que você não deixará de descobrir em todo o Brasil em quase todas as ruas, há tags, desenhos, graffitis e pinturas nas paredes. O Brasil é conhecido mundialmente pela sua street art. Nas ruas brasileiras podemos encontrar tags, desenhos, grafites, pinturas de parede, lambe-lambe, stickers, é uma infinidade de intervenções urbanas provocadas por artistas das mais variadas técnicas.'
              }
            />
            <ArticlesPost
              src={'/images/post-2.png'}
              author={'Júlia Albuquerque'}
              title={'O que é arte Urbana?'}
              date={'30/05/2023'}
              article={
                'É um tipo de arte encontrada nos espaços urbanos. Manifesta-se por meio de intervenções, performances, grafite, teatro, dentre outras. Essas ações artísticas ocorrem em ambientes públicos e interagem diretamente com os indivíduos. Geralmente, usam como suporte os grandes centros urbanos, onde há intensa circulação de pessoas e diversidade cultural. Dessa forma, os cidadãos acabam se deparando com a arte sem precisar ir até centros culturais.'
              }
            />
            <ArticlesPost
              src={'/images/post-5.png'}
              author={'Júlia Albuquerque'}
              title={'9 museus especializados em gravuras'}
              date={'30/05/2023'}
              article={
                'Museu é o local ideal para quem deseja viajar nas férias de forma cultural. Para sair do convencional nada melhor que visitar museus especializados em gravuras ou estampas. Nós montamos um pequeno circuito dedicado a arte da impressão gráfica. Podemos começar por um museu bem acessível, um pouco longe para muitos, mas bem mais perto do que os outros da lista.'
              }
            />
          </div>
          <div>ola</div>
        </div>
      </div>
    </>
  )
}
