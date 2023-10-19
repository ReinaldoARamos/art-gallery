'use client'

import { Directory } from '@/app/components/Directory/Directory'

export default function Post() {
  return (
    <>
      <div className="bg-[url('/images/tutorial-banner.png')] bg-cover h-64 " />
      <div className="lg:px-72 px-6">
        <div className="py-7 pb-36">
          <Directory path1="Blog" path2="O que é arte urbana" />
        </div>
        <h1 className="text-title font-bold text-3xl flex justify-center pb-24">
          O que é arte urbana
        </h1>
        <div>
          <div className="flex justify-center w-full  pb-16">
            <div className="flex justify-center  text-justify  w-[62rem] ">
              A arte de rua, muitas vezes vista como mero vandalismo, tem se
              consolidado como uma forma legítima e valiosa de expressão
              artística. Sendo utilizada tanto para embelezar as cidades como
              para provocar reflexões sobre questões sociais, políticas e
              culturais, a arte de rua tem se tornado um componente essencial do
              tecido urbano moderno. O impacto da arte de rua é multifacetado.
              Em primeiro lugar, ela transforma o ambiente urbano, conferindo
              cor e vitalidade a locais antes cinzentos e sem vida. Ao utilizar
              prédios, muros e calçadas como telas, os artistas de rua são
              capazes de trazer beleza e criatividade a cada esquina, fazendo
              com que os espaços públicos se tornem galerias de arte ao ar
              livre. No entanto, a arte de rua não é apenas uma forma de
              embelezamento urbano. Em muitos casos, ela é também uma poderosa
              ferramenta de comentário social e político. Os artistas de rua
              frequentemente utilizam suas obras para expressar opiniões,
              questionar o status quo e gerar conscientização sobre questões
              importantes, desde problemas locais até crises globais. Através do
              seu caráter democrático e acessível, a arte de rua também desafia
              a noção tradicional de que a arte é algo que pertence apenas a
              museus e galerias, acessível apenas à elite. Ao contrário, a arte
              de rua é acessível a todos, permitindo que pessoas de todas as
              classes sociais tenham a oportunidade de apreciar, interagir e se
              envolver com a arte em seu dia a dia. Além disso, a arte de rua
              pode ter um impacto significativo na identidade e na cultura de
              uma cidade. Ela reflete a diversidade, a energia e o espírito de
              uma comunidade, ajudando a criar um senso de lugar e de
              pertencimento. Cidades ao redor do mundo, de Berlim a Bogotá, de
              Nova York a Melbourne, reconhecem o valor da arte de rua como uma
              parte vital de sua identidade cultural. Em conclusão, a arte de
              rua é mais do que uma simples expressão de criatividade
              individual. Ela é uma forma de arte coletiva e colaborativa que
              tem o poder de transformar cidades, inspirar comunidades e
              provocar conversas. À medida que avançamos para o futuro, é
              essencial que continuemos a valorizar e a apoiar a arte de rua
              como uma parte essencial de nossa paisagem urbana.
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
