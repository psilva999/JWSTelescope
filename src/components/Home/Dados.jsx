import React from 'react'

const Dados = () => {
  return (
    <section className='dados'>
      <h1>Dados</h1>

      <article>
        <div>
          <h2>Custo</h2>
          <span>$10 bilhões</span>
        </div>

        <div>
          <h2>Potência</h2>
          <span>2000 watts</span>
        </div>

        <div>
          <h2>Diâmetro</h2>
          <span>6.5 metros</span>
        </div>
      </article>

      <article>
        <div>
          <h2>Armazenamento</h2>
          <span>68 GB</span>
        </div>

        <div className='years'>
          <h2>Vida útil</h2>
          <span>+10 anos</span>
        </div>

        <div>
          <h2>Alcance</h2>
          <span>+4 bilhões de ly</span>
        </div>

      </article>
    </section>

  )
}

export default Dados
