/*  react  */
import React from "react";
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
/* composants  */
import Carrousel from '../../components/Carrousel/Carrousel'
import Info from '../../components/Info/Info'
import Tag from '../../components/Tag/Tag'
import Rate from '../../components/Rate/Rate'
import Host from '../../components/Host/Host'
import Collapse from '../../components/Collapse/Collapse'
/* css  */
import './rental.css'
/* json */
import Rental_data from '../../datas/rentals.json'

export default function Rental() {

  const { currentId } = useParams();
  // console.log(currentId)
  const rentalFilterId = Rental_data.find((rental) => rental.id === currentId)
  // console.log(rentalFilterId)
  // console.log("nbre d image :"+rentalFilterId.pictures.length)

  const [rental_data, setRental_data] = useState([])
  const [error, setError] = useState(false)
  const [isDataLoading, setDataLoading] = useState(true)

  useEffect(() => {
      async function getRental() {
          setDataLoading(true)
          try {
              const response = await fetch('../../datas/rentals.json')
              const rentals = await response.json()
              setRental_data(rentals)
              
          } catch (err) {
              console.log(err)
              setError(true)
              
          } finally {
              setDataLoading(false)
          }
      }
      getRental()
  }, [])


  return (
    <main className="container__rental">
       
        <Carrousel rentalFilterId={rentalFilterId} />   
        <div className="container__rental__info">
          <section>
             <Info title={rentalFilterId.title} location={rentalFilterId.location} />
            <Tag id={rentalFilterId.id} tags={rentalFilterId.tags} />
          </section>
          <aside className="container_rental_aside">
            <Rate id={rentalFilterId.id} rating={rentalFilterId.rating} />
            <Host host={rentalFilterId.host} rating={rentalFilterId.rating} />
          </aside>  
        </div> 
        <div className="container__rental__collapse">
          <div className="collapse">
            <Collapse formatting={"big"} title="Description" children={rentalFilterId.description} />
          </div>
          <div className="collapse">
            <Collapse formatting={"big"} title="Équipements" 
            children={
              <ul>
                {rentalFilterId.equipments.map((equipment,index) => <li key={`${equipment}-${index}`}>{equipment}</li>)}
              </ul>           
            } />
          </div>        
        </div>
        
        
    </main>
  );
}