import React from 'react'

import Liga from '../../assets/imgs/3-sobre/6.jpg'
import Abastecedor from '../../assets/imgs/3-sobre/7.jpg'
import Engenharia from '../../assets/imgs/3-sobre/8.jpg'

import Tec from '../../assets/imgs/3-sobre/9.jpg'
import Aliens from '../../assets/imgs/3-sobre/10.jpg'

const Exploration = () => {
  return (

    <article className='nn s-c bla'>
      <div>
        <a href="https://www.northropgrumman.com/" target='_blank' className='dd'>
          <li><img src={ Liga }/></li>

          <h2>Liga própria</h2>
          <p>
            O ônibus espacial que levou o JWST
          </p>

          <p className='war'>Saiba mais</p>
        </a>

        <a href="https://www.northropgrumman.com/" target='_blank'>
          <li><img src={ Abastecedor }/></li>

          <h2>Abastecedor</h2>
          <p>
            Vestindo para o sucesso da missão
          </p>

          <p className='war'>Saiba mais</p>
        </a>

        <a href="https://www.northropgrumman.com/" target='_blank'>
          <li><img src={ Engenharia }/></li>

          <h2>Engenharia</h2>
          <p>
            O JWST Sunshield toma sua forma
          </p>

          <p className='war'>Saiba mais</p>
        </a>

        <a href="https://www.northropgrumman.com/" target='_blank'>
          <li><img src={ Tec }/></li>

          <h2>Tecnologia</h2>
          <p>
            A tecnologia do James Webb
          </p>

          <p className='war'>Saiba mais</p>
        </a>

        <a href="https://www.northropgrumman.com/" target='_blank' className='dd'>
          <li><img src={ Aliens }/></li>

          <h2>Aliens</h2>
          <p>
            Vida em outros planetas?
          </p>

          <p className='war'>Saiba mais</p>
        </a>
      </div>
    </article>

  )
}

export default Exploration