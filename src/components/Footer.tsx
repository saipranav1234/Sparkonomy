// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 text-center bg-white text-dashboard-text-light text-sm">
      <div className="flex items-center justify-center space-x-1 mb-1">
        <span className="font-semibold text-dashboard-text-dark">Spark</span>
        <span className="font-light text-dashboard-text-dark">onomy</span>
      </div>
      <p className="text-xs">sparking the creator economy</p>
    </footer>
  );
};

export default Footer;