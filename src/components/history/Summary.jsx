import React from 'react'

import { ReactComponent as Ideas } from '../../assets/svg/6-summary/white/1.svg'
import { ReactComponent as Build } from '../../assets/svg/6-summary/white/2.svg'

import { ReactComponent as Location } from '../../assets/svg/6-summary/white/3.svg'
import { ReactComponent as Mission } from '../../assets/svg/6-summary/white/4.svg'
import { ReactComponent as Launch } from '../../assets/svg/6-summary/white/5.svg'

const Summary = () => {
  return (
    <ul className='summary'>  <h1>Sumário</h1>

      <li> <Ideas/>
        <span>Primeiras ideias</span> </li>

      <li> <Build/>
        <span>Planejamento e contrução</span> </li>

      <li> <Location className='location-svg'/>
        <span>Localização</span> </li>

      <li> <Mission/>
        <span>Objetivo da missão</span> </li>

      <li> <Launch/>
        <span>Lançamento</span> </li>
    </ul>

  )
}

export default Summary
