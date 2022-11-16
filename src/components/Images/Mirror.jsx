import React from 'react'

import { closeScreenAlbum, nextImageAlbum, openScreenAlbum, prevImageAlbum } from '../Events/handleFullImages'
import X from '../../assets/svg/3-login-share-newsletter/6-close.svg'

import One from '../../assets/imgs/4-imagens/2-espelho/1.jpg'
import Two from '../../assets/imgs/4-imagens/2-espelho/2.jpg'

import Three from '../../assets/imgs/4-imagens/2-espelho/3.jpg'
import Four from '../../assets/imgs/4-imagens/2-espelho/4.jpg'

const Mirror = () => {
  return (
    <>
      <article className='album'>
        <header>
          <h1>Espelho</h1>
          <span></span>
        </header>

        <div className='container-images' onClick={ openScreenAlbum }>
          <img src={ One }/>
          <img src={ Two }/>

          <img src={ Three }/>
          <img src={ Four }/>
        </div>
      </article>

      <div className='fullscreen-image' id='fullscreen-image' onClick={ closeScreenAlbum }>
        <img src={ X } className='close' id='close' onClick={ closeScreenAlbum }/>

        <article>
          <button onClick={ prevImageAlbum }></button>

          <img src={ One }/>
          <img src={ Two }/>
          <img src={ Three }/>
          <img src={ Four }/>

          <button onClick={ nextImageAlbum }></button>
        </article>

      </div>
    </>

  )
}

export default Mirror
