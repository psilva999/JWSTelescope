import React from 'react'

import { handleInfografico } from '../Events/input'

import Info from '../../assets/imgs/7-historia/7.jpg'
import Close from '../../assets/svg/3-login-share-newsletter/6-close.svg'

const Infografico = () => {
  return (

    <>
      <button className='infografico' onClick={ handleInfografico }>
        <span>Infográfico</span>
      </button>

      <div className='all-screen' id='all-screen' onClick={ handleInfografico }>
        <article>
          <img src={ Close } onCLick={ handleInfografico } id='close-infos'/>
          <img src={ Info }/>
        </article>
      </div>
    </>

  )
}

export default Infografico
