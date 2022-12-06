/* react  */
import React from "react";
/* css  */
import './banner.css'

export default function Banner({source,source_mobile,type, textContent}) {
    /* exemple type = "apropos", type = "accueil"  */
    return (
        <div className="banner">
            <div className={`banner__cover ${type}`}></div>
                <picture>
                    <source media="(max-width: 644px)" srcSet={source_mobile} />
                    <source media="(min-width: 645px)" srcSet={source} />
                    <img className={`banner__background ${type}`} src={source} alt="Images décoratives" />
                </picture>
                 {textContent && <h2 className="banner__text">{textContent}</h2> }
        </div>
    );
}