import React, { useEffect } from 'react'
import './covid.css'

const App=() =>{

    const getCovidData=async()=>{

        try{
            const res = await fetch('https://data.covid19india.org/data.json');
            const actualdata = await res.json();

        }
        catch(err)
        {
            console.log(err);
        }

    }

useEffect(()=>{
   // getCovidData();

},[]);

  return(
    <>
    <h1>🔴 Live</h1>
    <h2>Covid Cases</h2>

    
     <ul>
        <select>
            <li className='card'>
                    <div className='card_main'>
                        <div className='card_inner'>
                            <p className='card_name'><span>OUR</span> COUNTRY</p>
                            <p className='card_total_card_small'>INDIA</p>
                    
                        </div>
                    </div>
                </li>
                
                <li className='card'>
                    <div className='card_main'>
                        <div className='card_inner'>
                            <p className='card_name'><span>OUR</span> COUNTRY</p>
                            <p className='card_total_card_small'>INDIA</p>
                    
                        </div>
                    </div>
                </li>

                <li className='card'>
                    <div className='card_main'>
                        <div className='card_inner'>
                            <p className='card_name'><span>OUR</span> COUNTRY</p>
                            <p className='card_total_card_small'>INDIA</p>
                    
                        </div>
                    </div>
                </li>

                <li className='card'>
                    <div className='card_main'>
                        <div className='card_inner'>
                            <p className='card_name'><span>OUR</span> COUNTRY</p>
                            <p className='card_total_card_small'>INDIA</p>
                    
                        </div>
                    </div>
                </li>

                <li className='card'>
                    <div className='card_main'>
                        <div className='card_inner'>
                            <p className='card_name'><span>OUR</span> COUNTRY</p>
                            <p className='card_total_card_small'>INDIA</p>
                    
                        </div>
                    </div>
                </li>

                <li className='card'>
                    <div className='card_main'>
                        <div className='card_inner'>
                            <p className='card_name'><span>OUR</span> COUNTRY</p>
                            <p className='card_total_card_small'>INDIA</p>
                    
                        </div>
                    </div>
                </li>

        </select>
        
     </ul>

    </>
  )
}

export default Covid