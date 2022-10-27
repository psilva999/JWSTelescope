import React from 'react'
import Infos from './Others/Infos'

import Logo from '../assets/svg/1-header/3-logo.svg'
import Dropdown from '../assets/svg/1-header/4-dropdown.svg'
import { handleHeader, noAnimation } from './Events/handleScroll'
import { handleLoginSign } from './Events/input'

const Header = () => {
  return (
    <>
      <Infos/>

      <header className='header-fixo' onClick={ noAnimation } onMouseMove={ noAnimation } onMouseOut={ handleHeader }>
        <div>
          <img src={ Logo } className='logo'/>

          <button className='toggle-menu'>
            <div></div>
            <div></div>
            <div></div>
          </button>

          <nav className='menu'>
            <ul>
              <li>sobre</li>

              <li>
                <span>história</span>
                <img src={ Dropdown }/>

                <ul>
                  <li>Início do projeto</li>
                  <li>Primeiras ideias</li>
                  <li>Planejamento e construção</li>
                  <li>Localização</li>
                  <li>Objetivo da missão</li>
                  <li>Lançamento</li>
                </ul>
              </li>

              <li>imagens</li>
              <li>news</li>
              <li>store</li>
            </ul>

            <div>
              <button className='login' onClick={ handleLoginSign } id='login-button'>login</button>
              <button className='sign up' onClick={ handleLoginSign } id='sign-button'>sign up</button>
            </div>

          </nav>
        </div>
        
      </header>
    </>

  )
}

export default Header
