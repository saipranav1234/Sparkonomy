// src/components/Header.tsx
import React from 'react';
import pfp from './image.png'
import { FaChevronLeft } from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-pink-100 shadow-sm sticky top-0 z-10 w-full">
      <div className="flex items-center space-x-2 text-dashboard-text-dark">
        {/* Simple back arrow, replace with an SVG icon if preferred */}

        <FaChevronLeft className='h-5 w-5"' />

        <span className="font-medium text-lg">Back</span>
      </div>
      <h1 className="text-xl font-semibold text-dashboard-text-dark">Dashboard</h1>
      <div className="relative">
        <img src={pfp} alt="User profile" className="w-8 h-8 rounded-full border-2 border-dashboard-purple" />
        <span className="absolute bottom-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-green-400"></span> {/* Online indicator */}
      </div>
    </header>
  );
};

export default Header;