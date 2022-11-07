import React from 'react'

import Save from '../../assets/svg/4-news/3-save.svg'
import Materia from '../../assets/imgs/5-news/4-ultimas/1.jpg'
import Universo from '../../assets/imgs/5-news/4-ultimas/2.jpg'

import Aves from '../../assets/imgs/5-news/4-ultimas/3.jpg'
import Desmatamento from '../../assets/imgs/5-news/4-ultimas/4.jpg'
import Educa from '../../assets/imgs/5-news/4-ultimas/5.jpg'

const LastestNews = () => {
  return (
    <article className='ultimas'>
      <header>
        <h1>Últimas</h1>
        <button>Confira todos os posts</button>
      </header>

      <section>
        <div>
          <li><img src={ Materia }/> </li>

          <a href="https://socientifica.com.br/cientistas-criam-estado-da-materia-com-duas-dimensoes-de-tempo/" target="_blank">
            <h1>Estado da matéria com duas dimensões de tempo</h1>
            <span>2022</span> </a>

          <img src={ Save }/>
        </div>

        <div>
          <li><img src={ Universo }/> </li>

          <a href="https://socientifica.com.br/7-coisas-mais-aterrorizantes-do-espaco/" target="_blank">
            <h1>Os eventos mais aterrorizantes do universo</h1>
            <span>2022</span> </a>

          <img src={ Save }/>
        </div>

        <div>
          <li><img src={ Aves }/> </li>

          <a href="https://socientifica.com.br/as-aves-conseguem-voar-acima-das-nuvens" target="_blank">
            <h1>As aves conseguem voar acima das nuvens?</h1>
            <span>2022</span> </a>

          <img src={ Save }/>
        </div>

        <div>
          <li><img src={ Desmatamento }/> </li>

          <a href="https://socientifica.com.br/10-razoes-para-parar-com-o-desmatamento/" target="_blank">
            <h1>10 razões para parar com o desmatamento</h1>
            <span>2022</span> </a>

          <img src={ Save }/>
        </div>

        <div>
          <li><img src={ Educa }/> </li>

          <a href="https://socientifica.com.br/paises-que-mais-investem-em-educacao/" target="_blank">
            <h1>Os 25 países que mais investem em educação</h1>
            <span>2022</span> </a>

          <img src={ Save }/>
        </div>
      </section>
    </article>
  )
}

export default LastestNews
