/* react */
import React from "react";
import { Link } from "react-router-dom";
/* logo */
import logo from "../../assets/kasa_logo.svg";
/* css */
import './header.css'

export default function Header() {
  return (
    <header>
      <Link to={"/"}>
        <img className="header__logo" src={logo} alt="Logo Kasa" />
      </Link>
        <nav>
          <ul className="header__nav__ul">
          <li className="header__nav__ul--li"><Link className="link" to={"/"}>Accueil</Link></li>
          <li className="header__nav__ul--li"><Link className="link" to={"/about"}>A Propos</Link></li>
        </ul>
      </nav>
    </header>
  )
}