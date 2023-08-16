import React, { useEffect } from 'react';
import { initFlowbite } from 'flowbite';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
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
          <a
            href='https://flowbite.com/'
            className='flex items-center pl-2.5 mb-5 bg-white'
          >
            <span className='bg-white self-center text-xl font-semibold whitespace-nowrap'>
              RAINOVA
            </span>
          </a>
          <div className='bg-white'>
            <svg
              className='w-4 h-4 text-gray-500 bg-gray-50 relative left-[15px] top-[35px]'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 20 20'
            >
              <path
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
              />
            </svg>
            <input
              type='search'
              id='default-search'
              className='block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              placeholder='Search Mockups, Logos...'
              required
            />
            <button
              type='submit'
              className='text-white relative left-[247px] bottom-[47px] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              Search
            </button>
          </div>
          <ul className='space-y-2 font-medium bg-white'>
            <li className='m-3 bg-white'>
              <a
                href='#'
                className='bg-white flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'
              >
                <svg
                  className='w-5 h-5 bg-white text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 22 21'
                >
                  <path d='M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z' />
                  <path d='M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z' />
                </svg>
                <span className='ml-3 bg-white'>Dashboard</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </header>
  );
}
