import React from 'react';

export interface InvoiceItemProps {
  clientName: string;
  amount: string;
  dueDate: string;
  status:
    | 'Update Status'
    | 'Unpaid'
    | 'Disputed'
    | 'Paid'
    | 'Partially Paid'
    | 'Overdue'
    | 'Awaited'
    | 'Draft';
}

const InvoiceItem: React.FC<InvoiceItemProps> = ({
  clientName,
  amount,
  dueDate,
  status,
}) => {
  let statusClasses = '';
  let showNotification = false;
  let showEditIcon = false;

  switch (status) {
    case 'Update Status':
      statusClasses = 'bg-purple-700 text-white';
      break;
    case 'Paid':
      statusClasses = 'bg-green-100 text-status-paid';
      break;
    case 'Partially Paid':
      statusClasses = 'bg-yellow-100 text-status-partially-paid';
      break;
    case 'Overdue':
      statusClasses = 'bg-red-100 text-status-overdue';
      showNotification = true;
      break;
    case 'Awaited':
      statusClasses = 'bg-yellow-100 text-status-awaited';
      showNotification = true;
      break;
    case 'Draft':
      statusClasses = 'bg-gray-100 text-dashboard-text-light';
      showEditIcon = true;
      break;
    case 'Unpaid':
    case 'Disputed':
      statusClasses = 'bg-red-100 text-status-unpaid';
      break;
    default:
      statusClasses = 'bg-gray-100 text-gray-700';
  }

  return (
    <div className="flex items-center justify-between p-4 border border-gray-300 rounded-[1.5rem]">
      <div className="flex-1 min-w-0 pr-2">
        <h4 className="font-semibold text-dashboard-text-dark text-base sm:text-lg truncate">
          {clientName}
        </h4>
        <p className="text-sm text-dashboard-text-light truncate">
          ₹{amount}, Due: {dueDate}
        </p>
      </div>
      <div className="flex items-center gap-2">
        {showNotification && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        )}
        {showEditIcon && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
        )}
        <button
          className={`px-4 py-2 text-sm rounded-full font-medium ${statusClasses}`}
        >
          {status}
          {status === 'Update Status' && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1 inline"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default InvoiceItem;
