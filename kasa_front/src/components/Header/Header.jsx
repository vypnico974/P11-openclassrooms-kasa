/* react */
import React from "react";
import { Link, NavLink } from "react-router-dom";
/* logo */
import logo from "../../assets/kasa_logo.svg";
/* css */
import cssClass from './header.css'



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
          
          <li className="header__nav__ul--li">
          <NavLink
          to="/"
          className={({ isActive }) => {
            return isActive ? cssClass.ActiveLink : cssClass.nonActiveLink;
          }}
        >
          Accueil
        </NavLink>
        </li>
        {/* <li className="header__nav__ul--li">
        <NavLink
          to="/about"
          className={({ isActive }) => {
            return isActive ? classeCss.activeLink : classeCss.nonActiveLink;
          }}
        >
          A Propos
        </NavLink>
        </li> */}
      </ul>
      </nav>
    </header>
  )
}