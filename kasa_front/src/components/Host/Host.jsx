/*  react  */
import React from "react"
/*  css  */
import styles from './host.module.css'

export default function Host({host, formatting}) {
    /*  exemple formatting formatting ="hostSquare" */
    const fullName = host.name.indexOf(" ")
    const name = host.name.slice(0,fullName)
    const lastName = host.name.slice(fullName)
  return (
    <div className={styles.container__host}>
        <h2 className={styles.host__name}>{name} <br /> {lastName}</h2>
      <img src={host.picture} alt={fullName} className={`${styles.host__photo} ${styles[formatting]}`} />
  </div>
  )  
}   