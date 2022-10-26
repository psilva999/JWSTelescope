import React from 'react'

import Login from './Login'
import Sign from './Sign'

const User = () => {
  return (

    <div className='singup-login active'>
      <section className='container'>
        <Login/>

        <Sign/>
      </section>

    </div>
  )
}

export default User
