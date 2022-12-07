/* react */
import React from "react"
import { Link } from "react-router-dom" //NavLink 
/* css */
import './header.css'



export default function Header({picture,linkPicture,arrayNav,formatting}) {
  /* exemple formatting = "smallHeader"  */
  return (
    <header className={`container__header ${formatting}`}>
      { picture &&
        <Link to={linkPicture}>
        <img className={`header__logo ${formatting}`} src={picture} alt="Logo" />
      </Link> 
      }
      <nav>
        <ul className="header__nav__ul">
        {arrayNav.map((nav, index) => (
          <li className="header__nav__ul--li" key={`${index}-${nav.linkNav}`}><Link className="link" to={nav.linkNav}>{nav.titleNav}</Link></li> 
        ))}
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