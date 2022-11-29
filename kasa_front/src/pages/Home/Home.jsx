/* react */
import React from "react";
/* composant */
import Banner from '../../components/Banner/Banner'
/* image */
import ImgBackground from '../../assets/home-background.png'
/* css */
import './home.css'


/*composant react :  state (état, données)
                     comportements
                     affichage(render) */
export default function Home() {
    return (
      <div className="container_home">
        <Banner textContent="Chez vous, partout et ailleurs" imgSrc={ImgBackground} imgAlt="Bord de mer" />
      </div>
    );
}
