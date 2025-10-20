import React from 'react'
import Heroo from '../components/Heroo'
import WhyWellnex from './WhyWellnex'
import OurVision from '../components/OurVision'
import FlagshipApps from '../components/FlagshipApps'
import FutureVision from '../components/FutureVision'
import Testimonials from '../components/Testinomials'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import ProgressBar from '../components/ProgressBar'

const Home = () => {
  return (
    <>
    <ProgressBar/>
      <Heroo/>
     
    
      <WhyWellnex/>
      <OurVision/>
      <FlagshipApps/>
      <FutureVision/>
      <Testimonials/>
      <Footer/>
    </>
  )
}

export default Home
