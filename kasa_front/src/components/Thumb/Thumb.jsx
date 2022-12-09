/* react  */
import React from "react"
import { Link } from "react-router-dom"
/* css  */
import styles from './thumb.module.css'


export default function Thumb({id,title,cover,formatting}) {
    /*  exemple formatting = "thumOval" */
    return (
        <div className={styles.thumb}>
           <Link to={`./rental/${id}`}>
                <div className={styles.thumb__cover}></div>
                <img src={cover} alt={title} className={`${styles.thumb__img} ${styles[formatting]}`}></img>  
                <h2 className={styles.thumb__text}>{title}</h2>
            </Link>
        </div>  
    );
}