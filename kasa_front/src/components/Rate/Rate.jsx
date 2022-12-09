/* react  */
import React from "react"
/* css - images  */
import styles from './rate.module.css'
import starOn from '../../assets/StarOn.svg'
import starOff from '../../assets/StarOff.svg'

export default function Rate({id,rating, formatting}) {
  /*  exemple formatting = "starBig" */

  const maxRating = 5 //note max
  let starArray = [] // pour stocker les images étoiles de la note
  
  // ajoute une étoile remplie pour chaque point dans le tableau
  for(let i = 0; i < rating; i++) { 
    starArray[i] = starOn
  }
  // si pas la note max, utilisation de la note pour compter le nombre d'étoile vide
  if(rating !== maxRating) {
    for(let i = rating; i < maxRating; i++) {
        starArray[i] = starOff
      }
  }
  return (
    <div className={styles.container__rate}>
        <span className={styles.rate__stars}>
            {starArray.map((star,index) => 
                <img src={star} alt="note" key={`${id}-${index}`} 
                className={`${styles.rate__star} ${styles[formatting]}`} />        
            
            )} 
       </span>     
    </div>
  )
}