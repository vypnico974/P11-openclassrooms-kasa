/* react */
import React from "react"
/* composant */
import Banner from '../../components/Banner/Banner'
import Thumb from '../../components/Thumb/Thumb'
import Error from "../Error/error"
import Spinner from "../../components/Spinner/Spinner"
/* css */
import './home.css'
import bannerHome from '../../assets/home-background.png'
import bannerHomeMobile from '../../assets/home-background-mobile.png'
/*  fetch data */
import useFetch from "../../util/fetch"


export default function Home() {

  /* connexion json */
  const { data, hasError, errorType, isLoading } = useFetch('http://localhost:3000/rentals.json')
  // console.log(data)

  
  if (!data){ /* si donnée vide, affichage de la page 404 */
    return <Error />
  }
  if (isLoading){ /* si chargement en cours, affichage spinner chargement */
    return <Spinner title="" typeLoader="loader-1" />
  }
  if (hasError){ /* si erreur de connexion  */
  console.log(errorType)
    return <div className="error">Oups! Une erreur est survenue</div>
  }

    return (
    <div>
       <div className="container__home">
            <Banner source={bannerHome} source_mobile={bannerHomeMobile} type="accueil" textContent="Chez vous, partout et ailleurs" />
              <main className="container__cards">
                {data.map((rental) => (
                  <article key={rental.id} className="article__card">
                    <Thumb title={rental.title} cover={rental.cover} id={rental.id} key={rental.id} />
                  </article>
                ))}
              </main>
            </div>
      </div>
  )
}
