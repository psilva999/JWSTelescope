import React from 'react'
import Arrow from '../../assets/svg/arrow.svg'
import Info from '../../assets/imgs/7-historia/7.jpg'
import Close from '../../assets/svg/3-login-share-newsletter/6-close.svg'

const Infografico = () => {
  return (
    <>
      <button className='infrografico'>
        <span>Infográfico</span>
      </button>

      <div className='all-screen'>
        <img src={ Close }/>
        <img src={ Info }/>
      </div>
    </>
  )
}

export default Infografico
