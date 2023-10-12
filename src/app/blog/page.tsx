'use client'
import { ArrowCircleRight } from 'phosphor-react'

import { Video } from '../components/Video/Video'
import { Button } from '../components/Button/ButtonTest'
import { Articles } from '../components/Articles/Articles'
import { Questions } from '../components/Questions/Questions'
import { UseRedirect } from '../hooks/useRedirect'

export default function Blog() {
  const RedirectTo = UseRedirect()
  return (
    <>
      <div className="bg-[url('/images/Blog-Banner.png')] bg-cover pt-32 pb-72 ">
        <div className=" text-5xl bg-arrow  text-white font-bold flex justify-center items-center py-5">
          <span>Blog da Arte Concreta</span>
        </div>
      </div>
      <div className="px-72">
        <div className="pt-8 flex justify-center text-Title text-5xl pb-12">
          História do grafite e a arte de rua
        </div>
        <div className="flex justify-center item-center">
          <Video />
        </div>
        <div className="flex justify-center pt-8">
          {' '}
          <Button variant="ghost" onClick={() => RedirectTo('blog/history')}>
            Saber mais sobre a história <ArrowCircleRight className="w-6 h-6" />
          </Button>
        </div>

        <div className="pt-28 space-y-12">
          <h1 className="text-5xl text-Title pb-6">Artigos</h1>
          <Articles
            src={'/images/Article-2.png'}
            title={'O que é arte urbana'}
            date={'30/05/2023'}
            author={'Júlia Albuquerue'}
            description={
              'É um tipo de arte encontrada nos espaços urbanos. Manifesta-se por meio de intervenções, performances, grafite, teatro, dentre outras.   Essas ações artísticas ocorrem em ambientes públicos e interagem diretamente com os indivíduos. Geralmente, usam como suporte os grandes centros urbanos, onde há intensa circulação de pessoas e diversidade cultural.   Dessa forma, os cidadãos acabam se deparando com a arte sem precisar ir até centros culturais.'
            }
          />
          <Articles
            src={'/images/Article-3.png'}
            title={'9 museus expecializados em gravuras'}
            date={'30/05/2023'}
            author={'Júlia Albuquerue'}
            description={
              'Museu é o local ideal para quem deseja viajar nas férias de forma cultural. Para sair do convencional nada melhor que visitar museus especializados em gravuras ou estampas. Nós montamos um pequeno circuito dedicado a arte da impressão gráfica.     Podemos começar por um museu bem acessível, um pouco longe para muitos, mas bem mais perto do que os outros da lista.'
            }
          />
          <Articles
            src={'/images/Article-1.png'}
            title={'10 artistas que você deve seguir'}
            date={'30/05/2023'}
            author={'Júlia Albuquerue'}
            description={
              'De norte a sul e de leste a oeste, uma coisa que você não deixará de descobrir em todo o Brasil em quase todas as ruas, há tags, desenhos, graffitis e pinturas nas paredes.       O Brasil é conhecido mundialmente pela sua street art. Nas ruas brasileiras podemos encontrar tags, desenhos, grafites, pinturas de parede, lambe-lambe, stickers, é uma infinidade de intervenções urbanas provocadas por artistas das mais variadas técnicas.'
            }
          />
        </div>
        <Button variant="articles" onClick={() => RedirectTo('blog/articles')}>
          Ler mais
          <ArrowCircleRight
            className="h-6 w-6 fill  text-black fill"
            weight="fill"
          />
        </Button>
        <div className="pt-28 space-y-12">
          <h1 className="text-5xl text-Title pb-6">Dicas e Totoriais</h1>
          <Articles
            src={'/images/Article-4.png'}
            title={'O que é arte urbana'}
            date={'30/05/2023'}
            author={'Júlia Albuquerue'}
            description={
              'Este tutorial abrangente guiará você, passo a passo, através do complexo e vibrante mundo da arte de rua. Desde o planejamento e design até técnicas e dicas de segurança, estamos aqui para ajudá-lo a expressar a sua voz através da arte mais democrática que existe.'
            }
          />
          <Articles
            src={'/images/Article-5.png'}
            title={'Expressando-se na cidade'}
            date={'30/05/2023'}
            author={'Ana Ferreira'}
            description={
              'Nesta postagem de blog, compartilharemos dicas valiosas para artistas emergentes que querem mergulhar no mundo vibrante e expressivo da arte de rua. Desde a escolha do material até o desenvolvimento de seu estilo único, temos tudo o que você precisa para começar.'
            }
          />
        </div>
        <Button variant="articles" onClick={() => RedirectTo('blog/tutorials')}>
          Ver todos os tutoriais
          <ArrowCircleRight
            className="h-6 w-6 fill  text-black fill"
            weight="fill"
          />
        </Button>

        <div className="pb-12 pt-16 flex flex-col">
          <h1 className="  text-Title text-5xl  font-bold">
            Perguntas frequentes
          </h1>
          <Questions question="O que é a Arte Concreta e como ela se relaciona com a arte de rua?" />
          <Questions question="Quais são alguns dos artistas de rua mais influentes que eu deveria conhecer?" />
          <Questions question="Como a arte de rua é regulamentada? É sempre legal ou pode ser considerada vandalismo?" />
          <Questions question="Como posso começar a criar minha própria arte de rua?" />
          <Questions question="O que é um mural e como ele se diferencia do grafite?" />
          <Questions question="Como a arte de rua pode impactar a comunidade local?" />
          <Questions question="Existe algum mapa ou guia para encontrar arte de rua em minha cidade?" />
        </div>
        <div className="pb-16">
          <Button variant="ghost">
            Ver todas as perguntas <ArrowCircleRight className="w-6 h-6 " />
          </Button>
        </div>
      </div>
    </>
  )
}
