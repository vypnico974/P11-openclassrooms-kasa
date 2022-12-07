/* react  */
import React from "react"
/* css  */
import './spinner.css'

export default function Spinner({title, typeLoader, formatting}) {
  /*  exemple formatting = "spinnerBig" */
  return (
    <div className={`container__spinner ${formatting}`}>
        <h1>{title}</h1>
        <div className={`loader ${formatting}`} id={typeLoader}></div>  
    </div>
  )
}   