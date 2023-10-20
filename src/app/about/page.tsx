'use client'
import Image from 'next/image'
import { AboutMessages } from '../components/About/AboutMessages'
import { Button } from '../components/Button/ButtonTest'
import { ArrowCircleRight } from 'phosphor-react'
import { ArtistsBoard } from '../components/ArtistBoard/ArtistBoard'
import BoardSlider from '../components/BoardSlider/BoardSlider'

export default function About() {
  const images = ['Larrisa.png', 'rincardo.png', 'Bruna.png', 'Luna.png']
  return (
    <>
      <div className="bg-[url('/images/about-banner.png')] bg-cover pt-32 pb-72 ">
        <div className=" text-5xl bg-arrow  opacity-80 text-white font-bold flex justify-center items-center py-5">
          <span>Conheça a arte concreta</span>
        </div>
      </div>

      <div className="lg:px-72 px-6">
        <div
          className="flex lg:flex-row flex-col gap-6 pt-10 
      "
        >
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
        <div className="flex gap-28 lg:flex-row flex-col">
          <Image
            src={'/images\\About-image1.png'}
            alt=""
            width={543}
            height={362}
          />
          <div>
            <h1 className="text-title text-4xl lg:pb-20 pb-9 lg:text-left text-center">
              Nossa missão
            </h1>
            <span className="text-brown text-md pb-9 text-justify">
              Nossa missão é promover, celebrar e preservar a arte de rua, dando
              voz e espaço aos artistas urbanos de todas as comunidades. Nosso
              propósito é aumentar a conscientização sobre a importância do
              grafite e da arte de rua como expressões culturais e sociais
              significativas, ajudando a transformar espaços públicos em
              galerias de arte ao ar livre.
            </span>
            <div className="flex lg:justify-normal justify-center">
              {' '}
              <Button variant="ghost">
                Saber mais sobre a arte concreta{' '}
                <ArrowCircleRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
        <div className="pt-10 pb-14  text-center">
          <h1 className="text-Title text-4xl pb-11">Nossa Equipe</h1>
          <p className="text-brown text-md pb-8 lg:w-96 ">
            Nossa equipe é composta por artistas, acadêmicos, curadores e
            apaixonados pela arte de rua. Nós compartilhamos um compromisso com
            a celebração da arte de rua e acreditamos no seu poder de inspirar,
            provocar e conectar pessoas de todas as origens.
          </p>
          <div className="lg:flex gap-5  hidden">
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
          <BoardSlider images={images} />
        </div>

        <div className="flex justify-center flex-col items-center pb-11">
          <h1 className="text-title text-4xl pb-12 ">Fale com a gente</h1>
          <div>
            <p className="text-brown font-md pb-5  lg:w-[40rem] text-center">
              Adoraríamos ouvir de você, seja você um artista de rua procurando
              por apoio, um membro da comunidade interessado em aprender mais,
              ou alguém que gostaria de apoiar nosso projeto. Você pode nos
              alcançar pelo email arteconcreta@gmail.com ou através do
              formulário de contato a seguir.
            </p>
          </div>
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
