/* react  */
import React from "react"
import { useState } from "react"
/* css - image */
import styles from './carrousel.module.css'
import arrowLeft from '../../assets/arrow-left.svg'
import arrowRight from '../../assets/arrow-right.svg'


export default function Carrousel({rentalFilterId,formatting}) {
  /* exemple formatting = "mediumCarrousel"  */

    const [current, setCurrent]= useState(0)
    const length = rentalFilterId.pictures.length
   
    /* détermine le numéro de l'image  */
    const nextPicture= ()=>{
        setCurrent(current=== length-1 ? 0 :current+1)
    }
    const previousPicture= ()=>{
        setCurrent(current===0 ? length-1 : current-1)
    }
    
    return length > 1 ? (
        // flèches suivant et précèdent et info bulle si plusieurs images
        <div className={styles.container__carrousel}>  
                  
            <img className={styles["arrow-left"]} src={arrowLeft} alt="Précèdent" onClick={previousPicture} />
            <img className={styles["arrow-right"]} src={arrowRight} alt="Suivant" onClick={nextPicture} />
            {rentalFilterId.pictures.map((picture, index)=>
            index===current &&
            (<img className={`${styles.container_picture} ${styles[formatting]}`} src={picture} alt="photos de la location" key={`${picture}-${index}`} />)
            )} 
            <span className={styles.container_text} >{current+1}/{length}</span>   
                       
        </div>  //
        
    ) :(
        // pas de flèche ni info bulle quand une seule image
        <div className="container__carrousel">  
            <img className={`${styles.container_picture} ${styles[formatting]}`} src={rentalFilterId.pictures} alt="photos de la location" />
        </div>
    )
}