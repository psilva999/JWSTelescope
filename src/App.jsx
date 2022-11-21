import React from 'react'

import { Routes, Route, NavLink } from 'react-router-dom'
import { Link } from 'react-scroll'

import Header from './components/Header'
import User from './components/Others/User'
import Home from './components/Home'
import About from './components/About'

import History from './components/History'
import Images from './components/Images'
import News from './components/News'

import Store from './components/Store'
import Newsletter from './components/Newsletter'
import Nan from './components/Nan'
import Footer from './components/Footer'

import Subscribe from './assets/svg/additional/2-email.svg'
import Arrow from './assets/svg/additional/3-back-top.svg'

import { changeImage, handleDropDownMenu, handleHeader, handleSummary, handleTop } from './components/Events/handleScroll'

import { highLighter, highLighterHistory } from './components/Events/highlighter'
import { bitcoin, closeMenuFromOutside } from './components/Events/handleTags'
import { closeLoginFromOutside } from './components/Events/input'
import { removeActive } from './components/Events/handleMenu'

function App() {
  window.addEventListener('scroll', handleSummary)
  window.addEventListener('scroll', highLighterHistory)
  window.addEventListener('scroll', handleHeader)

  window.addEventListener('scroll', changeImage)
  window.addEventListener('scroll', handleTop)
  window.addEventListener('scroll', highLighter)

  window.addEventListener("scroll", handleDropDownMenu)
  window.addEventListener("scroll", () => {
    const container = document.querySelector('.infos-languages ul')

    if (container.classList.contains("active")) {
      document.documentElement.style.setProperty('--value', "none")
      container.style.display = 'none'
      container.classList.remove('active')
    }
  })

  window.addEventListener('load', handleSummary)
  window.addEventListener('load', highLighterHistory)

  window.addEventListener('load', handleHeader)
  window.addEventListener('load', changeImage)

  window.addEventListener('load', bitcoin)
  window.addEventListener('load', highLighter)

  window.addEventListener('load', handleTop)
  // window.addEventListener('load', () => {
  //   window.location.href = 'https://psilva999.github.io/jws-telescope-beta/'
  // })

  window.addEventListener('click', closeMenuFromOutside)
  window.addEventListener('click', closeLoginFromOutside)

  // window.addEventListener('popstate', () => {
  //   window.location.href = 'https://psilva999.github.io/jws-telescope-beta/'
  // })

  return (
    <>
      <Header/>

      <main>
        <Routes>
          <Route path='/' element={ <Home/> }/>
          <Route path='/about' element={ <About/> }/>

          <Route path='/history' element={ <History/> }/>
          <Route path='/images' element={ <Images/> }/>

          <Route path='/news' element={ <News/> }/>
          <Route path='/store' element={ <Store/> }/>

          <Route path='/newsletter' element={ <Newsletter/> }/>
          <Route path='*' element={ <Nan/> }/>
        </Routes>
      </main>

      <Link activeClass="active"
          to='top'
          spy={ false }
          smooth={ false }
          offset={ 0 }
          duration={ 0 }
          className='link-scroll'
          onClick={ removeActive }>
        <NavLink className='no-style' to='/newsletter'>
          <button className='subscribe' >
            <img src={ Subscribe }/>
          </button>
        </NavLink>
      </Link>

      <Link activeClass="active"
        to='top'
        spy={ true }
        smooth={ true }
        offset={ -145 }
        duration={ 600 }
        className='link-scroll'>

        <button className='volta-pro-topo'>
          <img src={ Arrow }/> </button>
      </Link>

      <Footer/>
      <User/>
    </>
    
  )
}

export default App
