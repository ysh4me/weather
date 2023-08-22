import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

const api = {
  key: '5df34b34b49a43190c11005f47a9ec91',
  base: 'https://api.openweathermap.org/data/2.5/',
};

export default function Week() {
  const [weather, setWeather] = useState({});

  const handleSearch = (query) => {
    fetch(`${api.base}forecast?q=${query}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        console.log(result);
        localStorage.setItem('weather', JSON.stringify(result));
        localStorage.setItem('query', query);
      });
  };

  useEffect(() => {
    const query = localStorage.getItem('query');

    if (query) {
      handleSearch(query);
    }
  }, []);

  const dateBuilder = (d) => {
    let months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    let days = [
      'Monday',
      'Tuesday',
      'Wendesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div>
      <Navbar onSearch={handleSearch} />
      <div className='p-4 sm:ml-[22rem]'>
        <div className='flex justify-center items-center'>
          <h2>{dateBuilder(new Date())}</h2>
        </div>
        {weather.list && (
          <div>
            <h1 className=' bg-transparent flex justify-center'>
              {weather.city.name}, {weather.city.country}
            </h1>
            <div className='flex flex-row flex-wrap gap-5 justify-center items-center ml-[100px] mr-[100px] mt-[30px]'>
              <div className='bg-white rounded-[20px] shadow w-[200px] h-[200px]'>
                <p>{weather.list[1].dt_txt}</p>
                <p>{Math.round(weather.list[1].main.temp)}°</p>
                <p>{weather.list[1].weather[0].main}</p>
              </div>
              <div className='bg-white rounded-[20px] shadow w-[200px] h-[200px]'>
                <p>{weather.list[9].dt_txt}</p>
                <p>{Math.round(weather.list[9].main.temp)}°</p>
                <p>{weather.list[9].weather[0].main}</p>
              </div>
              <div className='bg-white rounded-[20px] shadow w-[200px] h-[200px]'>
                <p>{weather.list[17].dt_txt}</p>
                <p>{Math.round(weather.list[17].main.temp)}°</p>
                <p>{weather.list[17].weather[0].main}</p>
              </div>
              <div className='bg-white rounded-[20px] shadow w-[200px] h-[200px]'>
                <p>{weather.list[25].dt_txt}</p>
                <p>{Math.round(weather.list[25].main.temp)}°</p>
                <p>{weather.list[25].weather[0].main}</p>
              </div>
              <div className='bg-white rounded-[20px] shadow w-[200px] h-[200px]'>
                <p>{weather.list[33].dt_txt}</p>
                <p>{Math.round(weather.list[33].main.temp)}°</p>
                <p>{weather.list[33].weather[0].main}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
