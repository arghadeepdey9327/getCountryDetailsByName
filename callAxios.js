import axios from "axios";
export default function callAxios(fullDeatilsCountryArray,name,SetfilterCountries){
    let oneCountryDetails=fullDeatilsCountryArray.find(a=>a['name']===name)
    //set "REACT_APP_API_KEY=paste api key" && npm start =>for windows cmd.exe 
    //IMPORTANT:REACT_APP is must then you can add any name after it 
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${oneCountryDetails['capital']}&apikey=${process.env.REACT_APP_API_KEY}`)
    .then(a=>{
    oneCountryDetails['temp']=((a.data['main']['temp'])-273.15).toFixed(2)
    oneCountryDetails['wind']= a.data['wind']['speed']
    oneCountryDetails['icon']=a.data['weather'][0]['icon']
     SetfilterCountries([oneCountryDetails])
    })
}