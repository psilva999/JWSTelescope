import React from 'react'

import Distancia from '../../assets/imgs/3-sobre/3.jpg'
import Refletir from '../../assets/imgs/3-sobre/4.jpg'
import Gold from '../../assets/imgs/3-sobre/5.jpg'

const DeepDive = () => {
  return (
    <>
      <article> <h1>Que tal um Deeper dive? Venha checar nosso infográfico do JWST</h1>

        <a href="" target='_blank'>
          <li> <img src={ Distancia }/> </li>

          <h1>Distância</h1>
          <span>James Webb Space Telescope “Distance Matters” Infographic</span>
        </a>

        <a href="" target='_blank'>
          <li> <img src={ Refletir }/> </li>

          <h1>Observar e refletir</h1>
          <span>James Webb Space Telescope “Seeing is Believing” Infographic</span>
        </a>
      </article>

      <article>
        <div> <h1>Como o James Webb se tornou possível?  </h1>

          <p>
            Webb está fazendo observações antes consideradas impossíveis; várias novas tecnologias tiveram que ser inventadas simplesmente para construí-lo.
          </p>
          <p>
            O espelho inovador e instrumentos poderosos estão sendo usados ​​para descobrir e estudar sistemas planetários distantes.
          </p>

          <button className='more'>SAIBA MAIS</button>
        </div>

        <img src={ Gold }/>
      </article>
    </>

  )
}

export default DeepDive