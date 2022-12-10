/* react */
import * as React from "react"
import { Routes, Route } from "react-router-dom";
/* pages  */
import Error from '../pages/Error/error'
import Home from '../pages/Home/home'
import Rental from '../pages/Rental/rental'
import About from '../pages/About/about'

/* Les différents routes du site  */
export default function Router() {
    return (
      <div>          
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/rental/:currentId" element={<Rental />} />
          {/* path="*" lorsque l'URL ne correspond à aucune route déclaré */}
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    )
  }
  
  
 