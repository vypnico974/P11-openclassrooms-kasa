/* import react  */
import React from "react";
/* import image et css  */
import logoWhite from "../../assets/kasa_logo_white.svg";
import './footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <img src={logoWhite} className="footer__logo" alt="Logo du site Kasa" />
      <p className="footer__p">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}