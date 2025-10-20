import React from 'react'


import "remixicon/fonts/remixicon.css";

import { BrowserRouter ,Route,Routes} from 'react-router-dom'
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import OurApps from './pages/OurApps';



const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home/> }></Route>
        <Route path='/about' element={<AboutUs/>}></Route>
         <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/apps' element={<OurApps/>}></Route>
      </Routes>
      </BrowserRouter>

      
    </div>
  )
}

export default App
