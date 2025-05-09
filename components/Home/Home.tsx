import React from 'react'
import Hero from './Hero/Hero'
import Destination from './Destination/Destination'
import Hotel from './Hotel/Hotel'
import WhyUs from './WhyUs/WhyUs'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Hero/>
      <Destination/>
      <Hotel/>
      <WhyUs/>
    </div>
  )
}

export default Home