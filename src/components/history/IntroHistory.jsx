import React from 'react'
import Jwst from '../../assets/imgs/7-historia/1.jpg'

const IntroHistory = () => {
  return (

    <>
      <img src={ Jwst } className='main-history'/>

      <article className='intro'>
        <div>
          <span>History</span>
          <h1>Telescópio Espacial James Webb: o arqueólogo das estrelas</h1>

          <p>Saiba um pouco sobre o telescópio desenvolvido em conjunto pela NASA, a Agência Espacial Europeia (ESA) e a Agência Espacial Canadense (CSA).</p>
        </div>
      </article>

    </>
  )
}

export default IntroHistory
