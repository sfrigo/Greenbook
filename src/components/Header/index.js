import { Link } from 'react-router-dom';
import React from 'react';

const Header = () => {
    return (
        <header className="bg-green-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="/" className="ml-3 text-xl">
            Greenbook
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="/about" className="mr-5 hover:text-white">
            About
          </a>
          <a href="/locations" className="mr-5 hover:text-white">
            Locations
          </a>
        <a
          href="/timeline"
          className="inline-flex items-center  border-0 py-1 px- focus:outline-none hover:text-white rounded text-base mt-4 md:mt-0">
          Timeline
          </a>
        </nav>
          </div>
          </header>

    )
}

export default Header;