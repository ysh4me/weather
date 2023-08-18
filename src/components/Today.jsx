import React, { useState } from 'react';
import Navbar from './Navbar';

const api = {
  key: '5df34b34b49a43190c11005f47a9ec91',
  base: 'https://api.openweathermap.org/data/2.5/',
};

export default function Today() {
  const [weather, setWeather] = useState({});

  const handleSearch = (query) => {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        console.log(result);
      });
  };

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
        <div>
          <h1>{weather.name}</h1>
        </div>
        <div>
          <h5>{dateBuilder(new Date())}</h5>
        </div>
        <div>
          <div>
            <h2>15°</h2>
          </div>
          <div>
            <h3>Sunny</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
