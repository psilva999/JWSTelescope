import React from 'react'

import Login from './Login'
import Sign from './Sign'

import X from '../../assets/svg/3-login-share-newsletter/7-close.svg'

const User = () => {
  return (

    <div className='singup-login active'>
      <section className='container'>
        <img src={ X } className='close'/>

        <Login/>

        <Sign/>
      </section>

    </div>
  )
}

export default User
