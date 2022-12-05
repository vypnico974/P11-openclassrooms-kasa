/* import react  */
import React from "react";
/* import  css  */
import './spinner.css'

export default function Spinner({title, typeLoader}) {
  return (
    <div className="container__spinner">
        <h1>{title}</h1>
        <div className="loader" id={typeLoader}></div>
    </div>
  );
}