import React from 'react'

import Min1 from '../../assets/imgs/1-home/2-slides/1-min/1.png'
import Min2 from '../../assets/imgs/1-home/2-slides/1-min/2.png'
import Min3 from '../../assets/imgs/1-home/2-slides/1-min/3.png'

import Min4 from '../../assets/imgs/1-home/2-slides/1-min/4.png'
import Min5 from '../../assets/imgs/1-home/2-slides/1-min/5.png'
import Min6 from '../../assets/imgs/1-home/2-slides/1-min/6.png'

import Normal1 from '../../assets/imgs/1-home/2-slides/1.jpg'
import Normal2 from '../../assets/imgs/1-home/2-slides/2.jpg'
import Normal3 from '../../assets/imgs/1-home/2-slides/3.jpg'

import Normal4 from '../../assets/imgs/1-home/2-slides/4.jpg'
import Normal5 from '../../assets/imgs/1-home/2-slides/5.jpg'
import Normal6 from '../../assets/imgs/1-home/2-slides/6.jpg'


const SlideHome = () => {
  return (
    <section className='slide-home'>
      <div>
        <img src={ Min1 } className='active'/>
        <img src={ Min2 }/>

        <img src={ Min3 }/>
        <img src={ Min4 }/>

        <img src={ Min5 }/>
        <img src={ Min6 }/>
      </div>

      <article>
        <img src={ Normal1 } className='active'/>
        <img src={ Normal2 }/>

        <img src={ Normal3 }/>
        <img src={ Normal4 }/>

        <img src={ Normal5 }/>
        <img src={ Normal6 }/>
      </article>

      <button className='more'>SAIBA MAIS</button>
    </section>
  )
}

export default SlideHome
