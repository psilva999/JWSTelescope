import React from 'react'
import { Link } from 'react-scroll'

import { handleSummaryFixed } from '../Events/handleScroll'

import { ReactComponent as Ideas } from '../../assets/svg/6-summary/1.svg'
import { ReactComponent as Build } from '../../assets/svg/6-summary/2.svg'

import { ReactComponent as Location } from '../../assets/svg/6-summary/3.svg'
import { ReactComponent as Mission } from '../../assets/svg/6-summary/4.svg'
import { ReactComponent as Launch } from '../../assets/svg/6-summary/5.svg'

const Summary = () => {
  return (
    <>

      <ul className='summary'>  <h1>Sumário</h1>
        <Link activeClass="active"
          to='ideas'
          spy={ true }
          smooth={ true }
          offset={ -75 }
          duration={ 600 }
          className='link-scroll'>
          <li> <Ideas/> <span>Primeiras ideias</span> </li>
        </Link>

        <Link activeClass="active"
          to='build'
          spy={ true }
          smooth={ true }
          offset={ -75 }
          duration={ 600 }
          className='link-scroll'>
          <li> <Build/> <span>Planejamento e contrução</span> </li>
        </Link>
        
        <Link activeClass="active"
          to='location'
          spy={ true }
          smooth={ true }
          offset={ -75 }
          duration={ 600 }
          className='link-scroll'>
          <li> <Location className='location-svg'/> <span>Localização</span> </li>
        </Link>

        <Link activeClass="active"
          to='mission'
          spy={ true }
          smooth={ true }
          offset={ -75 }
          duration={ 600 }
          className='link-scroll'>
          <li> <Mission/> <span>Objetivo da missão</span> </li>
        </Link>

        <Link activeClass="active"
          to='launch'
          spy={ true }
          smooth={ true }
          offset={ -75 }
          duration={ 600 }
          className='link-scroll'>
          <li> <Launch/> <span>Lançamento</span> </li>
        </Link>
      </ul>

      <div className='summary-fixed'>
        <Link activeClass="active"
          to='ideas'
          spy={ true }
          smooth={ true }
          offset={ -75 }
          duration={ 600 }
          className='link-scroll'>

          <button onClick={ handleSummaryFixed }><Ideas/></button> 
        </Link>

        <Link activeClass="active"
          to='build'
          spy={ true }
          smooth={ true }
          offset={ -75 }
          duration={ 600 }
          className='link-scroll'>

          <button onClick={ handleSummaryFixed }><Build/></button>
        </Link>

        <Link activeClass="active"
          to='location'
          spy={ true }
          smooth={ true }
          offset={ -75 }
          duration={ 600 }
          className='link-scroll'>
          
          <button onClick={ handleSummaryFixed }><Location/></button>
        </Link>

        <Link activeClass="active"
          to='mission'
          spy={ true }
          smooth={ true }
          offset={ -75 }
          duration={ 600 }
          className='link-scroll'>
            
          <button onClick={ handleSummaryFixed }><Mission/></button>
        </Link>

        <Link activeClass="active"
          to='launch'
          spy={ true }
          smooth={ true }
          offset={ -75 }
          duration={ 600 }
          className='link-scroll'>

          <button onClick={ handleSummaryFixed }><Launch/></button>
        </Link>

      </div>
    </>

  )
}

export default Summary
