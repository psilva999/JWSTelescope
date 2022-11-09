import React from 'react'

import Distancia from '../../assets/imgs/3-sobre/3.jpg'
import Refletir from '../../assets/imgs/3-sobre/4.jpg'
import Gold from '../../assets/imgs/3-sobre/5.jpg'

const DeepDive = () => {
  return (
    <>
      <article className='deep-dive s-c bla'> <h1>Que tal um Deeper dive? Venha checar nosso infográfico do JWST</h1>

        <div>
          <a href="https://webbtelescope.org/contents/media/images/4168-Image?keyword=Infographics" target='_blank' className='dd first'>
            <li> <img src={ Distancia }/> </li>

            <h2>Distância</h2>
            <span>James Webb Space Telescope “Distance Matters” Infographic</span>
          </a>

          <a href="https://webbtelescope.org/contents/news-releases/2022/news-2022-053" target='_blank' className='dd last'>
            <li> <img src={ Refletir }/> </li>
            <h2>Observar e refletir</h2>

            <span>James Webb Space Telescope “Seeing is Believing” Infographic</span>
          </a>
        </div>
      </article>

      <article className='how s-c whi'>
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