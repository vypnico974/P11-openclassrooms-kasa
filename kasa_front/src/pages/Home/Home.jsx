/* react */
import React from "react"
/* composants */
import Banner from '../../components/Banner/Banner'
import Thumb from '../../components/Thumb/Thumb'
import Spinner from "../../components/Spinner/Spinner"
/* page  */
import Error from "../Error/error"
/* css - images */
import './home.css'
import bannerHome from '../../assets/home-background.png'
import bannerHomeMobile from '../../assets/home-background-mobile.png'
/*  fetch data */
import useFetch from "../../util/fetch"


export default function Home() {

  /* connexion json */
  const { data, hasError, errorType, isLoading } = useFetch('http://localhost:3000/rentals.json')
  // console.log(data)
  
 
  if (isLoading){ /* si chargement en cours, affichage spinner chargement */
    return <Spinner title="" typeLoader="loader-1" formatting=""/>
  }
  if (hasError){ /* si erreur de connexion  */
  console.log(errorType)
    return <div className="error">Oups! Une erreur est survenue</div>
  }
  if (!data && !isLoading){ /* si donnée vide, affichage de la page 404 */
  return <Error />
}

    return (
    <div>
       <div className="container__home">
            <Banner source={bannerHome} source_mobile={bannerHomeMobile}
             textContent="Chez vous, partout et ailleurs"  formatting="bannerHome" />
              <main className="container__cards">
                {data.map((rental) => (
                  <article key={rental.id} className="article__card">
                    <Thumb title={rental.title} cover={rental.cover}
                     id={rental.id} key={rental.id} formatting="" />
                  </article>
                ))}
              </main>
            </div>
      </div>
  )
}
