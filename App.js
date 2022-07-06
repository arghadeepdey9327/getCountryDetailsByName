import React,{useState} from "react";
import Filter from "./component/filter";
import Display from "./component/displayOneCountryDetails";
export default function App({fullDeatilsCountryArray}){
  const [filterCountries,SetfilterCountries]=useState([])
 return <>
<Filter SetfilterCountries={SetfilterCountries} fullDeatilsCountryArray={fullDeatilsCountryArray}/>
   {filterCountries.length>250?<p>To many matches, specify another filter</p>:<Display detailsOfCountry={filterCountries} fullDeatilsCountryArray={fullDeatilsCountryArray} SetfilterCountries={SetfilterCountries}/>}
 </>
}