import React from 'react'

import Header from './components/Header'
import Home from './components/Home'

import { changeImage } from './components/Events/handleScroll'

function App() {
  window.addEventListener('scroll', changeImage)
  window.addEventListener('load', changeImage)

  return (
    <>
      <Header/>

      <main>
        <Home/>
      </main>
    </>
  )
}

export default App
