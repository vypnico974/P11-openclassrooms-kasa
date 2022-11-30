/*  react  */
import React from "react";
// import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
/* composant  */
import Carrousel from '../../components/Carrousel/Carrousel'
/* import image et css  */
import './rental.css'

import Rental_data from '../../datas/rentals.json'

export default function Rental() {

  const { currentId } = useParams();
  // console.log(currentId)

  const rentalFilterId = Rental_data.find((rental) => rental.id === currentId)
  // console.log(rentalFilterId)
  // console.log("nbre d image :"+rentalFilterId.pictures.length)

  // const [rental_data, setRental_data] = useState([])
  // const [error, setError] = useState(false)
  // const [isDataLoading, setDataLoading] = useState(true)

  // useEffect(() => {
  //     async function getRental() {
  //         setDataLoading(true)
  //         try {
  //             const response = await fetch('../../datas/rentals.json')
  //             const rentals = await response.json()
  //             setRental_data(rentals)
  //         } catch (err) {
  //             console.log(err)
  //             setError(true)
  //         } finally {
  //             setDataLoading(false)
  //         }
  //     }
  //     getRental()
  // }, [])


  return (
    <main className="container_rental">
        {/* <h1 className="a_faire">Page location en cours création....</h1> */}
         <Carrousel rentalFilterId={rentalFilterId} />   
        {/* <p className="error__text">Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/" className="error__link">
		 Retourner sur la page d’accueil
	    </Link> */}
    </main>
  );
}