import React from 'react'

import Product from './Store/Product'
import Content from './Store/Content'
import Marketing from './Store/Marketing'

const Store = () => {
  return (

    <section className='store'>
      <article>
        <Product/>
        <Content/>
      </article>

      <Marketing/>
    </section>

  )
}

export default Store
