/* import react  */
import React from "react";
/* import  css  */
import './info.css'

export default function Info({title,location, formatting}) {
  /* exemple formatting = "mediumInfo"  */
  return (
    <div className={`container__info ${formatting}`}>   
        <h2 className={`info__title ${formatting}`}>{title}</h2>
        <p className={`info__location ${formatting}`}>{location}</p>
  </div>
  );
}    