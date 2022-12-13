/* react  */
import React from "react"
/* css  */
import styles from './banner.module.css' 

export default function Banner({source, source_mobile, textContent,formatting}) {
    /* exemple formatting = "bannerAbout", formatting = "bannerHome"  */
    return ( 
        <div className={styles.banner}> 
            <div className={`${styles.banner__cover} ${styles[formatting]}`}></div>
                <picture>
                    <source media="(max-width: 644px)" srcSet={source_mobile} />
                    <source media="(min-width: 645px)" srcSet={source} />
                    <img className={`${styles.banner__background} ${styles[formatting]}`} src={source} alt="Images décoratives" />
                </picture>
                 {textContent && <h2 className={styles.banner__text}>{textContent}</h2> }
        </div>
    )
}  