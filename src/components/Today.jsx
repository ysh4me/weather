import React from 'react';
import Navbar from './Navbar';

const api = {
  key: '5df34b34b49a43190c11005f47a9ec91',
  base: 'https://api.openweathermap.org/data/2.5/',
};

export default function Today() {
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
      <Navbar />
      <div className='p-4 sm:ml-[22rem]'>
        <div>
          <h1>Paris, FR</h1>
        </div>
        <div>
          <h3>{dateBuilder(new Date())}</h3>
        </div>
        <div></div>
      </div>
    </div>
  );
}
