/* import react  */
import React from "react";
/* import image et css  */
import logoWhite from "../assets/kasa_logo_white.svg";
import '../styles/footer.css'

export default function Footer() {
  return (
    <footer>
      <div className="footer">
      <img src={logoWhite} alt="Logo du site Kasa" />
      <p>© 2020 Kasa. All rights reserved</p>

      </div>
      
    </footer>
  );
}