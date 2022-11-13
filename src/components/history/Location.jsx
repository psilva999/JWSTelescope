import React from 'react'
import Locate from '../../assets/imgs/7-historia/5.jpg'

const Location = () => {
  return (
    <article className='text-history' id='location'> <h1>Localização</h1>
      <p>
        O JWST opera em uma órbita de halo, circulando em torno de um ponto no espaço conhecido como ponto Sol-Terra L2 Lagrange, <a className='background-detail-history n-b-4'> aproximadamente 1 500 000 km além da órbita da Terra </a> ao redor do Sol. 
      </p>

      <p>
        Sua posição real varia entre cerca de 250 000 km e 832 000 km de L2 enquanto orbita, mantendo-o fora da sombra da Terra e da Lua. Esse arranjo mantém a temperatura da espaçonave constante e abaixo dos 50 K (-223 °C) necessários para observações infravermelhas fracas.
      </p>

      <img src={ Locate }/>

      <p>
        O protetor solar JWST é um sistema de controle térmico passivo implantado após o lançamento para proteger o telescópio e a instrumentação da luz e do calor do Sol, da Terra e da Lua.
      </p>

      <p>
        Sua finalidade é permitir que o telescópio infravermelho funcione em ou abaixo de sua temperatura de projeto de 40 kelvins (-233 °C).
      </p>
    </article>

  )
}

export default Location
