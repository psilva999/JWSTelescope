import React from 'react'

import IntroHistory from './History/IntroHistory'
import Summary from './History/Summary'
import Start from './History/Start'

import Ideas from './History/Ideas'
import Building from './History/Building'
import Location from './History/Location'

import Mission from './History/Mission'
import Launch from './History/Launch'
import Infografico from './History/Infografico'

const History = () => {
  return (

    <section className='history'>
      <IntroHistory/>
      <Summary/>
      <Start/>

      <Ideas/>
      <Building/>
      <Location/>

      <Mission/>
      <Launch/>
      <Infografico/>
    </section>

  )
}

export default History
