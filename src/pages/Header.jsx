import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Select Components</h1>
        <nav>
          <Link to="/" className="text-white px-4">Home</Link>
          <Link to="/selects1" className="text-white px-4">Selects 1</Link>
          <Link to="/selects2" className="text-white px-4">Selects 2</Link>
          <Link to="/selects3" className="text-white px-4">Selects 3</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
