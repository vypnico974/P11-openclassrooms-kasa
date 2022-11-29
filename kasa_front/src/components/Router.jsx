/* react */
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Error from '../pages/Error/error'
import Home from '../pages/Home/Home'

export default function Router() {
    return (
      <div>          
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    )
  }
  
  
  function About() {
    return (
      <>
        <main>
          <h2>Who are we?</h2>
          <p>
            That feels like an existential question, don't you
            think?
          </p>
        </main>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </>
    );
  }
  
//   function Error() {
//     return (
//       <>
//         <main>
//           <h2>Erreur</h2>
//           <p>
//             Oups... Cette page n'existe pas
//           </p>
//         </main>
//         <nav>
//           <Link to="/">Home</Link>
//         </nav>
//       </>
//     );
//   }