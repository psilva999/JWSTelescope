import React from 'react'

import Stars from '../../assets/svg/5-store/0-avaliacao.svg'
import Frete from '../../assets/svg/5-store/1-frete.svg'

const Content = () => {
  return (

    <>
      <div>

        <p>
          <h1>Telescópio Refletor Newtoniano 114mm Skyline Deepsky</h1>

          <li>
            <img src={ Stars }/>
            <span>4.0 (3232 reviews)</span>
          </li>

          <li>
            <span>novo modelo</span>
            <span>best seller</span>
          </li>
        </p>

        <p>
          <h1>$450</h1>
          <span>em 3x de $150 sem juros</span>
          <span>Ver os meios de pagamento</span>
        </p>

        <p>
          <li>
            <img src={ Frete }/>
            <h2>Frete grátis</h2>
          </li>

          <span>Saiba os prazos de entrega e as formas de envio.</span>
        </p>

        <p>
          <span>Cor: <strong>Azul Celeste</strong></span>

          <div>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
          </div>
        </p>

        <p> <span>Quantidade</span>

          <div>
            <button>-</button>
            <li>1</li>
            <button>+</button>
          </div>
        </p>

        <p>
          <button>COMPRAR AGORA</button>
          <button>Adicionar ao carrinho</button>
        </p>
      </div>
    </>

  )
}

export default Content
