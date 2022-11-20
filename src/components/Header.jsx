import React from 'react'
import { Link } from 'react-scroll'
import { NavLink } from "react-router-dom";

import Infos from './Others/Infos'
import Logo from '../assets/svg/1-header/3-logo.svg'
import Dropdown from '../assets/svg/1-header/4-dropdown.svg'

import { handleHeader, noAnimation } from './Events/handleScroll'
import { handleLoginSign } from './Events/input'
import { handleLiHistory, handleMenuLiActive, removeActive } from './Events/handleMenu';

const Header = () => {
  return (
    <>
      <Infos/>

      <header className='header-fixo' onClick={ noAnimation } onMouseMove={ noAnimation } onMouseOut={ handleHeader }>
        <div>
          <Link activeClass="active"
            to='top'
            spy={ false }
            smooth={ false }
            offset={ 0 }
            duration={ 0 }
            className='link-scroll'>
            <NavLink  className='no-style home' to='/'>
            <img src={ Logo } className='logo' onClick={ removeActive }/> </NavLink>  
          </Link>

          <button className='toggle-menu'>
            <div></div>
            <div></div>
            <div></div>
          </button>

          <nav className='menu'>
            <ul>
              <Link activeClass="active"
                to='top'
                spy={ false }
                smooth={ false }
                offset={ 0 }
                duration={ 0 }
                className='link-scroll'>
                <NavLink  className='no-style' to='/about'>
                  <li onClick={ handleMenuLiActive } className='fire'>sobre</li>
                </NavLink>
              </Link>

              <li className='truce'>
                <Link activeClass="active"
                  to='top'
                  spy={ false }
                  smooth={ false }
                  offset={ 0 }
                  duration={ 0 }
                  className='link-scroll'
                  onClick ={ handleLiHistory }>
                  <NavLink  className='no-style history' to='/history'>
                    <span>história</span>
                    <img src={ Dropdown }/>
                  </NavLink>
                </Link>

                <ul>
                  <li>Início do projeto</li>
                  <li>Primeiras ideias</li>
                  <li>Planejamento e construção</li>
                  <li>Localização</li>
                  <li>Objetivo da missão</li>
                  <li>Lançamento</li>
                </ul>
              </li>

              <Link activeClass="active"
                to='top'
                spy={ false }
                smooth={ false }
                offset={ 0 }
                duration={ 0 }
                className='link-scroll'>
                  <NavLink className='no-style' to='/images'>
                    <li onClick={ handleMenuLiActive } className='fire'>imagens</li>
                  </NavLink>
              </Link>

              <Link activeClass="active"
                to='top'
                spy={ false }
                smooth={ false }
                offset={ 0 }
                duration={ 0 }
                className='link-scroll'>
                <NavLink className='no-style' to='/news'>
                  <li onClick={ handleMenuLiActive } className='fire'>news</li>
                </NavLink>
              </Link>

              <Link activeClass="active"
                to='top'
                spy={ false }
                smooth={ false }
                offset={ 0 }
                duration={ 0 }
                className='link-scroll'>
                <NavLink className='no-style' to='/store'>
                  <li onClick={ handleMenuLiActive } className='fire'>store</li>
                </NavLink>
              </Link>
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
