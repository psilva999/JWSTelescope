import React from 'react'

import Title from './Newsletter/Title'
import Form from './Newsletter/Form'
import Articles from './Newsletter/Articles'

const Newsletter = () => {
  return (
    
    <section className='newsletter'>
      <Title/>

      <Form/>
      <Articles/>
    </section>

  )
}

export default Newsletter
