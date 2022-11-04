import React from 'react'
import { handleForm } from '../Events/input'

const Form = () => {
  return (

    <form onSubmit={ handleForm }>
      <div>

        <p className='large-style'>
          <input type="text" id='name' name='name'/>
          <label htmlFor="name">Name</label>
        </p>

        <p className='large-style'>
          <input type="text" id='lastName' name='lastName'/>
          <label htmlFor="lastName">Lastname</label>
        </p>
      </div>

      <p className='large-style'>
        <input type="email" id='nEmail' name='nEmail'/>
        <label htmlFor="nEmail">E-mail</label>
      </p>

      <p className='dont-send'>Não se preocupe, não enviamos spam! Suas informações serão usadas apenas para atualizações relacionadas ao google e nossos e-mails só são enviados uma vez por semana. Você pode cancelar a inscrição a qualquer momento.</p>

      <div className='checkbox'>
        <p>
          <input type="checkbox" name='1Check' id='1Check'/>
          <label htmlFor="1Check">Add me to the web.dev mailing list.</label>
        </p>

        <p>
          <input type="checkbox" name='2Check' id='2Check'/>
          <label htmlFor="2Check">I accept Google's <a>Terms and Conditions</a></label>
        </p>
      </div>

      <button className='more'>SUBSCRIBE</button>
    </form>
  )
}

export default Form