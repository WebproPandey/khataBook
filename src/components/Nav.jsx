import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-200">
      <div className="logo">
        <h1>KhataBook</h1>
      </div>
      <div className="md:flex space-x-4 hidden justify-center  items-center">
        <Link to="/home" className="text-gray-700 hover:text-blue-500">Home</Link>
        <Link to="/home/CreateHissab" className="text-gray-700 hover:text-blue-500">Create New Hissab</Link>
        <button id="mode-toggle" className="p-2 bg-blue-500 text-white rounded">
          Mode
        </button>
      </div>
      <button onClick={toggleMenu} className="md:hidden p-2 bg-blue-500 text-white rounded">
        Menu
      </button>
      {isOpen && (
        <div className="absolute top-16 right-0 w-1/2 bg-gray-200 md:hidden">
          <Link to="/home" className="block text-gray-700 hover:text-blue-500 p-2">Home</Link>
          <Link to="/home/CreateHissab" className="block text-gray-700 hover:text-blue-500 p-2">Create New Hissab</Link>
          <button id="mode-toggle" className="block w-full p-2 bg-blue-500 text-white rounded">
            Mode
          </button>
        </div>
      )}
    </nav>
  );
};

export default Nav;