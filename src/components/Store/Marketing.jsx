import React from 'react'

import Mars from '../../assets/svg/5-store/2-mars.svg'
import Sun from '../../assets/svg/5-store/3-sun.svg'

import Product1 from '../../assets/imgs/6-store/1.jpg'
import Product2 from '../../assets/imgs/6-store/2.jpg'

import Product3 from '../../assets/imgs/6-store/3.jpg'

import Product4 from '../../assets/imgs/6-store/4.jpg'
import Product5 from '../../assets/imgs/6-store/5.jpg'

const Marketing = () => {
  return (
    <>
      <div>
        
        <span>
          <h1>Preço unico</h1>
          <p>
            O preço sem competição nesta faixa de tamanho, motivo que faz o SkyLife DeepSky 4 ser um campeão de vendas.
            Um ponto muito favorável e importante que o caracteriza como amigável é a sua montagem Advanced AZ2.
          </p>
        </span>

        <img src={ Mars }/>
      </div>

      <div>
        <span>
          <h1>Visualização</h1>
          <p>
            Em boas condições atmosféricas, ficará impressionado com imagens Lua, suas crateras e superfície, Júpiter com sua 4 maiores luas, Saturno com seus anéis e suas luas, inclusive Titan.
          </p>
        </span>

        <img src={ Sun }/>
      </div>

      <ul>
        <li><img src={ Product1 }/> </li>
        <li><img src={ Product2 }/> </li>
        <li><img src={ Product3 }/> </li>
        <li><img src={ Product4 }/> </li>
        <li><img src={ Product5 }/> </li>
      </ul>

      <button>ver mais</button>
    </>

  )
}

export default Marketing