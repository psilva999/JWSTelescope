import React from 'react'

import Elt from '../../assets/imgs/2-newsletter/1-elt.jpg'
import Hubble from '../../assets/imgs/2-newsletter/2-hubble.jpg'
import Sagan from '../../assets/imgs/2-newsletter/3-sagan.jpg'

const Articles = () => {
  return (
    <article>
      <div>
        <h1>Nossos artigos</h1>
        <span>Leia as edições anteriores do boletim mensal para amantes da astronomia.</span>
      </div>

      <div>
        <a href="https://www.eltnews.gr/" target='_blank'>
          <li> <img src={ Elt }/> </li>
          <h1>ELT | ESO - The extremely Large Telescope</h1>
          <span>Confira as novidades sobre o ELT que será lançado em 2027.</span>
        </a>
        
        <a href="https://revistagalileu.globo.com/Ciencia/Espaco/noticia/2021/06/entenda-o-problema-que-fez-o-telescopio-hubble-parar-de-funcionar.html" target='_blank'> 
          <li> <img src={ Hubble }/> </li>
          <h1>Hubble - o projeto que quase não deu certo</h1>
          <span>Saiba o motivo que fez com quê o telescopio quase não funcionasse</span>
        </a>
        
        <a href="https://www.natgeo.pt/historia/quem-foi-carl-sagan" target='_blank'> <li> <img src={ Sagan }/> </li>
          <h1>Carl Sagan - o homem que inspirou uma geração</h1>
          <span>A história de um dos maiores influenciadores científicos</span>
        </a>

      </div>
    </article>

  )
}

export default Articles
