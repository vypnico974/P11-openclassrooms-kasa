/* react  */
import React from "react";
import { useState } from "react"
/* css - image */
import './carrousel.css'
import arrowLeft from '../../assets/arrow-left.svg'
import arrowRight from '../../assets/arrow-right.svg'

/*composant react :  state (état, données)
                     comportements
                     affichage(render) */
export default function Carrousel({rentalFilterId}) {

    const [current, setCurrent]= useState(0)
    const length = rentalFilterId.pictures.length;
   

    const nextPicture= ()=>{
        setCurrent(current=== length-1 ? 0 :current+1)
    }
    const previousPicture= ()=>{
        setCurrent(current===0 ? length-1 : current-1)
    }


    return length > 1 ? (
        // flèches suivant et précèdent si plusieurs images
        <div className="container__carrousel">          
            <img className="arrow-left" src={arrowLeft} alt="Précèdent" onClick={previousPicture} />
            <img className="arrow-right" src={arrowRight} alt="Suivant" onClick={nextPicture} />
            {rentalFilterId.pictures.map((picture, index)=>
            index===current &&
            (<img className="container_picture" src={picture} alt="photos de la location" key={index} />)
            )}
        </div>
    ) :(
        // pas de flèche de une seule image
        <div className="container__carrousel">  
            <img className="container_picture" src={rentalFilterId.pictures} alt="photos de la location" />
        </div>
    )
}