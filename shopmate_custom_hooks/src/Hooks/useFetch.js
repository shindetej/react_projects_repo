import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null); // taken null as empty list can be valid upto some cases
  const [loading, setLoading] = useState(false);
 const [error,setError] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error(response.statusText);
        }
        const result = await response.json();
        setLoading(false);
        setData(result);
        setError("");
      }catch(error){
        setLoading(false);
        setError(error.message);
      }
     
    };
    fetchData();
  }, [url]); // every url change has side effect that fetch data for that url

  return { data, loading ,error };
};
