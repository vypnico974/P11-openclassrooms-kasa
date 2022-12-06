/* react */
import {React,Fragment } from "react"; //useEffect, useState
/* composants  */
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Router from './components/Router'
/* css  */
import './styles/normalize.css'
import './styles/global.css'

/* logo */
import logoHeader from "./assets/kasa_logo.svg";
import logoWhite from "./assets/kasa_logo_white.svg";

const arrayNav = [{ linkNav: "/", titleNav: "Accueil" },
                  { linkNav: "/about", titleNav: "A Propos" }]


export default function App() {
  return (
    <Fragment>     
      <Header picture={logoHeader} linkPicture="/" arrayNav={arrayNav} formatting="" />  {/* en-tête identique pour chaque page */}
      <Router />     
      <Footer picture={logoWhite} text="© 2020 Kasa. All rights reserved"
        formatting="" />  {/* pied de page identique pour chaque page */}
    </Fragment>
  )
}

