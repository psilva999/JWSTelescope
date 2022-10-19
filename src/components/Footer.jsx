import React from 'react'

import Logo from '../assets/imgs/logo-footer.png'

import Github from '../assets/svg/additional/5-github.svg'
import Telegram from '../assets/svg/additional/6-telegram.svg'
import Linkedin from '../assets/svg/additional/7-linkedin.svg'

const Footer = () => {
  return (
    <footer>

      <article>
        <img src={ Logo } className='logo-footer'/>

        <dl>
          <dt>
            <dd>BARCELONA</dd>
            <dd>Pier03. Reina Cristina 9,1º</dd>
            <dd>8003 Barcelona</dd>
          </dt>

          <dt>
            <dd>MADRID</dd>
            <dd>P.º Imperial 14, 3º</dd>
            <dd>28005 Madrid</dd>
          </dt>

          <dt>
            <dd>VIGO</dd>
            <dd>Areal, 18, 3º</dd>
            <dd>36201 Vigo</dd>
          </dt>
        </dl>

        <ul>
          <a href='#'>Perguntas frequentes</a>

          <a href='#'>Termos de Uso</a>

          <a href='#'>Política de Privacidade</a>

          <a href='#'>Política de Segurança</a>

          <a href='#'>Ouvidoria</a>

          <a href='#'>Relatórios financeiros</a>

          <a href='#'>Ética e governança</a>
        </ul>

        <div className='feedback'>
          <h1>Encontrou algum bug ou gostaria de enviar um feedback?</h1>

          <p>Entre em contato:</p>

          <div className='redes'>
            <a href='https://github.com/psilva999' target='_blank'>
              <img src={ Github } alt='Github'/>
            </a>

            <a href='https://t.me/psilva999' target='_blank'>
              <img src={ Telegram } alt='Telegram'/>
            </a>

            <a href='https://www.linkedin.com/in/psilva999/' target='_blank'>
              <img src={ Linkedin } alt='Linkedin'/>
            </a>

          </div>
        </div>
        
      </article>
    </footer>

  )
}

export default Footer
