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

       { isLoading ? (<Spinner title="" typeLoader="loader-1" />) : (

        filterIdData && (
        <div>
           <Carrousel rentalFilterId={filterIdData} />   
        <div className="container__rental__info">
          <section>
             <Info title={filterIdData.title} location={filterIdData.location} />
            <Tag id={filterIdData.id} tags={filterIdData.tags} />
          </section>
          <aside className="container_rental_aside">
            <Rate id={filterIdData.id} rating={filterIdData.rating} />
            <Host host={filterIdData.host} rating={filterIdData.rating} />
          </aside>  
        </div> 
        <div className="container__rental__collapse">
          <div className="collapse">
            <Collapse formatting={"big"} title="Description" children={filterIdData.description} />
          </div>
          <div className="collapse">
            <Collapse formatting={"big"} title="Équipements" 
            children={
              <ul>
                {filterIdData.equipments.map((equipment,index) => <li key={`${equipment}-${index}`}>{equipment}</li>)}
              </ul>           
            } />
          </div>        
        </div>
      </div> )

       )

       }
        
       
  
      

    </main>
  );
}