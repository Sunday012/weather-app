import React, { useRef, useState } from "react";
import location from "../assets/location.png";
import search from "../assets/search-interface-symbol.png";
import weather from "../assets/cloudy.png";
import Sunny from "../assets/sun.png"
import drizzling from "../assets/drizzling.png"
import heavyRain from "../assets/heavy-rain.png"
import snowy from "../assets/snowy.png"
import thunderStorm from "../assets/thunderstorm.png"
import humidity from "../assets/humidity.png";
import wind from "../assets/wind.png";
import "./WeatherApp.css";
const WeatherApp = () => {
    const [temperature1, setTemperature] = useState("22°C")
    const [humidity1, setHumidity] = useState("78%")
    const [wind1, setWind] = useState("6 km/h")
    const [location1, setLocation] = useState("London")
    const [weatherIcon,setWeatherIcon] = useState(weather)
    let api_key = "a12806d321d64d33bc1211042230609"
    const inputRef = useRef(null)
    const handleSubmit = async () => {
      if(inputRef.current.value=== ""){
        return 0;
      }
      let url = `http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${inputRef.current.value}&aqi=no`

      const response = await fetch(url)
      let data = await response.json();
      console.log(data)
 
      const wholeNumberTemperature = Math.trunc(data.current.temp_c);
      const windWholeNumber = Math.trunc(data.current.wind_kph) 
      setTemperature(wholeNumberTemperature+ "°C")
      setHumidity(data.current.humidity+ "%")
      setWind(windWholeNumber+ "km/h")
      setLocation(data.location.name)
      console.log(data.current.condition.code)
      if(data.current.condition.code=== "1000"){
        setWeatherIcon(Sunny);
      }
      else if(data.current.condition.code=== "1240" || data.current.condition.code=== "1003"){
        setWeatherIcon(weather)
      }
      else if(data.current.condition.code=== "1063"){
        setWeatherIcon(drizzling)
      }
      else if(data.current.condition.code=== "1195"){
        setWeatherIcon(heavyRain)
      }
      else if(data.current.condition.code=== "1066"){
        setWeatherIcon(snowy)
      }
      else if(data.current.condition.code=== "1087"){
        setWeatherIcon(thunderStorm)
      }
      else{
        setWeatherIcon(weather);
      }
    }
  return (
    <div className="weather-app">
      <div className="date">Today,6 September</div>
      <div className="search-input">
        <div className="input-box">
          <img src={location} alt="" className="location-icon" />
          <input type="text" ref={inputRef} className="text-input" placeholder="Search for a country, city or state" />
          <img src={search} alt="" className="search-icon" onClick={handleSubmit}/>
        </div>
      </div>
      <div className="box">
      <div className="temperature">{temperature1}</div>
      <div className="main-location">{location1}</div>
      </div>
      <div className="weather-details">
        <div className="weather-info">
          <img src={weatherIcon} alt="" className="weather"/>
          <div className="details">
            <div className="humidity-box">
              <img src={humidity} alt="" className="humidity"/>
              <div className="humidity-text">
              <div className="text">Humidity</div>
              <div className="info">{humidity1} </div>
              </div>
            </div>
            <div className="wind-box">
              <img src={wind} alt="" className="wind"/>
              <div className="wind-text">
              <div className="text">wind-speed</div>
              <div className="info">{wind1}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cities">
           <div className="other-cities-text">Other cities</div>
           <div className="view-all-text">View-all</div>
      </div>
      <div className="city-info">
        <div className="city-box">
          <div className="city1">
            <div className="first-info">
            <img src={weather} alt="" className="city-weather"/>
            <div className="city-location">
              <div className="city-text1">location</div>
              <div className="city-text2">London</div>
            </div>
            </div>
            <div className="city-weather-info">
              <div className="city-wind">
              <div className="city-text3">wind</div>
              <div className="city-text4">352</div>
              </div>
              <div className="city-temperatue">
              <div className="city-text5">temperature</div>
              <div className="city-text6">18°c</div>
              </div>
              <div className="city-humidity">
              <div className="city-text7">humidity</div>
              <div className="city-text8">25%</div>
              </div>
            </div>
          </div>
          <div className="city1">
            <div className="first-info">
            <img src={weather} alt="" className="city-weather"/>
            <div className="city-location">
              <div className="city-text1">location</div>
              <div className="city-text2">London</div>
            </div>
            </div>
            <div className="city-weather-info">
              <div className="city-wind">
              <div className="city-text3">wind</div>
              <div className="city-text4">352</div>
              </div>
              <div className="city-temperatue">
              <div className="city-text5">temperature</div>
              <div className="city-text6">18°c</div>
              </div>
              <div className="city-humidity">
              <div className="city-text7">humidity</div>
              <div className="city-text8">25%</div>
              </div>
            </div>
          </div>
          <div className="city1">
            <div className="first-info">
            <img src={weather} alt="" className="city-weather"/>
            <div className="city-location">
              <div className="city-text1">location</div>
              <div className="city-text2">London</div>
            </div>
            </div>
            <div className="city-weather-info">
              <div className="city-wind">
              <div className="city-text3">wind</div>
              <div className="city-text4">352</div>
              </div>
              <div className="city-temperatue">
              <div className="city-text5">temperature</div>
              <div className="city-text6">18°c</div>
              </div>
              <div className="city-humidity">
              <div className="city-text7">humidity</div>
              <div className="city-text8">25%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WeatherApp;