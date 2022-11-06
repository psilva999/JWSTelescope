import React from 'react'

import Liga from '../../assets/imgs/3-sobre/6.jpg'
import Abastecedor from '../../assets/imgs/3-sobre/7.jpg'
import Engenharia from '../../assets/imgs/3-sobre/8.jpg'

import Tec from '../../assets/imgs/3-sobre/9.jpg'
import Aliens from '../../assets/imgs/3-sobre/10.jpg'

const Exploration = () => {
  return (
    <>
      <article>
        <a href="" target='_blank'>
          <li><img src={ Liga }/></li>

          <h1>Liga própria</h1>
          <p>
            O ônibus espacial que levou o JWST
          </p>

          <p><span>^</span>Saiba mais</p>
        </a>

        <a href="" target='_blank'>
          <li><img src={ Abastecedor }/></li>

          <h1>Abastecedor</h1>
          <p>
            O JWST Sunshield toma sua forma
          </p>

          <p><span>^</span>Saiba mais</p>
        </a>

        <a href="" target='_blank'>
          <li><img src={ Engenharia }/></li>

          <h1>Tecnologia</h1>
          <p>
            A tecnologia do James Webb
          </p>

          <p><span>^</span>Saiba mais</p>
        </a>

        <a href="" target='_blank'>
          <li><img src={ Tec }/></li>

          <h1>Engenharia</h1>
          <p>
            O JWST Sunsshield toma
          </p>

          <p><span>^</span>Saiba mais</p>
        </a>

        <a href="" target='_blank'>
          <li><img src={ Aliens }/></li>

          <h1>Aliens</h1>
          <p>
            Vida em outros planetas?
          </p>

          <p><span>^</span>Saiba mais</p>
        </a>
      </article>

      <article>
        <h1>Mais um passo na nossa <a>exploração espacial</a></h1>
      </article>
    </>

  )
}

export default Exploration