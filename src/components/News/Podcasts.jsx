import React from 'react'

import Ciencia from '../../assets/imgs/5-news/2-podcast/1.jpg'
import Todo from '../../assets/imgs/5-news/2-podcast/2.jpg'

import Jwst from '../../assets/imgs/5-news/2-podcast/3.jpg'
import Nerdologia from '../../assets/imgs/5-news/2-podcast/4.jpg'

const Podcasts = () => {
  return (

    <article className='podcast'>
      <header>

        <div> <h1>Pra passar o tempo</h1>
          <span>Escute a qualquer hora e onde você quiser</span>
        </div>

        <button>VER TODOS</button>
      </header>

      <div>
        <a href="https://www.youtube.com/c/Ci%C3%AAnciaSemFim" target='_blank'>
          <img src={ Ciencia }/></a>

        <a href="https://www.youtube.com/c/CienciaTodoDia" target='_blank'>
          <img src={ Todo }/></a>

        <a href="https://jovemnerd.com.br/nerdcast/james-webb-explorando-o-infinito-e-alem/" target='_blank'>
          <img src={ Jwst }/></a>

        <a href="https://www.youtube.com/c/nerdologia" target='_blank'>
          <img src={ Nerdologia }/></a>

      </div>
    </article>

  )
}

export default Podcasts
