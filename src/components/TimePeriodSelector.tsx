// src/components/TimePeriodSelector.tsx
import React from 'react';
import crown from './crown.png';
import calendar from './calender.png';

const TimePeriodSelector: React.FC = () => {
  const periodsTop = [
    { label: '1Month', active: false },
    { label: '3Months', active: true },
    { label: '1Year', active: false, crown: true },
  ];

  const periodBottom = { label: 'Custom', active: false, icon: calendar };

  return (
    <div className="p-6 bg-white rounded-[1.5rem] border border-gray-300">
      {/* Header row */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-dashboard-text-dark font-medium">Time Period</h3>
        <span className="text-sm text-dashboard-text-light">
          dd:mm:yyyy - dd:mm:yyyy
        </span>
      </div>

      {/* Top row buttons */}
      <div className="flex flex-wrap gap-3 mb-3">
        {periodsTop.map((period, index) => {
          let baseClasses =
            'px-4 py-1.5 text-sm rounded-full font-medium border border-gray-300 flex items-center';
          let activeClasses = '';
          if (period.label === '3Months') {
            activeClasses = 'bg-[#F3E8FF] text-[#4B0082]'; // Highlight
          } else if (period.active) {
            activeClasses = 'bg-dashboard-light-purple text-dashboard-purple';
          } else {
            activeClasses =
              'bg-gray-100 text-dashboard-text-light hover:bg-gray-200';
          }

          return (
            <button key={index} className={`${baseClasses} ${activeClasses}`}>
              {period.label}
              {period.crown && (
                <img src={crown} alt="crown" className="ml-2 w-4 h-4" />
              )}
            </button>
          );
        })}
      </div>

      {/* Custom button below */}
      <button className="px-4 py-1.5 text-sm rounded-full font-medium border border-gray-300 bg-gray-100 text-dashboard-text-light hover:bg-gray-200 flex items-center">
        <img src={periodBottom.icon} alt="calendar" className="w-4 h-4 mr-2" />
        {periodBottom.label}
      </button>
    </div>
  );
};

export default TimePeriodSelector;
