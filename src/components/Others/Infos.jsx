import React from 'react'

import Alert from '../../assets/svg/1-header/0-alert.svg'
import Planet from '../../assets/svg/1-header/1-planet.svg'
import WhiteArrowDown from '../../assets/svg/1-header/2-white-arrow-down.svg'

const Infos = () => {
  return (
    <section className='infos-languages' id='top'>

      <article>
        <div>
          <img src={ Alert }/>
          <p>You are on the main website of JWSTelescope</p>
        </div>

        <button>
          <img src={ Planet }/>
          <p>More about our website</p>
          <img src={ WhiteArrowDown }/>
        </button>
      </article>

      <article>
        <button className='active'>pt-br</button>
        <button>english</button>
      </article>
      
    </section>
  )
}

export default Infos
