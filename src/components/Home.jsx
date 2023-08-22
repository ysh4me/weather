import React, { useState } from 'react';
import Navbar from './Navbar';

function Home() {
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
      <div className='p-4 sm:ml-[22rem] h-full'>
        <div className='flex justify-center items-center'>
          <h2>{dateBuilder(new Date())}</h2>
        </div>
        <h1>Home</h1>
      </div>
    </div>
  );
}

export default Home;
