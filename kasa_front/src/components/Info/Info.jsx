/* import react  */
import React from "react";
/* import  css  */
import './info.css'

export default function Info({title,location}) {
  return (
    <div className="container__info">
        <h2 className="info__title">{title}</h2>
        <p className="info__location">{location}</p>
  </div>
  );
}