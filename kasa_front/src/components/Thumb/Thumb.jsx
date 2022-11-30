/* react  */
import React from "react"
import { Link } from "react-router-dom"
/* css  */
import './thumb.css'

/*composant react :  state (état, données)
                     comportements
                     affichage(render) */
export default function Thumb({id,title,cover}) {
    return (
        <div className="thumb">
           <Link to={`/rental/${id}`}>
                <div className="thumb__cover"></div>
                <img src={cover} alt={title} className="thumb__img"></img>
                <h2 className="thumb__text">{title}</h2>
            </Link>
        </div>
    );
}