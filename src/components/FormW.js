import React, { useState } from 'react';
import './StyleSheet.css';

function FormW({Api}) {
    const dateBuilder = (d) => {
        var months = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
        return `${day} ${date} ${month} ${year}`;
    };

    const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  
    const search = evt => {
      if (evt.key === "Enter") {
        fetch(`${Api.base}weather?q=${query}&units=metric&APPID=${Api.key}`)
          .then(res => res.json())
          .then(result => {
            setWeather(result);
            setQuery('');
            console.log(result);
          });
      }
    }
  

    return (
        <div className='cont'>
          <div className='search-box'>
            <input
              type='text'
              className='search-bar'
              placeholder='Enter A Country Name'
              onChange={e => setQuery(e.target.value)}
              value={query}
              onKeyPress={search}
            />
          </div>
          {(typeof weather.main != "undefined") ? (
        <div>
          <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temp">
              {Math.round(weather.main.temp)}°C
            </div>
            <div className="weather">{weather.weather[0].main}</div>
          </div>
        </div>
        ) : ('')}
        </div>
      );
      
     
   
}

export default FormW;
