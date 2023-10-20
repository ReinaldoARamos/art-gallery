'use client'

import { Directory } from '@/app/components/Directory/Directory'

export default function Terms() {
  return (
    <>
      <div className="kg:px-72 px-6">
        <div className="pt-9 pb-52">
          <Directory path1="Sobre" path2="Termos de uso" />
        </div>
        <div className="flex justify-center  flex-col pb-36">
          <h1 className="text-title text-3xl font-bold pb-16 flex justify-center">
            Termos de uso
          </h1>
          <div className="w-full flex justify-center text-justify">
            <div className="text-brown w-[35rem] ">
              Aceitação dos Termos: Ao acessar e utilizar o site Arte Concreta,
              você concorda com os Termos de Uso e Política de Privacidade
              abaixo detalhados. Se você não concordar com estes termos, não
              deve utilizar este site. Direitos Autorais: Todo o conteúdo deste
              site, incluindo, mas não se limitando a, textos, gráficos,
              imagens, logotipos, são de propriedade exclusiva do site Arte
              Concreta, e estão protegidos pela lei de direitos autorais. Você
              não pode copiar, reproduzir, modificar, publicar ou distribuir
              qualquer parte deste site sem a permissão prévia por escrito do
              Arte Concreta. Conduta do Usuário: Você concorda em usar o site de
              maneira responsável, não engajar em atividades que possam
              danificar o site, e não usar o site para fins ilegais ou
              inapropriados. Limitação de Responsabilidade: O site Arte Concreta
              não se responsabiliza por qualquer dano resultante do uso ou
              incapacidade de usar este site.
            </div>
          </div>
        </div>
        <div className="flex justify-center  flex-col pb-16">
          <h1 className="text-title text-3xl font-bold pb-16 flex justify-center">
            Política de Privacidade
          </h1>
          <div className="w-full flex justify-center text-justify">
            <div className="text-brown w-[35rem] ">
              Coleta de Informações: Coletamos informações pessoais, como nome e
              endereço de e-mail, apenas quando você opta por fornecê-las, como
              ao se inscrever para receber nossa newsletter. Coletamos
              informações não pessoais, como dados de uso e cookies, para
              melhorar a experiência do usuário. Uso de Informações: Usamos suas
              informações para fornecer e melhorar nossos serviços, responder às
              suas solicitações e comunicar com você. Não vendemos ou
              compartilhamos suas informações pessoais com terceiros para fins
              de marketing. Segurança das Informações: Tomamos medidas razoáveis
              para proteger suas informações, mas não podemos garantir a
              segurança total das informações que você fornece online. Cookies:
              Usamos cookies para personalizar sua experiência no nosso site e
              analisar o tráfego do site. Você pode configurar seu navegador
              para recusar cookies, mas isso pode afetar a funcionalidade do
              site. Alterações na Política: Podemos atualizar nossa política de
              privacidade de tempos em tempos. Recomendamos que você revise esta
              política regularmente para se manter informado sobre nossas
              práticas de privacidade.
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
