/* react */
import {React,Fragment } from "react"; //useEffect, useState
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

//   const [data, setData] = useState(null)
// const [loading, setLoading] = useState(true)
// const [error, setError] = useState(null)  

// useEffect(() => {
//   fetch('../../datas/data.json')
//   .then((response) => {
//     if(!response.ok) {
//       throw new Error(response.status)
//     }
//     return response.json()
//   })
//   .then((json) => {
//     setData(json)
//     setError(null)
//   })
//   .catch((err) => {
//     setError(err.message)
//     setData(null)
//   })
//   .finally(setLoading(false))
// }, [])

// const [apartmentsList, setApartmentsList] = useState([])


  return (
    <Fragment>
      {/* en-tête identique pour chaque page */}
      <Header /> 
      {/* {loading && <p>Veuillez patienter...</p>}
      {error && <p>${error}</p>} */}

      <Router />
      {/* pied de page identique pour chaque page */}
      <Footer />
    </Fragment>
  )
}

