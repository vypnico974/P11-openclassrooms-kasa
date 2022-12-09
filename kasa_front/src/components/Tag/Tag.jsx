/* react  */
import React from "react"
/* css  */
import styles from './tag.module.css'

export default function Tag({id,tags, formatting}) {
    /*  exemple formattiong = "tagCircle"  */
  return (
    <div className={styles.container__tag}>
      <ul className={styles.tag__list}>
        {tags.map((tag,index) => (
          <li key={`${id}-${index}`} className={`${styles.tag__tags} ${styles[formatting]}`}>{tag}</li> 
        ))}
      </ul>  
    </div>
  )
}