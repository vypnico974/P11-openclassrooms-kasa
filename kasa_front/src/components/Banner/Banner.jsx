/* react  */
import React from "react";
/* css  */
import './banner.css'

/*composant react :  state (état, données)
                     comportements
                     affichage(render) */
export default function Banner({type, textContent}) {
    return (
        <div className="banner">
            <div className="banner__cover"></div>
                <div className={`banner__background ${type}`} >

                    {/* <picture>
                    <source media="(max-width: 644px)" srcset="../../" />
                    <source media="(min-width: 645px)" srcset="../../assets/home-background.png" />
                    <img src="../../assets/home-background.png" alt="Test" />
                    </picture> */}

                </div>
                 {textContent ? <h2 className="banner__text">{textContent}</h2> : null}
        </div>
    );
}