import React from 'react'

import Universe from '../../assets/imgs/5-news/universe.jpg'

const Atlas = () => {
  return (
    <article className='atlas'>
      <header> <h1>Atlas do universo</h1>
        <button>Aprofunde-se no universo</button>
      </header>

      <img src={ Universe }/>
    </article>
  )
}

export default Atlas
