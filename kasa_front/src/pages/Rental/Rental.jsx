/*  react  */
import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
/* composants  */
import Carrousel from '../../components/Carrousel/Carrousel'
import Info from '../../components/Info/Info'
import Tag from '../../components/Tag/Tag'
import Rate from '../../components/Rate/Rate'
import Host from '../../components/Host/Host'
import Collapse from '../../components/Collapse/Collapse'
import Error from "../Error/error";
import Spinner from "../../components/Spinner/Spinner";
/* css  */
import './rental.css'
/*  fetch data */
import useFetch from "../../util/fetch"


export default function Rental() {
   
  const {currentId} = useParams()  /* récupérer la valeur Id dans l'URL  */
  const [filterIdData, setFilterIdData] = useState();
  const [ErrorIdData, setErrorIdData] = useState(false);
 
  const { data, hasError, errorType, isLoading } = useFetch('http://localhost:3000/rentals.json')
  // console.log("les données:",data)
  // console.log(errorType)
  // console.log("chargement:", isLoading)
  useEffect(() => {
    if (data.length > 0) {
      const rentalFilterId = data.find((rental) => rental.id === currentId)
      setFilterIdData(rentalFilterId)
      if (!rentalFilterId) {setErrorIdData(true)}
      
    }
  }, [currentId, data, hasError, errorType ]);

 
  /*  si pas de location correspondant à l' id, affichage de la page "page n'existe pas" */
  if (!filterIdData && ErrorIdData) {
    return <Error />
  }

  return (
    <main className="container__rental">

       { isLoading ? (<Spinner title="" typeLoader="loader-1" formatting="" />) : (

        filterIdData && (
        <div>
           <Carrousel rentalFilterId={filterIdData} formatting="" />   
        <div className="container__rental__info">
          <section>
             <Info title={filterIdData.title} location={filterIdData.location} formatting="" />
            <Tag id={filterIdData.id} tags={filterIdData.tags} formatting=""/>
          </section>
          <aside className="container_rental_aside">
            <Rate id={filterIdData.id} rating={filterIdData.rating} formatting="" />
            <Host host={filterIdData.host} formatting="" />
          </aside>  
        </div> 
        <div className="container__rental__collapse">
          <div className="collapse">
            <Collapse title="Description" children={filterIdData.description} formatting={"big"} />
          </div>
          <div className="collapse">
            <Collapse title="Équipements" 
            children={
              <ul>
                {filterIdData.equipments.map((equipment,index) => 
                    <li key={`${equipment}-${index}`}>{equipment}</li>)}
              </ul>           
            } formatting={"big"}  />
          </div>        
        </div>
      </div> ))
      }
   </main>
  );
}