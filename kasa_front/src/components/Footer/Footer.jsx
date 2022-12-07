/*  react  */
import React from "react"
/* css  */
import './footer.css'

export default function Footer({picture,text,formatting}) {
  return (   /* exemple formatting = "mediumFooter"  */
    <footer className={`container__footer ${formatting}`}>
      { picture && <img src={picture} className={`footer__logo ${formatting}`} alt="Logo" /> } 
      <p className="footer__p">{text}</p>
    </footer>
  )
}
