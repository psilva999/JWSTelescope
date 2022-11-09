import React from 'react'

import Team from './About/Team'
import DeepDive from './About/DeepDive'
import Exploration from './About/Exploration'

const About = () => {
  return (

    <section className='about'>
      <Team/>
      <DeepDive/>
      <Exploration/>
    </section>
    
  )
}

export default About
