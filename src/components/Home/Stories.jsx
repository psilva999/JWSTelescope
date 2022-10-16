import React from 'react'

import Jw from '../../assets/imgs/1-home/1-stories/1-james-webb/0.jpg'
import Mirror from '../../assets/imgs/1-home/1-stories/2-mirror/0.jpg'

import Hubble from '../../assets/imgs/1-home/1-stories/3-hubble-jws/0.jpg'
import Pictures from '../../assets/imgs/1-home/1-stories/4-pictures/0.jpg'

const Stories = () => {
  return (
    <section className='stories'>
      <h1>Web Stories</h1>

      <article>
        <div>
          <img src={ Jw }/> 

          <h2>James Webb</h2>
          <span>O motivo do telescópio ter recebido esse nome</span>
        </div>

        <div>
          <img src={ Mirror }/> 

          <h2>Espelho dourado</h2>
          <span>Como foi equipado o espelho do JWST</span>
        </div>

        
        <div>
          <img src={ Hubble }/> 

          <h2>Comparação</h2>
          <span>Hubble x JWST - Qual a principal vantagem?</span>
        </div>

        <div>
          <img src={ Pictures }/> 

          <h2>Primeiras</h2>
          <span>As primeiras imagens feitas pelo telescópio</span>
        </div>
      </article>

      <button className='more'>SAIBA MAIS</button>
    </section>
  )
}

export default Stories
