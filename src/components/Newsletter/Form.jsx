import React from 'react'
import { handleForm, handleLastName, handleName, emailNewsletter, newsletterController, sendNews } from '../Events/input'

const Form = () => {
  return (

    <form onSubmit={ handleForm }>
      <div>

        <p className='large-style'>
          <input type="text" id='name' name='name' onInput={ handleName }/>
          <label htmlFor="name">Name</label>
        </p>

        <p className='large-style'>
          <input type="text" id='lastName' name='lastName' onInput={ handleLastName }/>
          <label htmlFor="lastName">Lastname</label>
        </p>
      </div>

      <p className='large-style'>
        <input type="email" id='nEmail' name='nEmail' onInput={ emailNewsletter }/>
        <label htmlFor="nEmail">E-mail</label>
      </p>

      <p className='dont-send'>Não se preocupe, não enviamos spam! Suas informações serão usadas apenas para atualizações relacionadas ao google e nossos e-mails só são enviados uma vez por semana. Você pode cancelar a inscrição a qualquer momento.</p>

      <div className='checkbox'>
        <p>
          <input type="checkbox" name='check-one' id='check-one' onChange={ newsletterController }/>
          <label htmlFor="check-one">Add me to the web.dev mailing list.</label>
        </p>

        <p>
          <input type="checkbox" name='check-two' id='check-two' onChange={ newsletterController }/>
          <label htmlFor="check-two">I accept Google's <a>Terms and Conditions</a></label>
        </p>
      </div>

      <i onClick={ sendNews }><button className='more' disabled>SUBSCRIBE</button>
      </i>
      <section className='confetti-container'></section>
    </form>
    
  )
}

export default Form