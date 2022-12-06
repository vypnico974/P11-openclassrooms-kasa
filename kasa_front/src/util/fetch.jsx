import { useEffect, useState } from "react";

export default function useFetch(url){
    
  const [data, setData] = useState([]);
  /* hooks pour déterminer si erreur et si chargement en cours   */
  const [hasError, setHasError] = useState(false);
  const [errorType, setErrorType] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!url) return;
    setIsLoading(true);  //début chargement

    async function fetchData() {
      try { //connexion au fichier json
        const response = await fetch(url);
       //  console.log(response)
        const data = await response.json();
        setData(data);
      } catch (err) { //si erreur, récupérer le message d'erreur
        setHasError(true);
        setErrorType(err.message);
      } finally { 
        setIsLoading(false); //fin chargement
      }
    }

    fetchData();
  }, [url]);

  return { data, hasError, errorType, isLoading };
}

