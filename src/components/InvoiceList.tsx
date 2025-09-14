// src/components/InvoiceList.tsx
import React from 'react';
import InvoiceItem from './InvoiceItem';
import type { InvoiceItemProps } from './InvoiceItem'; // ✅ type-only import

const invoices: InvoiceItemProps[] = [
  { clientName: 'Client Name', amount: '1,25,000', dueDate: '2024-06-15', status: 'Update Status' },
  { clientName: 'Client Name', amount: '1,25,000', dueDate: '2024-06-15', status: 'Unpaid' },
  { clientName: 'Income Trend', amount: '1,25,000', dueDate: '2024-06-15', status: 'Disputed' },
  { clientName: 'Income Trend', amount: '1,25,000', dueDate: '2024-06-15', status: 'Paid' },
  { clientName: 'Income Trend', amount: '1,25,000', dueDate: '2024-06-15', status: 'Paid' },
  { clientName: 'Income Trend', amount: '1,25,000', dueDate: '2024-06-15', status: 'Partially Paid' },
  { clientName: 'Income Trend', amount: '1,25,000', dueDate: '2024-06-15', status: 'Paid' },
  { clientName: 'Income Trend', amount: '1,25,000', dueDate: '2024-06-15', status: 'Overdue' },
  { clientName: 'Income Trend', amount: '1,25,000', dueDate: '2024-06-15', status: 'Awaited' },
  { clientName: 'Income Trend', amount: '1,25,000', dueDate: '2024-06-15', status: 'Draft' },
  { clientName: 'Income Trend', amount: '1,25,000', dueDate: '2024-06-15', status: 'Paid' },
];


const InvoiceList: React.FC = () => {
  return (
    <div className="p-4 bg-white border border-gray-300 rounded-[1.5rem] mb-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-dashboard-text-dark font-medium text-lg">Your Invoices</h3>
        {/* Dropdown for sorting/filtering, using a simple SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      <div className="space-y-3">
        {invoices.map((invoice, index) => (
          <InvoiceItem key={index} {...invoice} />
        ))}
      </div>
    </div>
  );
};

export default InvoiceList;
