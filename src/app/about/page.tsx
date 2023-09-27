'use client'
import Image from 'next/image'
import { AboutMessages } from '../components/About/AboutMessages'
import { Button } from '../components/Button/ButtonTest'
import { ArrowCircleRight } from 'phosphor-react'
import { ArtistsBoard } from '../components/ArtistBoard/ArtistBoard'

export default function About() {
  return (
    <>
      <div className="bg-[url('/images/about-banner.png')] bg-cover pt-32 pb-72 ">
        <div className=" text-5xl bg-arrow  opacity-80 text-white font-bold flex justify-center items-center py-5">
          <span>Conheça a arte concreta</span>
        </div>
      </div>

      <div className="px-72">
        <div className="flex gap-6 pt-10">
          <AboutMessages
            title={'Inclusão e representatividade'}
            src={'/images\\inclusion.svg'}
            description={
              ' A Arte Concreta valoriza a inclusão e a representatividade de artistas afro-americanos e latinos, buscando oferecer um espaço que destaque e celebre o seu trabalho. Este valor se traduz em nossos esforços para divulgar e apoiar artistas de todas as origens, reconhecendo o valor cultural e artístico de suas obras.'
            }
            width={89}
            height={89}
          />
          <AboutMessages
            title={'Comunicação e Colaboração'}
            src={'/images\\Reunion.svg'}
            description={
              'Acreditamos no poder da comunidade e na importância da colaboração para a arte de rua. O projeto Arte Concreta busca criar um espaço onde artistas possam se conectar, compartilhar suas obras e ideias, e aprender uns com os outros.'
            }
            width={89}
            height={89}
          />
          <AboutMessages
            title={'Educação e Conscientização'}
            src={'/images\\Education.svg'}
            description={
              'O projeto Arte Concreta se compromete a educar o público sobre a história e o valor da arte de rua, bem como os problemas sociais e políticos que essa arte frequentemente destaca.'
            }
            width={53}
            height={53}
          />
          <AboutMessages
            title={'Autenticidade e Criatividade'}
            src={'/images\\creativity.svg'}
            description={
              'Valorizamos a autenticidade e a criatividade na arte de rua, e nos esforçamos para criar um espaço que incentive a expressão artística original e a experimentação.'
            }
            width={58}
            height={58}
          />
        </div>
        <div className="flex gap-28">
          <Image
            src={'/images\\About-image1.png'}
            alt=""
            width={543}
            height={362}
          />
          <div>
            <h1 className="text-title text-4xl pb-20">Nossa missão</h1>
            <span className="text-brown text-md pb-9 text-justify">
              Nossa missão é promover, celebrar e preservar a arte de rua, dando
              voz e espaço aos artistas urbanos de todas as comunidades. Nosso
              propósito é aumentar a conscientização sobre a importância do
              grafite e da arte de rua como expressões culturais e sociais
              significativas, ajudando a transformar espaços públicos em
              galerias de arte ao ar livre.
            </span>
            <Button variant="ghost">
              Saber mais sobre a arte concreta{' '}
              <ArrowCircleRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
        <div className="pt-10 pb-14">
          <h1 className="text-Title text-4xl pb-11">Nossa Equipe</h1>
          <p className="text-brown text-md pb-8 w-96">
            Nossa equipe é composta por artistas, acadêmicos, curadores e
            apaixonados pela arte de rua. Nós compartilhamos um compromisso com
            a celebração da arte de rua e acreditamos no seu poder de inspirar,
            provocar e conectar pessoas de todas as origens.
          </p>
          <div className="flex gap-5">
            <ArtistsBoard
              src={'Larrisa.png'}
              author={'Larissa Dias'}
              city={'São Paulo/SP'}
            />
            <ArtistsBoard
              src={'rincardo.png'}
              author={'Ricardo'}
              city={'Fortaleza/CE'}
            />
            <ArtistsBoard
              src={'Bruna.png'}
              author={'Bruna'}
              city={'Salvador/BA'}
            />
            <ArtistsBoard
              src={'Luna.png'}
              author={'Luna'}
              city={'São Paulo/SP'}
            />
          </div>
        </div>

        <div>
          <h1 className="text-title text-4xl pb-12 flex justify-center">
            Fale com a gente
          </h1>
          <p className="text-brown font-md pb-5 text-center ">
            Adoraríamos ouvir de você, seja você um artista de rua procurando
            por apoio, um membro
            <br />
            da comunidade interessado em aprender mais, ou alguém que gostaria
            de apoiar nosso projeto.
            <br />
            Você pode nos alcançar pelo email arteconcreta@gmail.com ou através
            do formulário de contato a seguir.
          </p>
          <form>
            <div>
              <div>Nome</div>
              <input />
            </div>
            <div>
              <div>Email</div>
              <input />
            </div>
            <div>
              <div>Mensagem</div>
              <textarea />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
