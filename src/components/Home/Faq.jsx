import React from 'react'

import Faqs from '../../assets/svg/2-home/4-faq-arrow.svg'
import Medidas from '../../assets/imgs/1-home/4-faq-1.jpg'

import Location from '../../assets/imgs/1-home/5-faq-2.jpg'
import Launch from '../../assets/imgs/1-home/6-faq-3.jpg'

const Faq = () => {
  return (
    <section className='faq'>
      <h1>Perguntas frequentes</h1>

      <dl>
        <dt className='active'>
          <h2>Quais são as medidas do JWST?</h2>
          <img src={ Faqs }/>
        </dt>
        <dd className='active'>
          <p>
            Pouco mais de 6 metros de diâmetro e 6 kg.
          </p>
          <img src={ Medidas }/>
        </dd>

        <dt id='margin'>
          <h2>Em que ponto do espaço o telescópio está localizado?</h2>
          <img src={ Faqs }/>
        </dt>
        <dd>
          <p>
            No ponto de Lagrange L2 que fica aproximadamente 1.5 milhões de km do nosso planeta. O local foi escolhido por ter uma anulação entre a gravidade do Sol e da Terra
          </p>
          <img src={ Location }/>
        </dd>

        <dt id='margin'>
          <h2>Quando foi lançado?</h2>
          <img src={ Faqs }/>
        </dt>
        <dd>
          <p>
            25 de dezembro de 2021 a partir do Centro Espacial de Kourou, na Guiana Francesa.
          </p>
          <img src={ Launch }/>
        </dd>
      </dl>
    </section>
  )
}

export default Faq
