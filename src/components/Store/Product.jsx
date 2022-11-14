import React from 'react'

import Product1 from '../../assets/imgs/6-store/produto/1.jpg'
import Product2 from '../../assets/imgs/6-store/produto/2.jpg'

import Product3 from '../../assets/imgs/6-store/produto/3.jpg'
import Product4 from '../../assets/imgs/6-store/produto/4.jpg'

const Product = () => {
  return (
    <div className='product'>
      <img src={ Product1 }/>
      <img src={ Product2 }/>

      <img src={ Product3 }/>
      <img src={ Product4 }/>
    </div>
  )
}

export default Product