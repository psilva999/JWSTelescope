import React from 'react'

import One from '../../assets/imgs/4-imagens/3-construcao/1.jpg'
import Two from '../../assets/imgs/4-imagens/3-construcao/2.jpg'

import Three from '../../assets/imgs/4-imagens/3-construcao/3.jpg'
import Four from '../../assets/imgs/4-imagens/3-construcao/4.jpg'
import Five from '../../assets/imgs/4-imagens/3-construcao/5.jpg'

const Building = () => {
  return (
    <article>
      <h1>Construção</h1>

      <div>
        <img src={ One }/>
        <img src={ Two }/>
        <img src={ Three }/>

        <img src={ Four }/>
        <img src={ Five }/>
      </div>
    </article>


  )
}

export default Building
