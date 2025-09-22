import React from 'react'
import Hero from '../components/Hero'
import HowTo from '../components/HowTo'
import About from '../components/About'

const homepage = () => {
  return (
    <div className='min-h-screen'>
      <Hero />
      <About />
      <HowTo />
    </div>
  )
}

export default homepage