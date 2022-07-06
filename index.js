import React from "react";
import ReactDom from'react-dom/client'
import App from './App'
import axios from "axios";
let fullDeatilsCountryArray=[]
axios.get(`https://restcountries.com/v3.1/all`).then(a=>(a.data).map(b=>fullDeatilsCountryArray.push({name: b['name']['common'],capital:b['capital']===undefined?'Not found':b['capital'][0],area:b['area'],languages:b['languages'],flag:b['flags']['png']})))
ReactDom.createRoot(document.getElementById('root')).render(<App fullDeatilsCountryArray={fullDeatilsCountryArray}/>)

