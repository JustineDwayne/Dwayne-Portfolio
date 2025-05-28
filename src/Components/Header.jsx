import React from 'react';
import logo from '../Assets/circle.png';

function Header() {
  return (
    <header className="bg-zinc-900 sticky top-0 z-20 px-6 py-3 flex items-center shadow-md">
      <img src={logo} alt="logo" className="w-12 h-12 mr-4" />
      <h1 className="text-white text-xl font-semibold tracking-wide select-none">
        Dwayne
      </h1>
    </header>
  );
}

export default Header;
