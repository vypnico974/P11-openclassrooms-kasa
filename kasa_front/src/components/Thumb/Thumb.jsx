/* react  */
import React from "react"
import { Link } from "react-router-dom"
/* css  */
import './thumb.css'


export default function Thumb({id,title,cover,formatting}) {
    /*  exemple formatting = "thumOval" */
    return (
        <div className="thumb">
           <Link to={`./rental/${id}`}>
                <div className="thumb__cover"></div>
                <img src={cover} alt={title} className={`thumb__img ${formatting}`}></img>  
                <h2 className="thumb__text">{title}</h2>
            </Link>
        </div>
    );
}