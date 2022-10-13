import React from 'react'
import Infos from './Estructure/Infos'

import Logo from '../assets/svg/1-header/3-logo.svg'
import Dropdown from '../assets/svg/1-header/4-dropdown.svg'

const Header = () => {
  return (
    <>
      <Infos/>

      <header className='menu'>
        <img src={ Logo } className='logo'/>

        <button className='toggle-menu'>
          <div></div>
          <div></div>
          <div></div>
        </button>

        <nav>
          <ul>
            <li>sobre</li>

            <li>
              <span>história</span>
              <img src={ Dropdown }/>
            </li>

            <li>imagens</li>
            <li>news</li>
            <li>store</li>
          </ul>

          <div>
            <button className='login'>login</button>
            <button className='sign up'>sign up</button>
          </div>

        </nav>
      </header>
    </>

  )
}

export default Header
