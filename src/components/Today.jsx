import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

const api = {
  key: '5df34b34b49a43190c11005f47a9ec91',
  base: 'https://api.openweathermap.org/data/2.5/',
};

// https://api.openweathermap.org/data/2.5/weather?q=paris&units=metric&APPID=5df34b34b49a43190c11005f47a9ec91

export default function Today() {
  const [weather, setWeather] = useState({});

  const handleSearch = (query) => {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
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
      <div className='p-4 sm:ml-[22rem] h-full'>
        <div className='flex justify-center items-center'>
          <h2>{dateBuilder(new Date())}</h2>
        </div>
        {weather.main && (
          <div>
            <div className='flex items-end pl-[60px]'>
              <div>
                <h2 className='text-[190px] text-primary-100'>
                  {Math.round(weather.main.temp)}°
                </h2>
              </div>
              <div className='relative right-[70px] bg-transparent'>
                <p className='text-[65px] bg-transparent'>
                  {weather.weather[0].main}
                </p>
                <p className='pl-[6px] text-[20px]'>
                  {weather.weather[0].description}
                </p>
              </div>
            </div>
            <div>
              <div className='flex justify-end pr-[50px] relative bottom-[57px] bg-transparent'>
                <h1>
                  {weather.name}, {weather.sys.country}
                </h1>
              </div>
            </div>
            <div>
              <h4 className='m-3 underline'>Today's highlights</h4>
            </div>
            <div className='flex flex-row flex-wrap gap-5 justify-center items-center ml-[100px] mr-[100px] mt-[30px]'>
              <div className='bg-white rounded-[20px] shadow w-[200px] h-[200px]'>
                <p className='bg-white m-4 text-primary-300 underline'>
                  Feels Like
                </p>
                <p className='bg-white text-primary-100 flex justify-center items-center text-[70px]'>
                  {Math.round(weather.main.feels_like)}°
                </p>
              </div>
              <div className='bg-white rounded-[20px] shadow w-[200px] h-[200px]'>
                <p className='bg-white m-4 text-primary-300 underline'>
                  Humidity
                </p>
                <p className='bg-white text-primary-100 flex justify-center items-center text-[70px]'>
                  {weather.main.humidity}%
                </p>
              </div>
              <div className='bg-white rounded-[20px] shadow w-[200px] h-[200px]'>
                <p className='bg-white m-4 text-primary-300 underline'>
                  Wind Speed
                </p>
                <p className='bg-white text-primary-100 flex justify-center items-center text-[70px]'>
                  {Math.round(weather.wind.speed)} MPH
                </p>
              </div>
              <div className='bg-white rounded-[20px] shadow w-[200px] h-[200px]'>
                <p className='bg-white m-4 text-primary-300 underline'>
                  Tempature min
                </p>
                <p className='bg-white text-primary-100 flex justify-center items-center text-[70px]'>
                  {Math.round(weather.main.temp_min)}°
                </p>
              </div>
              <div className='bg-white rounded-[20px] shadow w-[200px] h-[200px]'>
                <p className='bg-white m-4 text-primary-300 underline'>
                  Tempature max
                </p>
                <p className='bg-white text-primary-100 flex justify-center items-center text-[70px]'>
                  {Math.round(weather.main.temp_max)}°
                </p>
              </div>
              <div className='bg-white rounded-[20px] shadow w-[200px] h-[200px]'>
                <p className='bg-white m-4 text-primary-300 underline'>Cloud</p>
                <p className='bg-white text-primary-100 flex justify-center items-center text-[70px]'>
                  {weather.clouds.all}%
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
