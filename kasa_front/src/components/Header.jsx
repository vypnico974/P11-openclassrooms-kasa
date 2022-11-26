/* import react routeur*/
import React from "react";
//import { Link } from "react-router-dom";
/* import logo */
import logo from "../assets/kasa_logo.svg";

export default function Header() {
    return (
      <header>
        {/* <Link to={"/"}> */}
          <img className="a_faire_logo" src={logo} alt="Logo du site Kasa" />
        {/* </Link> */}
        <nav className="a_faire">
          <ul>
            <li>
              {/* <Link to={"/"}> */}
                Accueil
                {/* </Link> */}
            </li>
            <li>
              {/* <Link to={"/about"}> */}
                 à propos
                 {/* </Link> */}
            </li>
          </ul>
        </nav>
      </header>
    );
  }