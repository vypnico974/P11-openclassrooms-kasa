/* react  */
import React from "react"
/* css  */
import styles from './spinner.module.css'

export default function Spinner({title, typeLoader, formatting}) {
  /*  exemple formatting = "spinnerBig" */
  return (
    <div className={`${styles.container__spinner} ${styles[formatting]}`}>
        <h1>{title}</h1>
        <div className={`${styles.loader} ${styles[formatting]}`} id={styles[typeLoader]}></div>  
    </div>
  )
}   