import { FaSearch } from "react-icons/fa";
import { FaSearchLocation } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

const API_key = "1d8dc3027dc876f4275deb343b954c99";


const Weath = () => {
    
    const [weatherData,setWeatherData] = useState(false);
    const inpEle = useRef();

    
    const fetchData = async (inputCity) => {
        if(inputCity === ""){
            alert("Enter a city name");
            return;
        }
        try{
            const URL = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&units=metric&appid=${API_key}`;
            const dt = await fetch(URL);
            const data = await dt.json();

            setWeatherData({
                city : data.name,
                country : data.sys.country,
                temp : data.main.temp,
                desc : data.weather[0].description,
                wind : data.wind.speed,
                humidity : data.main.humidity
            })

            console.log(weatherData);


        }catch(err){
            console.log(err);
        }

    }

    useEffect(() => {
        fetchData("London")
    },[])

    return(
        <div>
            <div className="searchbar">
                <input className="myInput" ref={inpEle}type="text" placeholder="Enter your city name"></input>
                <button onClick={() => fetchData(inpEle.current.value)}><FaSearchLocation size={20} color="red" /></button>
            </div>
            {weatherData ? 
            <>
                        <div className="loc-details">
                <p>{weatherData.city}, {weatherData.country}</p>
                <p>Date</p>
            </div>
            <div className="main-details"> 
                <div>
                   <p>{weatherData.temp}<sup>°C</sup></p> 
                   <p>{weatherData.desc}</p>
                </div>
                <div className="speed-humd">
                    <div><p>{weatherData.wind}</p><p>Wind Speed</p></div>
                    <div><p>{weatherData.humidity}</p><p>Humidity</p></div>
                </div>
            </div>
            </> : <></>}
        </div>
    )
}

export default Weath