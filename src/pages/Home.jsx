import React from 'react'

import Heroo from '../components/Heroo'
import WhyWellnex from '../components/WhyWellnex'
import OurVision from '../components/OurVision'
import FlagshipApps from '../components/FlagshipApps'
import FutureVision from '../components/FutureVision'
import Testimonials from '../components/Testinomials'

import ProgressBar from '../components/ProgressBar'
import { Parallax } from 'react-scroll-parallax';

const Home = () => {
  
  return (
    <>
    <ProgressBar/>
      <Heroo/>
     
    
        <div style={{ position: 'relative', minHeight: '100vh' }}>
        {/* Sticky WhyWellnex */}
        <div style={{ position: 'sticky', top: 0, zIndex: 10 }}>
          <WhyWellnex />
        </div>

        {/* OurVision scrolls over WhyWellnex */}
        <div style={{ position: 'relative', marginTop: '-1vh', zIndex: 20 }}>
          <OurVision />
        </div>
      </div>
         

      <FlagshipApps/>
      <FutureVision/>
      <Testimonials/>
   
    </>
  )
}

export default Home
