// src/components/EarningsSummary.tsx
import React from 'react';

const EarningsSummary: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Top: Total Earnings Box */}
      <div className="p-6 bg-gray-50 rounded-[1.5rem] border border-gray-300 w-full">
        <h3 className="text-dashboard-text-dark font-medium mb-2">Total Earnings</h3>
        <p className="text-4xl font-bold text-[#8134AF]">$1,25,000</p>
      </div>

      {/* Bottom: Payment Summary (Always Side by Side) */}
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-gray-50 rounded-[1.5rem] border border-gray-300 text-center">
          <p className="text-xs sm:text-sm text-dashboard-text-light mb-1">Payment Awaited</p>
          <p className="text-lg sm:text-xl font-semibold text-[#8134AF]">$25,000</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-[1.5rem] border border-gray-300 text-center">
          <p className="text-xs sm:text-sm text-dashboard-text-light mb-1">Payment Overdue</p>
          <p className="text-lg sm:text-xl font-semibold text-[#8134AF]">$25,000</p>
        </div>
      </div>
    </div>
  );
};

export default EarningsSummary;
