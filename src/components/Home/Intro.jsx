import React from 'react'
import Mirror from '../../assets/imgs/1-home/2-mirror.jpg'

const Intro = () => {
  return (
    <section className='intro' id='intro'>
      <p>
        O telescópio espacial desenvolvido em conjunto pela NASA, a Agência Espacial Europeia e a Canadense, tem a capacidade de observar a formação das primeiras galáxias e estrelas, estudar a evolução das galáxias e ver os processos de formação das estrelas e dos planetas.
      </p>

      <img src={ Mirror }/>

      <p>
        Este telescópio tem a intenção de substituir parcialmente as funções do telescópio espacial Hubble. Sua massa equivale a aproximadamente metade do Hubble, porém seu espelho primário possui um diâmetro 2,5 vezes maior e uma área de espelho seis vezes maior que a do Hubble, permitindo captar muito mais luz. 
      </p>
    </section>

  )
}

export default Intro