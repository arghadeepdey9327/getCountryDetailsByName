import React from "react";
import callAxios from "./callAxios";
export default function Filter({SetfilterCountries,fullDeatilsCountryArray}){
   const filter=e=>{
        let ar=[]
        let br=[]
        fullDeatilsCountryArray.map(a=>{
            if((e.target.value).length>0){
            for(let i=0;i<a['name'].length/(e.target.value).length;i++){
                ar.push(a['name'].substring(i,(e.target.value).length+i))
            }}
            ar.find(b=>(b.toLowerCase()===(e.target.value).toLowerCase())?br.push(a['name']):null)
            ar=[]
        })
          if(br.length===1){ 
          callAxios(fullDeatilsCountryArray,br[0],SetfilterCountries)
                }
            else{
                SetfilterCountries(br)
            }
            br=[]
            }
    return <>
    <label htmlFor="filterInput">find countries</label>
    <input id="filterIput" type='text' onChange={filter}/>
    </>
}