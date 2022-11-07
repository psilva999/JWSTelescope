import React from 'react'

import One from '../../assets/imgs/4-imagens/2-espelho/1.jpg'
import Two from '../../assets/imgs/4-imagens/2-espelho/2.jpg'

import Three from '../../assets/imgs/4-imagens/2-espelho/3.jpg'
import Four from '../../assets/imgs/4-imagens/2-espelho/4.jpg'
import Five from '../../assets/imgs/4-imagens/2-espelho/5.jpg'

const Mirror = () => {
  return (

    <article>
      <h1>Espelho</h1>

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

export default Mirror
