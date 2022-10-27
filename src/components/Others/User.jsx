import React from 'react'

import Login from './Login'
import Sign from './Sign'

import X from '../../assets/svg/3-login-share-newsletter/6-close.svg'
import { handleLoginSign } from '../Events/input'

const User = () => {
  return (

    <div className='singup-login' id='signup-login'>
      <section className='container'>
        <img src={ X } className='close' onClick={ handleLoginSign }/>

        <Login/>

        <Sign/>
      </section>

    </div>
  )
}

export default User
