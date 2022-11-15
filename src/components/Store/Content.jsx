import React from 'react'
import { maxTotal, minTotal } from '../Events/handleTags'

import Stars from '../../assets/svg/5-store/0-avaliacao.svg'
import Frete from '../../assets/svg/5-store/1-frete.svg'

const Content = () => {
  return (

    <>
      <div className='content'>

        <p>
          <h1>Telescópio Refletor Newtoniano 114mm Skyline Deepsky</h1>

          <li>
            <img src={ Stars } className='stars'/>
            <span className='reviews'>4.0 (3232 reviews)</span>
          </li>

          <li>
            <span>novo modelo</span>
            <span>best seller</span>
          </li>
        </p>

        <p>
          <h1>$450</h1>
          <span className='juros'>em 3x de $150 sem juros</span>
          <span>Ver os meios de pagamento</span>
        </p>

        <p>
          <li>
            <img src={ Frete }/>
            <h2>Frete grátis</h2>
          </li>

          <li className='envio'>Saiba os prazos de entrega e as formas de envio.</li>
        </p>

        <p>
          <span>Cor: <strong>Azul Celeste</strong></span>

          <div>
            <button className='active'></button>
            <button></button>
            <button></button>
          </div>
        </p>

        <p> <h2>Quantidade:</h2>

          <div className='total'>
            <button onClick={ minTotal }>-</button>
            <li className='min'>1</li>
            <button onClick={ maxTotal}>+</button>
          </div>
        </p>

        <button className='more'>COMPRAR AGORA</button>
        <button className='more'>Adicionar ao carrinho</button>
      </div>
    </>

  )
}

export default Content
