import React from 'react'
import Launch from '../../assets/imgs/7-historia/6.jpg'

const Launch = () => {
  return (

    <article> <h1>Lançamento</h1>
      <p>
        Em 25 de dezembro de 2021, ele finalmente decolou a bordo de um foguete Ariane 5 da Agência Espacial Europeia (ESA) – lançado do <a className='background-detail'>Centro Espacial da Guiana Francesa</a>. 
      </p>

      <img src={ Launch }/>

      <p>
        Dali em dia diante, foram meses de viagem, configuração, testes e calibragens para garantir que tudo funcionasse corretamente. 31 minutos após o lançamento, o telescópio iniciou o processo de implantação de seus painéis solares, antena, escudo solar, espelho e braço, que deverá se estender por treze dias.
      </p>
    </article>
  )
}

export default Launch
