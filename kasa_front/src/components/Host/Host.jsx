/* import react  */
import React from "react";
/* import  css  */
import './host.css'

export default function Host({host}) {
    const fullName = host.name.indexOf(" ")
    const name = host.name.slice(0,fullName)
    const lastName = host.name.slice(fullName)
  return (
    <div className="container__host">
        <h2 className="host__name">{name} <br /> {lastName}</h2>
      <img src={host.picture} alt={fullName} className="host__photo" />
  </div>
  );
}