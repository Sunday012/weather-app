import React, { useEffect,useRef, useState } from "react";
import location from "../assets/location.png";
import search from "../assets/search-interface-symbol.png";
import weather from "../assets/cloudy.png";
import humidity from "../assets/humidity.png";
import wind from "../assets/wind.png";
import "./WeatherApp.css";
const WeatherApp = () => {
    const [temperature1, setTemperature] = useState("22°C")
    const cities = ["Lagos","New-york","London"]
    const [humidity1, setHumidity] = useState("78%")
    const [wind1, setWind] = useState("6 km/h")
    const [location1, setLocation] = useState("London")
    const [weatherIcon,setWeatherIcon] = useState(weather)
    const [peripheralWeatherIcon,setPeripheralWeatherIcon] = useState(weather)
    const [lagaosTemp, setLagosTemp] = useState("22")
    const [lagosLocation, setLagosLocation] = useState("london")
    const [lagosHumidity, setLagosHumidity] = useState("78")
    const [lagosWind, setLagosWind] = useState("6")
    const [londonTemp, setLondonTemp] = useState("22")
    const [londonLocation, setLondonLocation] = useState("london")
    const [londonHumidity, setLondonHumidity] = useState("78")
    const [londonWind, setLondonWind] = useState("6")
    const [NewyorkTemp, setNewyorkTemp] = useState("22")
    const [NewyorkLocation, setNewyorkLocation] = useState("london")
    const [NewyorkHumidity, setNewyorkHumidity] = useState("78")
    const [NewyorkWind, setNewyorkWind] = useState("6")
    const currentDate = new Date()
    const monthOfTheYear = ["january", "february", "march", "april", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]

    
    let api_key = "a12806d321d64d33bc1211042230609"
    const inputRef = useRef(null)
    const handleSubmit = async () => {
      if(inputRef.current.value=== ""){
        return 0;
      }
      let url = `https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${inputRef.current.value}&aqi=no`

      const response = await fetch(url)
      let data = await response.json();
      console.log(data)
 
      const wholeNumberTemperature = Math.trunc(data.current.temp_c);
      const windWholeNumber = Math.trunc(data.current.wind_kph) 
      setTemperature(wholeNumberTemperature+ "°C")
      setHumidity(data.current.humidity+ "%")
      setWind(windWholeNumber+ "km/h")
      setLocation(data.location.name)
      setWeatherIcon(data.current.condition.icon);
      console.log(data.current.condition.code)
      
    }

    useEffect(() => {
      async function fetchCountries() {
        try {
          for (const city of cities) {
            let url2 = `https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city}&aqi=no`;
            const res = await fetch(url2);
            const datalog = await res.json();
            const wholeNumberTemperature = Math.trunc(datalog.current.temp_c);
            const wholeNumberWind = Math.trunc(datalog.current.wind_kph)
           
            switch (city) {
              case "Lagos":
                setLagosTemp(`${wholeNumberTemperature}`);
                setLagosLocation(datalog.location.name);
                setLagosHumidity(datalog.current.humidity)
                setLagosWind(wholeNumberWind)
                setPeripheralWeatherIcon(datalog.current.condition.icon)
                break;
              case "London":
                setLondonTemp(`${wholeNumberTemperature}`);
                setLondonLocation(datalog.location.name);
                setLondonHumidity(datalog.current.humidity)
                setLondonWind(wholeNumberWind)
                setPeripheralWeatherIcon(datalog.current.condition.icon)
                break;
              case "New-york":
                setNewyorkTemp(`${wholeNumberTemperature}`);
                setNewyorkLocation(datalog.location.name);
                setNewyorkHumidity(datalog.current.humidity)
                setNewyorkWind(wholeNumberWind)
                setPeripheralWeatherIcon(datalog.current.condition.icon)
                break;
              default:
                break;
            }
            
          }
        } catch (error) {
          console.log(error);
        }
      }
    
      fetchCountries();
    }, []);
  return (
    <div className="weather-app">
      <div className="date">Today,{currentDate.getDate()} {monthOfTheYear[currentDate.getMonth()]} {currentDate.getFullYear()}</div>
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
            <img src={peripheralWeatherIcon} alt="" className="city-weather"/>
            <div className="city-location">
              <div className="city-text1">location</div>
              <div className="city-text2">{lagosLocation}</div>
            </div>
            </div>
            <div className="city-weather-info">
              <div className="city-wind">
              <div className="city-text3">wind</div>
              <div className="city-text4">{lagosWind}<br></br>km/h</div>
              </div>
              <div className="city-temperatue">
              <div className="city-text5">temperature</div>
              <div className="city-text6">{lagaosTemp + "°C"}</div>
              </div>
              <div className="city-humidity">
              <div className="city-text7">humidity</div>
              <div className="city-text8">{lagosHumidity + "%"}</div>
              </div>
            </div>
          </div>
          <div className="city1">
            <div className="first-info">
            <img src={peripheralWeatherIcon} alt="" className="city-weather"/>
            <div className="city-location">
              <div className="city-text1">location</div>
              <div className="city-text2">{londonLocation}</div>
            </div>
            </div>
            <div className="city-weather-info">
              <div className="city-wind">
              <div className="city-text3">wind</div>
              <div className="city-text4">{londonWind}<br></br>km/h</div>
              </div>
              <div className="city-temperatue">
              <div className="city-text5">temperature</div>
              <div className="city-text6">{londonTemp + "°C"}</div>
              </div>
              <div className="city-humidity">
              <div className="city-text7">humidity</div>
              <div className="city-text8">{londonHumidity + "%"}</div>
              </div>
            </div>
          </div>
          <div className="city1">
            <div className="first-info">
            <img src={peripheralWeatherIcon} alt="" className="city-weather"/>
            <div className="city-location">
              <div className="city-text1">location</div>
              <div className="city-text2">{NewyorkLocation}</div>
            </div>
            </div>
            <div className="city-weather-info">
              <div className="city-wind">
              <div className="city-text3">wind</div>
              <div className="city-text4">{NewyorkWind}<br></br>km/h</div>
              </div>
              <div className="city-temperatue">
              <div className="city-text5">temperature</div>
              <div className="city-text6">{NewyorkTemp + "°C"}</div>
              </div>
              <div className="city-humidity">
              <div className="city-text7">humidity</div>
              <div className="city-text8">{NewyorkHumidity + "%"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WeatherApp;
