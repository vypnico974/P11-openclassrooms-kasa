/* react  */
import React from "react";
/* css  */
import './banner.css'

/*composant react :  state (état, données)
                     comportements
                     affichage(render) */
export default function Banner({textContent, imgSrc, imgAlt}) {
    return (
        <div className="banner">
             <div className="banner__cover"></div>
             <img src={imgSrc} alt={imgAlt} className="banner__background" />
              {textContent ? <h2 className="banner__text">{textContent}</h2> : null}
        </div>
    );
}