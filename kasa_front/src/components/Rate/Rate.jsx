/* import react  */
import React from "react";
/* import  css - image  */
import './rate.css'
import starOn from '../../assets/StarOn.svg'
import starOff from '../../assets/StarOff.svg'

export default function Rate({id,rating}) {

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
    <div className="container__rate">
        <span className="rate__stars">
            {starArray.map((star,index) => 
                <img src={star} alt="note" key={`${id}-${index}`} className="rate__star" />        
            
            )} 
       </span>
    
    </div>
  );
}