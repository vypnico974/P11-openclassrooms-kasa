/* react  */
import React from "react"
/*  css  */
import styles from  './info.module.css'

export default function Info({title,location, formatting}) {
  /* exemple formatting = "mediumInfo"  */
  return (
    <div className={ `${styles.container__info} ${styles[formatting]}`}>   
        <h2 className={`${styles.info__title} ${styles[formatting]}`}>{title}</h2>
        <p className={`${styles.info__location} ${styles[formatting]}`}>{location}</p>
  </div>
  )
}      