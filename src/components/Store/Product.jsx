import React from 'react'

import Product1 from '../../assets/imgs/6-store/produto/1.jpg'
import Product2 from '../../assets/imgs/6-store/produto/2.jpg'
import Product3 from '../../assets/imgs/6-store/produto/3.jpg'

import Product4 from '../../assets/imgs/6-store/produto/4.jpg'
import Product5 from '../../assets/imgs/6-store/produto/5.jpg'
import Product6 from '../../assets/imgs/6-store/produto/6.jpg'

const Product = () => {
  return (
    <div>
      <img src={ Product1 }/>
      <img src={ Product2 }/>

      <img src={ Product3 }/>
      <img src={ Product4 }/>

      <img src={ Product5 }/>
      <img src={ Product6 }/>
    </div>
  )
}

export default Product