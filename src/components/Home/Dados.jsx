import React from 'react'

const Dados = () => {
  return (
    <section className='dados'>
      <h1>Dados</h1>

      <article>
        <div>
          <h2>Custo</h2>
          <span><a className='background-detail n-b'>$10 bilhões</a></span>
        </div>

        <div>
          <h2>Potência</h2>
          <span><a className='background-detail n-y'>2000 watts</a></span>
        </div>

        <div>
          <h2>Diâmetro</h2>
          <span><a className='background-detail m-g'>6.5 metros</a></span>
        </div>
      </article>

      <article>
        <div>
          <h2>Armazenamento</h2>
          <span><a className='background-detail n-b-2'>68 GB</a></span>
        </div>

        <div className='years'>
          <h2>Vida útil</h2>
          <span><a className='background-detail n-y-2'>+10 anos</a></span>
        </div>

        <div>
          <h2>Alcance</h2>
          <span><a className='background-detail m-g-2'>+4 bilhões de ly</a></span>
        </div>

      </article>
    </section>

  )
}

export default Dados
