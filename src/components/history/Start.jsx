import React from 'react'
import Cartoon from '../../assets/imgs/7-historia/2.jpg'

const Start = () => {
  return (

    <article className='text-history'>
      <p>
        O projeto, liderado pela Nasa, <a className='background-detail'> teve início em 1996</a>. Na época, chamava-se “Telescópio Espacial da Próxima Geração”, sem a homenagem a James Edwin Webb – administrador da agência espacial americana durante as missões Apollo.
      </p>

      <img src={ Cartoon }/>

      <p>
        A ideia era construir um sucessor para o Telescópio Espacial Hubble, lançado em 1990. O Webb levou mais de duas décadas, entre atrasos, revisões técnicas e estouros de orçamento. O custo previsto inicialmente era de US$ 3,5 bilhões. No fim, a conta saiu US$ 9,7 bilhões.  
      </p>
    </article>

  )
}

export default Start
