import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let [city,setCity] =useState("");
    let [error, setError] =useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";

    const API_key ="8c02f47d1cce9641850e69959988019a";
  let getWeatherInfo =async  () =>{
    try {
    
   let response= await fetch(`${API_URL}?q=${city}&appid=${API_key}&units=metric`);
   let jsonResponse =await response.json();
   console.log(jsonResponse);
   let result = {
    City:city,
    temp: jsonResponse.main.temp,
    tempMin: jsonResponse.main.temp_min,
    tempMax: jsonResponse.main.temp_max,
    humidity: jsonResponse.main.humidity,
    feels_Like: jsonResponse.main.feels_Like,
    weather: jsonResponse.weather[0].description,
   };
   console.log(result);
   return result;
  }catch(err) {
    
    throw err;
  }

  
  };

    
    let handlechange =(evt) => {
      setCity(evt.target.value);
    };


    let handleSumit = async(evt) => {
      try{
        evt.preventDefault();
        console.log(city);
        setCity("");
     let newInfo= await getWeatherInfo();
     updateInfo(newInfo);
      }catch(err) {
        setError(true);
      }


  };
    return(
        <div className='SearchBox'>
       
        <form onSubmit={handleSumit}>
          <TextField id="city" label="City name*" variant="outlined"required value={city}
          onChange={handlechange}
          />
          <br></br>
          <br></br>
           <Button variant="contained" type="Submit"> 
        Search
      </Button>

         {error && <p style={{color:"red"}}>No such place exists</p>} 
          

        </form>
        
        
        </div>
    )
}