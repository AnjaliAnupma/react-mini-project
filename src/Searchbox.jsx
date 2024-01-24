import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Searchbox.css";
import {useState} from "react";

export default function Searchbox({updateInfo}){
    let [city,setCity]=useState("");
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "";

    let getWeatherInfo = async () => {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
       
        let result={
            city: city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description
        };
        console.log(result);
        return result;
    };

    let handleChange = (event) => {
        setCity(event.target.value);
    };

    let handleSubmit= async (event) =>{
        event.preventDefault();
        console.log(city);
        setCity("");
        let newInfo= await getWeatherInfo();
        updateInfo(newInfo);
    };

    return(
        <div className = "Searchbox">
        <form onSubmit={handleSubmit}>
        <TextField id="city" label="City Name" variant="outlined" required  value={city} onChange={handleChange}/>
        <br></br><br></br>
        <Button variant="contained" type="submit">Search</Button>
        </form>
        </div>
    );

}