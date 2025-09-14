import React from 'react';
import {
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Line,
  ComposedChart,
} from 'recharts';

// Sample data for the chart - replace with your actual data structure
const data = [
  { name: 'Jan', income: 3000, momGrowth: 10 },
  { name: 'Feb', income: 4500, momGrowth: 30 },
  { name: 'Mar', income: 6500, momGrowth: 50 },
  { name: 'Apr', income: 3500, momGrowth: -20 },
  { name: 'May', income: 5500, momGrowth: 20 },
  { name: 'Jun', income: 2000, momGrowth: -30 },
];

const IncomeTrendChart: React.FC = () => {
  return (
    <div className="p-4 border border-gray-300 rounded-[1.5rem]">
      <h3 className="text-dashboard-text-dark font-medium">Income Trend</h3>
      <p className="text-sm text-dashboard-text-light mb-4">
        Your monthly income and growth for the last 6 months.
      </p>

      <div className="h-64 sm:h-72 lg:h-80 w-full">
        {/* Responsive height */}
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={data}
            margin={{ top: 20, right: 0, left: -20, bottom: 5 }} // Adjust left margin for Y-axis labels
          >
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              className="text-xs sm:text-sm text-gray-500"
            />
            <YAxis
              yAxisId="left"
              orientation="left"
              stroke="#8884d8"
              tickFormatter={(value) => `$${value / 1000}k`}
              axisLine={false}
              tickLine={false}
              className="text-xs sm:text-sm text-gray-500"
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              stroke="#82ca9d"
              tickFormatter={(value) => `${value}%`}
              axisLine={false}
              tickLine={false}
              className="text-xs sm:text-sm text-gray-500"
            />
            <Tooltip />
            <Bar
              yAxisId="left"
              dataKey="income"
              fill="#8B5CF6"
              barSize={30}
              radius={[5, 5, 0, 0]}
            />{' '}
            {/* Use Tailwind color */}
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="momGrowth"
              stroke="#A78BFA"
              strokeWidth={2}
              dot={false}
            />{' '}
            {/* Adjusted purple for line */}
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      <div className="flex justify-center gap-4 mt-4 text-xs sm:text-sm text-dashboard-text-light">
        <div className="flex items-center">
          <span className="inline-block w-3 h-3 rounded-full bg-dashboard-purple mr-1"></span>
          <span>income</span>
        </div>
        <div className="flex items-center">
          <span className="inline-block w-3 h-0.5 border-b-2 border-dashed border-dashboard-purple mr-1"></span>{' '}
          {/* Line style */}
          <span>momGrowth</span>
        </div>
      </div>
    </div>
  );
};

export default IncomeTrendChart;
