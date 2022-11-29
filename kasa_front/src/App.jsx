/* react */
import * as React from "react";
/* composants  */
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Router from './components/Router'
/* css  */
import './styles/normalize.css'
import './styles/global.css'

/*composant react :
 state (état, données)
 comportements
 affichage(render)
*/
export default function App() {
  return (
    <div>
      {/* en-tête identique pour chaque page */}
      <Header />         
      <Router />
      {/* pied de page identique pour chaque page */}
      <Footer />
    </div>
  )
}

