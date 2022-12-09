/* react */
import React from "react"
import { Link } from "react-router-dom"
/* css */
import styles from './header.module.css'


export default function Header({picture,linkPicture,arrayNav,formatting}) {
  /* exemple formatting = "smallHeader"  */
  return (
    <header className={`${styles.container__header} ${styles[formatting]}`}>
      { picture &&
      <Link to={linkPicture}>
        <img className={`${styles.header__logo} ${styles[formatting]}`} src={picture} alt="Logo" />
      </Link> 
      }
      <nav>
        <ul className={styles.header__nav__ul}>
        {arrayNav.map((nav, index) => (
          <li className={styles["header__nav__ul--li"]} key={`${index}-${nav.linkNav}`}><Link className="link" to={nav.linkNav}>{nav.titleNav}</Link></li> 
        ))}
        </ul>
      </nav>   
    </header>
  )
}