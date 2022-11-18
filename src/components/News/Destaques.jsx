import React from 'react'

import Save from '../../assets/svg/4-news/3-save.svg'

import Espelhos from '../../assets/imgs/5-news/1-destaques/1.jpg'
import Betel from '../../assets/imgs/5-news/1-destaques/2.jpg'

import Telescopio from '../../assets/imgs/5-news/1-destaques/3.jpg'
import Planetas from '../../assets/imgs/5-news/1-destaques/4.jpg'

import Materia from '../../assets/imgs/5-news/1-destaques/5.jpg'
import Hycean from '../../assets/imgs/5-news/1-destaques/6.jpg'

const Destaques = () => {
  return (
    <article className='destaques winged'>
      <header> <h1>Destaques</h1>
        <button>Confira todos os posts</button>
      </header>

      <section>
        <a href='https://socientifica.com.br/veja-o-telescopio-espacial-james-webb-abrir-seus-enormes-espelhos/' target='_blank'>
          <li><img src={ Espelhos }/></li>

          <div>
            <h1>Veja o telescópio espacial James Webb abrir seus enormes espelhos</h1>
            <img src={ Save } className='save'/> 
          </div>

          <span>2022</span>
        </a>

        <a href='https://socientifica.com.br/betelgeuse-esta-perto-de-sua-morte-mas-esta-se-recuperando-de-seu-escurecimento/' target='_blank'>
          <li><img src={ Betel }/></li>

          <div>
            <h1>Betelgeuse está se recuperando de seu escurecimento</h1>
            <img src={ Save } className='save'/> 
          </div>
          <span>2022</span>
        </a>

        <a href='https://socientifica.com.br/como-escolher-o-seu-primeiro-telescopio-amador/' target='_blank'>
          <li><img src={ Telescopio }/></li>

          <div>
            <h1>Como escolher o seu primeiro telescópio amador</h1>
            <img src={ Save } className='save'/> 
          </div>
          <span>2022</span>
        </a>

        <a href='https://socientifica.com.br/5-000-planetas-fora-do-sistema-solar-ja-sao-conhecidos/' target='_blank'>
          <li><img src={ Planetas }/></li>

          <div>
            <h1>5000 planetas fora do sistema solar já são conhecidos</h1>
            <img src={ Save } className='save'/> 
          </div>
          <span>2022</span>
        </a>

        <a href='https://socientifica.com.br/materia-escura/' target='_blank'>
          <li><img src={ Materia }/></li>

          <div>
            <h1>A matéria escura é mais fria do que pensávamos</h1>
            <img src={ Save } className='save'/> 
          </div>
          <span>2022</span>
        </a>

        <a href='https://socientifica.com.br/hycean-uma-nova-classe-de-exoplanetas-onde-a-vida-alienigena-pode-existir/' target='_blank'>
          <li><img src={ Hycean }/></li>

          <div>
            <h1>Hycean: uma nova classe de exoplanetas onde a vida alienígena pode existir</h1>
            <img src={ Save } className='save'/> 
          </div>
          <span>2022</span>
        </a>

      </section>
    </article>
    
  )
}

export default Destaques
