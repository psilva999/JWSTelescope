import React from 'react'

import Alert from '../../assets/svg/1-header/0-alert.svg'
import Planet from '../../assets/svg/1-header/1-planet.svg'
import WhiteArrowDown from '../../assets/svg/1-header/2-white-arrow-down.svg'

import { handleMoreInfo } from '../Events/handleTags'

const Infos = () => {
  return (
    <section className='infos-languages' id='top'>

      <article>
        <div>
          <img src={ Alert }/>
          <p>You are on the main website of JWSTelescope</p>
        </div>

        <button onClick={ handleMoreInfo } id='more-about'>
          <img src={ Planet } id='more-about'/>
          <p id='more-about'>More about our website</p>
          <img src={ WhiteArrowDown } className='w-a' id='more-about'/>

          <ul>
            <li>USA</li>
            <li>Brazil</li>
            <li>Spain</li>
            <li>France</li>

            <li>China</li>
            <li>Russia</li>
            <li>England</li>
            <li>Italy</li>
          </ul>
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
