import React from 'react';
import Navbar from './Navbar';

function Home() {
  return (
    <div>
      <Navbar />
      <div className='p-4 sm:ml-[22rem]'>
        <h1>Home</h1>
      </div>
    </div>
  );
}

export default Home;
