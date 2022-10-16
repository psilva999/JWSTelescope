import React from 'react'

import WorldExplorer from '../../assets/svg/2-home/1-world-explorer.svg'
import Flag from '../../assets/svg/2-home/2-flag.svg'
import Learning from '../../assets/svg/2-home/3-learning.svg'

const Advantages = () => {
  return (
    <section className='vantagens'>
      <h1>Vantagens</h1>

      <article>
        <div> <img src={ WorldExplorer }/>
          <h1>Grande observador</h1>

          <p>
            Consegue observar os astros com maior nitidez por coletar mais luz de uma forma mais rápida
          </p>
        </div>

        <div> <img src={ Flag }/>
          <h1>Forma inédita</h1>

          <p>
            Primeiro telescópio a facilitar a observação de novos fenômenos por meio das lentes infravermelhas.
          </p>
        </div>

        <div> <img src={ Learning }/>
          <h1>Estudo profundo</h1>

          <p>
            Busca entender ainda mais os blocos de construção da vida em outras partes do Universo.
          </p>
        </div>
      </article>

      <button className='more'>SAIBA MAIS</button>
    </section>

  )
}

export default Advantages
