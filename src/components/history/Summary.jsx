import React from 'react'

import Ideas from '../../assets/svg/6-summary/white/1.svg'
import Build from '../../assets/svg/6-summary/white/2.svg'

import Location from '../../assets/svg/6-summary/white/3.svg'
import Mission from '../../assets/svg/6-summary/white/4.svg'
import Launch from '../../assets/svg/6-summary/white/5.svg'

const Summary = () => {
  return (
    <ul>  <h1>Sumário</h1>

      <li> <img src={ Ideas }/>
        <span>Primeiras ideias</span> </li>

      <li> <img src={ Build }/>
        <span>Planejamento e contrução</span> </li>

      <li> <img src={ Location }/>
        <span>Localização</span> </li>

      <li> <img src={ Mission }/>
        <span>Objetivo da missão</span> </li>

      <li> <img src={ Launch }/>
        <span>Lançamento</span> </li>
    </ul>

  )
}

export default Summary
