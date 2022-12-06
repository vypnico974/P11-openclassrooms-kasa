/* import react  */
import React from "react";
/* import  css  */
import './tag.css'

export default function Tag({id,tags, formatting}) {
    /*  exemple formattiong = "tagCircle"  */
  return (
    <div className="container__tag">
      <ul className="tag__list">
        {tags.map((tag,index) => (
          <li key={`${id}-${index}`} className={`tag__tags ${formatting}`}>{tag}</li> 
        ))}
      </ul>
    </div>
  );
}