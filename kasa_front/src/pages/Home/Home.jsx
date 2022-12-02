/* react */
import React from "react";
/* composant */
import Banner from '../../components/Banner/Banner'
import Thumb from '../../components/Thumb/Thumb'
/* css */
import './home.css'
/*  data location */
import Rentals from '../../datas/rentals.json'


/*composant react :  state (état, données)
                     comportements
                     affichage(render) */
export default function Home() {

// async function getRental() {
    // try{
    //     const response = await fetch(data_kasa)
    //     /* attendre la résolution de la promesse  */
    //     const data = await response.json()
    //     return data
    // }
    // catch(err) {
    //     /* affichage erreur */
    //     console.log("Une erreur se produit :", err)  
    // }   
    
    // const response = await fetch('../../datas/rentals.json')
    // const data = await response.json()       
    // return data

//  }


// const data_rentals = getRental()
// const fetchHousings = {
//   all: () => JSONFILE,
//   one: (id) => JSONFILE.find(house => house.id === id)
// }
// const data = fetchHousings.all
// console.log(data.id)

  
    return (
      <div className="container_home">
        <Banner type="accueil" textContent="Chez vous, partout et ailleurs" />
        <main className="container_cards">
          {Rentals.map((rental) => (
            <article key={rental.id} className="article__card">
              <Thumb title={rental.title} cover={rental.cover} id={rental.id} key={rental.id} />
            </article>
          ))}


        </main>
      </div>
    );
}
