import React from 'react'
import { Link } from 'react-scroll'
import Jws from '../assets/imgs/1-home/1-background-jws.jpg'

import Intro from './Home/Intro'
import Advantages from './Home/Advantages'

import Faq from './Home/Faq'
import Stories from './Home/Stories'
import Dados from './Home/Dados'

import SlideHome from './Home/SlideHome'
import Contact from './Home/Contact'

const Home = () => {
  return (
    <>
      <img src={ Jws } className='background-jws'/>

      <section className='presentation'>
        <article>
          <h1>Telescópio espacial James Webb</h1>

          <span>Confira os avanços e descobertas que o JWS realizou até o momento</span>

          <Link activeClass="active"
            to='intro'
            spy={ true }
            smooth={ true }
            offset={ 40 }
            duration={ 600 }
            className='link-scroll'>
              <button>
                <div></div>
                <div></div>
              </button>
          </Link>

        </article>
      </section>

      <Intro/>
      <Advantages/>

      <Faq/>
      <Stories/>
      <Dados/>

      <SlideHome/>
      <Contact/>
    </>

  )
}

export default Home
