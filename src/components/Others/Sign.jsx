import React from 'react'

import Google from '../../assets/svg/3-login-share-newsletter/3-google.svg'

import { continueSign, emailRegex, login } from '../Events/input'

const Sign = () => {

  return (
    <section className='signup'>

      <article> <h1>Sign up</h1>
        <span className='terms'>
          By continuing, you agree to our
          <a> User Agreement </a>
          and
          <a> Privacy Policy</a>.
        </span>
      </article>

      <div className='google'>
        <img src={ Google }/>
        <span>Continue with Google</span>
      </div>

      <article>
        <p className='input-style'>
          <input type='email' id='email' name='email' onInput={ emailRegex } required/>
          <label htmlFor="email">E-mail</label>
        </p>

        <i onClick={ continueSign }><button className='more' disabled>CONTINUE</button></i>
      </article>

      <article>
        <span>
          Already a Nerd?
          <a className='log' onClick={ login }> LOGIN</a>
        </span>
        
      </article>  
    </section>

  )
}

export default Sign