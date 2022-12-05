/* react */
import {React,Fragment } from "react"; //useEffect, useState
/* composants  */
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Router from './components/Router'
/* css  */
import './styles/normalize.css'
import './styles/global.css'


export default function App() {
  return (
    <Fragment>     
      <Header />  {/* en-tête identique pour chaque page */}
      <Router />     
      <Footer />  {/* pied de page identique pour chaque page */}
    </Fragment>
  )
}

