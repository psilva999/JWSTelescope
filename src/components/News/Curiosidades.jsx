import React from 'react'

import Save from '../../assets/svg/4-news/3-save.svg'

import Red from '../../assets/imgs/5-news/3-curiosidades/1.jpg'
import Wild from '../../assets/imgs/5-news/3-curiosidades/2.jpg'

import Milho from '../../assets/imgs/5-news/3-curiosidades/3.jpg'
import Arroz from '../../assets/imgs/5-news/3-curiosidades/4.jpg'

import Aves from '../../assets/imgs/5-news/3-curiosidades/5.jpg'
import Habitat from '../../assets/imgs/5-news/3-curiosidades/6.jpg'

const Curiosidades = () => {
  return (

    <article className='curiosidades'>
      <header> <h1>Curiosidades</h1>
        <button>Confira todos os posts</button>
      </header>

      <section>
        <div> <li><img src={ Red }/> </li>
          <a href="https://socientifica.com.br/paises-da-antiga-uniao-sovietica/" target='_blank'>
            <h1>Lista de países da antiga União Soviética</h1>
            <span>2022</span>
          </a>
          
          <img src={ Save }/>
        </div>

        <div> <li><img src={ Wild }/> </li>
          <a href="https://socientifica.com.br/paises-que-mais-protegem-os-animais-selvagens/" target='_blank'>
            <h1>Falando um pouco sobre a vida selvagem</h1>
            <span>2022</span>
          </a>
          
          <img src={ Save }/>
        </div>

        <div> <li><img src={ Milho }/> </li>
          <a href="https://socientifica.com.br/os-10-paises-que-mais-produzem-milho/" target='_blank'>
            <h1>Os 10 países que mais produzem milho</h1>
            <span>2022</span>
          </a>
          
          <img src={ Save }/>
        </div>

        <div> <li><img src={ Arroz }/> </li>
          <a href="https://socientifica.com.br/paises-que-mais-comem-arroz/" target='_blank'>
            <h1>Os 10 países que mais comem arroz</h1>
            <span>2022</span>
          </a>
          
          <img src={ Save }/>
        </div>

        <div> <li><img src={ Aves }/> </li>
          <a href="https://socientifica.com.br/as-aves-conseguem-voar-acima-das-nuvens/" target='_blank'>
            <h1>As aves conseguem voar acima das nuvens?</h1>
            <span>2022</span>
          </a>
          
          <img src={ Save }/>
        </div>

        <div> <li><img src={ Habitat }/> </li>
          <a href="https://socientifica.com.br/estamos-perdendo-nossos-habitats-marinhos/" target='_blank'>
            <h1>Como proteger nossos habitats marinhos?</h1>
            <span>2022</span>
          </a>
          
          <img src={ Save }/>
        </div>
      </section>

    </article>
  )
}

export default Curiosidades
