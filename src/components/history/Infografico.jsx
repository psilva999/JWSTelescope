import React from 'react'
import Arrow from '../../assets/svg/arrow.svg'
import Info from '../../assets/imgs/7-historia/7.jpg'
import Close from '../../assets/svg/3-login-share-newsletter/6-close.svg'

const Infografico = () => {
  return (
    <>
      <button>
        <span>Infográfico</span>
        <img src={ Arrow }/>
      </button>

      <div className='all-screen'>
        <img src={ Close }/>
        <img src={ Info }/>
      </div>
    </>
  )
}

export default Infografico
