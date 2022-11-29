/* import react  */
import React from "react";
import { Link } from "react-router-dom";
/* import image et css  */
import './error.css'

export default function Error() {
  return (
    <main className="error">
        <h1 className="error__title">404</h1>      
        <p className="error__text">Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/" className="error__link">
		 Retourner sur la page d’accueil
	    </Link>
    </main>
  );
}