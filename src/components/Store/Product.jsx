import React from 'react'

import { handleAllScreenProduct, nextImageStore, prevImageStore } from '../Events/input'
import X from '../../assets/svg/3-login-share-newsletter/6-close.svg'

import Product1 from '../../assets/imgs/6-store/produto/1.jpg'
import Product2 from '../../assets/imgs/6-store/produto/2.jpg'

import Product3 from '../../assets/imgs/6-store/produto/3.jpg'
import Product4 from '../../assets/imgs/6-store/produto/4.jpg'

const Product = () => {
  return (
    <>
      <div className='product' onClick={ handleAllScreenProduct }>
        <img src={ Product1 }/>
        <img src={ Product2 }/>

        <img src={ Product3 }/>
        <img src={ Product4 }/>
      </div>

      <div className='all-screen-product' id='all-screen-product' onClick={ handleAllScreenProduct }>
        <img src={ X } className='close' id='close-product' onClick={ handleAllScreenProduct }/>

        <article>
          <button onClick={ prevImageStore }></button>

          <img src={ Product1 }/>
          <img src={ Product2 }/>
          <img src={ Product3 }/>
          <img src={ Product4 }/>

          <button onClick={ nextImageStore }></button>
        </article>

      </div>
    </>

  )
}

export default Product