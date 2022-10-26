import React from 'react'

import Google from '../../assets/svg/3-login-share-newsletter/3-google.svg'

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
          <input type='email' required/>
          <label htmlFor="">E-mail</label>
        </p>

        <button className='more continue' disabled>CONTINUE</button>
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
          <a className='login'> LOGIN</a>
        </span>
        
      </article>  
    </section>

  )
}

export default Sign