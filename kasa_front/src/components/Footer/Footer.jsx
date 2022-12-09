/*  react  */
import React from "react"
/* css  */
import styles from './footer.module.css'

export default function Footer({picture,text,formatting}) {
  return (   /* exemple formatting = "mediumFooter"  */
    <footer className={`${styles.container__footer} ${styles[formatting]}`}>
      { picture && <img src={picture} className={`${styles.footer__logo} ${styles[formatting]}`} alt="Logo" /> } 
      <p className={styles.footer__p}>{text}</p>
    </footer>
  )
} 
