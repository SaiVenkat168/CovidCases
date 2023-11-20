import React, { useEffect } from 'react'

const App=() =>{

    const getCovidData=async()=>{

        try{
            const res = await fetch('https://data.covid19india.org/data.json');
        }
        catch(err)
        {
            console.log(err);
        }

    }

useEffect(()=>{
    getCovidData();

},[]);

  return(
    <>
    <h1>🔴 Live</h1>
    <h2>Covid Cases</h2>
    </>
  )
}

export default Covid