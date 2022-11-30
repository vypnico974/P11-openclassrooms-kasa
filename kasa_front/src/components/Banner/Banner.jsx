/* react  */
import React from "react";
/* css  */
import './banner.css'

/*composant react :  state (état, données)
                     comportements
                     affichage(render) */
export default function Banner({textContent}) {
    return (
        <div className="banner">
             <div className="banner__cover"></div>
             <div className="banner__background" ></div>
              {textContent ? <h2 className="banner__text">{textContent}</h2> : null}
        </div>
    );
}