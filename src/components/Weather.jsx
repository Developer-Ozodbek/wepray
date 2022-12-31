import { useState } from "react"

const api = {
    key: '5a0f2423dc53b363af510db26d5e947b',
    baseUrl: 'https://api.openweathermap.org/data/2.5/'
}

const Weather = () => {
    const [query, setQuery] = useState("")
    const [weather, setWeather] = useState({})
    
    const search = e => {
      if(e.key == "Enter"){
        fetch(`${api.baseUrl}weather?q=${query}&units=metric&appid=${api.key}`)
        .then(res => res.json())
        .then(result => setWeather(result))
        console.log(weather)
      }
    }
    
    const dateBuilder = o => {
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ]
      const days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ]
      let day = days[o.getDay()];
      let month = months[o.getMonth()];
      let date = o.getDate();
      let year = o.getFullYear();
      
      return `${day} ${month} ${date} ${year}`
    }
    
    if(weather?.main?.temp <= 10){
      document.querySelector('.app').classList.add('cold')
    }
  return (
    <>
        <div className={(typeof weather.main != 'undefined') ? ((weather.main.temp <= 10) ? 'app cold' : 'app') : 'app'}>
            <main className="row d-flex align-items-center g-0 p-5 justify-content-between">
                <div className="search-box col-lg-5 col-sm-12">
                  <input type="text" className="search-bar" placeholder="Search..." onChange={e => setQuery(e.target.value)} onKeyPress={search}/>
                </div>
                {(typeof weather.main != "undefined") ? (
                <div className="location-box col-lg-6 col-sm-12 py-4">
                    <div className="location">{weather.name}, {weather?.sys?.country}</div>
                    <div className="date">{dateBuilder(new Date())}</div>
                    <div className="weather-box">
                        <div className="temp">{Math.round(weather?.main?.temp)}°C</div>
                        <div className="weather">
                            <img src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}.png`}/> {weather.weather[0].main}
                        </div>
                    </div>  
                </div>
                ) : (
                <div className="col-lg-6 col-sm-12 d-flex justify-content-center">
                <h1 className="fw-bold">No information found</h1>
                </div> 
                )}
            </main>
        </div>
    </>
  )
}

export default Weather