/* react */
import React from "react";
/* composant */
import Banner from '../../components/Banner/Banner'
import Collapse from '../../components/Collapse/Collapse'
/* css */
import './about.css'

/*composant react :  state (état, données)
                     comportements
                     affichage(render) */
export default function about() {

 
    return (
      <div className="container_about">
        <Banner type="apropos" textContent="" />
        <main className="container_main">
        <Collapse formatting={"big"} title="Fiabilité" children="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes." />
        <Collapse formatting={"big"} title="Respect" children="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
        <Collapse formatting={"big"} title="Service" children="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." />
        <Collapse formatting={"big"} title="Sécurité" children="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />


        </main>
      </div>
    );
}
