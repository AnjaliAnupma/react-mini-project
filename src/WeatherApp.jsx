import InfoBox from './InfoBox.jsx';
import Searchbox from './Searchbox.jsx';
import './WeatherApp.css';
import { useState } from "react";

export default function WeatherApp(){

    const [ weatherInfo , setWeatherInfo ] = useState({
        city: "Delhi",
        feels_like: 17.00,
        temp: 18.00,
        tempMin: 17.00,
        tempMax: 18.00,
        humidity: 60,
        weather: "haze"
    });
    
    let updateInfo = (newinfo) =>{
        setWeatherInfo(newinfo);
    }

    return(
        <div className='WeatherApp'>
            <h2>Weather Widget App</h2>
            <Searchbox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}