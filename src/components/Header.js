import appLogo from "../../src/images/logo_bigger.png";
import React from 'react';
import 'tailwindcss/tailwind.css';
import Navbar from "./Navbar";


function Header() {
  return (
    <header className="bg-gray-800">
      <nav className="navbar flex items-center justify-between flex-wrap bg-gray-700 p-0">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <img
                    className="hidden h-14 w-auto lg:block pl-4"
                    src={appLogo}
                    alt="Back2Life logo"
                  />
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
              <Navbar />
            </div>
            <div className="mt-4 lg:mt-0">
              <input className="rounded-full py-2 px-2 bg-gray-500 text-gray-100 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
            </div>
            <div className="mt-4 lg:mt-0 ml-4">
              <input className="rounded-full py-2 px-2 bg-gray-500 text-gray-100 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" />
            </div>
            <a href="#responsive-header" className="block mt-4 pl-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white ml-auto">
              Login
            </a>
          </div>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

      </nav>
    </header>
  );
}

export default Header;