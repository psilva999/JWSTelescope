import React from 'react'

import SlideNews from './News/SlideNews'
import Destaques from './News/Destaques'

import Podcasts from './News/Podcasts'
import Curiosidades from './News/Curiosidades'

import Atlas from './News/Atlas'
import LastestNews from './News/LastestNews'

const News = () => {
  return (

    <section className='news'>
      <SlideNews/>
      <Destaques/>

      <Podcasts/>
      <Curiosidades/>

      <Atlas/>
      <LastestNews/>
    </section>

  )
}

export default News
