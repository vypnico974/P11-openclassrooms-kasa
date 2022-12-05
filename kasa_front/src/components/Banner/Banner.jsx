/* react  */
import React from "react";
/* css  */
import './banner.css'

export default function Banner({source,source_mobile,type, textContent}) {
    return (
        <div className="banner">
            <div className={`banner__cover ${type}`}></div>
                {/* <div className={`banner__background ${type}`} > */}

                    {/* <img src={source} alt="Test" className={`banner__background ${type}`}  /> */}

                    <picture>
                    <source media="(max-width: 644px)" srcSet={source_mobile} />
                    <source media="(min-width: 645px)" srcSet={source} />
                    <img className={`banner__background ${type}`} src={source} alt="Images décorations" />
                    </picture>

                {/* </div> */}
                 {textContent ? <h2 className="banner__text">{textContent}</h2> : null}
        </div>
    );
}