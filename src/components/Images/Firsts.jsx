import React from 'react'

import One from '../../assets/imgs/4-imagens/1-primeiras/1.jpg'
import Two from '../../assets/imgs/4-imagens/1-primeiras/2.jpg'

import Three from '../../assets/imgs/4-imagens/1-primeiras/3.jpg'
import Four from '../../assets/imgs/4-imagens/1-primeiras/4.jpg'
import Five from '../../assets/imgs/4-imagens/1-primeiras/5.jpg'

const Firsts = () => {
  return (
    <article>
      <h1>Primeiras imagens</h1>

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

export default Firsts
