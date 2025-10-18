import React from 'react'

import Heroo from './components/Heroo'
import WhyWellnex from './pages/WhyWellnex'
import FlagshipApps from './components/FlagshipApps'
import FutureVision from './components/FutureVision'
import Testimonials from './components/Testinomials'
import Footer from './components/Footer'
import "remixicon/fonts/remixicon.css";


const App = () => {
  return (
    <div>
      <Heroo/>
      <WhyWellnex/>
      <FlagshipApps/>
      <FutureVision/>
      <Testimonials/>
      <Footer/>

      
    </div>
  )
}

export default App
