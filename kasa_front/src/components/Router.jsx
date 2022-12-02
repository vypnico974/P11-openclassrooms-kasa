/* react */
import * as React from "react";
import { Routes, Route } from "react-router-dom";
/* pages  */
import Error from '../pages/Error/error'
import Home from '../pages/Home/home'
import Rental from '../pages/Rental/rental'
import About from '../pages/About/about'


export default function Router() {
    return (
      <div>          
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/rental/:currentId" element={<Rental />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    )
  }
  
  
 