import React from "react";
import callAxios from "./callAxios";
export default function Display({detailsOfCountry,SetfilterCountries,fullDeatilsCountryArray}){
    const showDetails=(e)=>{
        callAxios(fullDeatilsCountryArray,e.target.id,SetfilterCountries)
  }
    if(detailsOfCountry.length===1){
return <>   
    <h1>{detailsOfCountry[0]['name']}</h1> 
<p>capital : {detailsOfCountry[0]['capital']}</p>
<p>area : {detailsOfCountry[0]['area']}</p>
<p>languages:</p>
<ul>
   {Object.values(detailsOfCountry[0]['languages']).map(a=><li key={a['name']}>{a}</li>)}
</ul>
<img src={detailsOfCountry[0]['flag']} alt='country image'/>
 <h1>weather in {detailsOfCountry[0]['name']}</h1>
 <p>temperature -{detailsOfCountry[0]['temp']} Celcius</p>
 <img src={`http://openweathermap.org/img/wn/${detailsOfCountry[0]['icon']}@2x.png`} alt="weather image"/>
 <p>wind {detailsOfCountry[0]['wind']}m/s</p>
    </>
}else if(detailsOfCountry.length>1){
    return detailsOfCountry.map(a=><span key={a}><p>{a}</p><button onClick={showDetails} id={a}>show</button></span>)
}else{}

}