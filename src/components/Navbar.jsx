import React, { useEffect, useState } from 'react';
import { initFlowbite } from 'flowbite';
import { NavLink } from 'react-router-dom';

export default function Navbar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query) {
      onSearch(query);
      setQuery('');
    }
  };

  useEffect(() => {
    initFlowbite();
  }, []);

  return (
    <header>
      <button
        data-drawer-target='sidebar'
        data-drawer-toggle='sidebar'
        aria-controls='sidebar'
        type='button'
        className='inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
      >
        <span className='sr-only'>Open sidebar</span>
        <svg
          className='w-6 h-6'
          aria-hidden='true'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            clipRule='evenodd'
            fillRule='evenodd'
            d='M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z'
          ></path>
        </svg>
      </button>

      <aside
        id='sidebar'
        className='fixed top-0 left-0 z-40 w-[350px] h-screen transition-transform -translate-x-full sm:translate-x-0'
        aria-label='sidebar'
      >
        <div className='h-full px-3 py-4 overflow-y-auto bg-white'>
          <NavLink
            to='/components/Home'
            className='flex items-center bg-white justify-center'
          >
            <span className='bg-white self-center text-[3.25rem] font-semibold whitespace-nowrap text-black'>
              RAINOVA
            </span>
          </NavLink>
          <div className='bg-white border-b'>
            <svg
              className='w-4 h-4 text-gray-500 bg-gray-50 relative left-[15px] top-[35px]'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 20 20'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
              />
            </svg>
            <input
              type='search'
              id='default-search'
              className='shadow block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Search ...'
              onChange={(e) => setQuery(e.target.value)}
              value={query}
              required
            />
            <button
              type='submit'
              onClick={handleSearch}
              className='text-white relative left-[247px] bottom-[47px] bg-primary-100 hover:bg-primary-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              Search
            </button>
          </div>
          <ul className='space-y-2 font-medium bg-white'>
            <li className='m-3 bg-white'>
              <NavLink
                to='/components/Home'
                className='bg-white mb-3 flex items-center p-2 text-gray-900 rounded-lg hover:text-primary-200 hover:bg-gray-100 group'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='mr-[20px] bg-transparent w-6 h-6 text-black transition duration-75'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
                  />
                </svg>
                Home
              </NavLink>
              <NavLink
                to='/components/Today'
                className='bg-white mb-3 flex items-center p-2 text-gray-900 rounded-lg hover:text-primary-200 hover:bg-gray-100 group'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='mr-[20px] bg-transparent w-6 h-6 text-black transition duration-75'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z'
                  />
                </svg>
                Weather of the day
              </NavLink>
              <NavLink
                to='/components/Week'
                className='bg-white mb-3 flex items-center p-2 text-gray-900 rounded-lg hover:text-primary-200 hover:bg-gray-100 group'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='mr-[20px] bg-transparent w-6 h-6 text-black transition duration-75'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z'
                  />
                </svg>
                Weather of the week
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
    </header>
  );
}
