import React from 'react'

import Google from '../../assets/svg/3-login-share-newsletter/3-google.svg'
import Eye from '../../assets/svg/3-login-share-newsletter/4-eye.svg'

import { handlePassword, sign, userRegex, passwordRegex, loginUser } from '../Events/input'

const Login = () => {
  return (

    <section className='login'>
      <article> <h1>Log in</h1>

        <span className='terms'>
          By continuing, you agree to our
          <a> User Agreement </a>
          and
          <a> Privacy Policy</a>.
        </span>
      </article>

      <div>
        <img src={ Google }/>
        <span>Continue with Google</span>
      </div>

      <article>
        <p className='input-style'>
          <input type="text" id='username' name='username' required onInput={ userRegex }/>
          <label htmlFor="username">Username</label>
        </p>

        <p className='input-style'>
          <input type="password" id='password' name='password' required onInput={ passwordRegex }/>
          <label htmlFor="password">Password</label>
          <img src={ Eye } className='eye' onClick={ handlePassword }/>
        </p>

        <i onClick={ loginUser }><button className='more' disabled>LOGIN</button></i>
      </article>

      <article>
        <span>
          Forgot
          <a> E-mail </a>
          or
          <a> password</a>?
        </span>

        <span>
          New on JWST?
          <a className='sign' onClick={ sign }> SIGN UP</a>
        </span>
        
      </article>
    </section>

  )
}

export default Login
