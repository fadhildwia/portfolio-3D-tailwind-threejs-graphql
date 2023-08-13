import React, { useEffect, useState } from 'react'
import { About, Contact, Experience, Feedbacks, Hero, Navbar, StarsCanvas, Tech, Works } from '../components'
import { getTechs } from '../services'

const HomePage = () => {
  const [technologiesData, setTechnologiesData] = useState()

  useEffect(() => {
    const fetching = async () => {
      const data = await getTechs()
      setTechnologiesData(data)
    }

    fetching()
  }, [])

  return (
    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech data={technologiesData} />
      <Works />
      <Feedbacks />
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  )
}

export default HomePage