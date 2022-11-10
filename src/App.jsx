import React from 'react'
import { Link } from 'react-scroll'

import Header from './components/Header'
// import Home from './components/Home'
// import About from './components/About'
import History from './components/History'
// import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

import { changeImage, handleDropDownMenu, handleHeader, handleTop } from './components/Events/handleScroll'
import { faq } from './components/Events/handleClick'

import Subscribe from './assets/svg/additional/2-email.svg'
import Arrow from './assets/svg/additional/3-back-top.svg'
import { highLighter } from './components/Events/highlighter'
import { bitcoin, closeMenuFromOutside } from './components/Events/handleTags'
import User from './components/Others/User'
import { closeLoginFromOutside } from './components/Events/input'

function App() {
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

  window.addEventListener('load', handleHeader)
  window.addEventListener('load', changeImage)

  window.addEventListener('load', bitcoin)
  window.addEventListener('load', highLighter)

  window.addEventListener('load', handleTop)
  window.addEventListener('load', faq)

  window.addEventListener('click', closeMenuFromOutside)
  window.addEventListener('click', closeLoginFromOutside)

  return (
    <>
      <Header/>

      <main>
        {/* <Home/> */}
        {/* <About/> */}
        <History/>
        {/* <Newsletter/> */}
      </main>
      
      <button className='subscribe'>
        <img src={ Subscribe }/>
      </button>

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
