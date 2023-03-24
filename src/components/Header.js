import appLogo from "../../src/images/logo_bigger.png";
import React from 'react';
import 'tailwindcss/tailwind.css';
import Navbar from "./Navbar";
import Login from "./Login";


function Header() {
  return (
    <header className="bg-gray-800">
      <nav className="navbar flex items-center justify-between flex-nowrap bg-gray-600 p-2">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <img
                    className="hidden h-16 w-auto lg:block pl-4"
                    src={appLogo}
                    alt="Back2Life logo"
                  />
          <div className="w-1/2 md:w-full  block flex-grow md:flex md:items-center md:w-auto">
            <div className="text-sm flex flex-col md:flex-row">
              <Navbar />
            </div>
            <Login/>
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