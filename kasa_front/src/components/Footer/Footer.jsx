/* import react  */
import React from "react";
/* import image et css  */
import './footer.css'

export default function Footer({picture,text,formatting}) {
  return (   /* exemple formatting = "medium"  */
    <footer className={`container__footer ${formatting}`}>
      { picture && <img src={picture} className={`footer__logo ${formatting}`} alt="Logo" /> } 
      <p className="footer__p">{text}</p>
    </footer>
  );
}
