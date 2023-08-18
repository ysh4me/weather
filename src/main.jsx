import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import Home from './components/Home';
import Today from './components/Today';
import Week from './components/Week';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/components/Home' element={<Home />} />
        <Route path='/components/Today' element={<Today />} />
        <Route path='/components/Week' element={<Week />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
