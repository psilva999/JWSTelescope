import React from 'react'
import { Link } from 'react-scroll'

import Peoples from '../../assets/imgs/3-sobre/1.jpg'
import Work from '../../assets/imgs/3-sobre/2.jpg'

const Team = () => {
  return (
    <>
      <img src={ Peoples } className='peoples'/>

      <section className='presentation'>
        <article> <h1>O time do JWST</h1>

          <span>Aqueles que passaram mais de duas décadas na construção do James Webb</span>
          <Link activeClass="active"
            to='what'
            spy={ true }
            smooth={ true }
            offset={ 0 }
            duration={ 600 }
            className='link-scroll'>
              <button>
                <div></div>
                <div></div>
              </button>
          </Link>

        </article>
      </section>

      <article id='what' className='s-c bla'> <h1>O que é o James Webb?</h1>
        <p className='first'>
          O Telescópio Webb altera fundamentalmente nossa  compreensão do universo. Northrop Grumman garantiu que essa conquista antes impensável se tornasse realidade.
        </p>

        <p className='last'>
          Identificado como uma prioridade para astronomia e astrofísica pelo Conselho Nacional de Pesquisa, o Telescópio Webb é um programa chave para a NASA e a comunidade científica e é central para o programa de astrofísica terrestre e espacial do país.
        </p>
      </article>

      <article className='s-c whi'> <img src={ Work } className='img-w'/>

        <div> <h1>Como que foi trabalhar no Webb?</h1>

          <p>
            Antes que pudéssemos começar a construir o telescópio mais complexo de todos os tempos, tivemos que inventar tecnologias que nunca existiram antes. 
          </p>

          <p>
            Para muitos funcionários da Northrop Grumman, a oportunidade de trabalhar na Webb foi a abertura para oportunidades ilimitadas.
          </p>

          <button className='more'>SAIBA MAIS</button>
        </div>
        
      </article>
    </>

  )
}

export default Team