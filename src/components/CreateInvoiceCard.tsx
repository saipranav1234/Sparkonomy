// src/components/CreateInvoiceCard.tsx
import React from 'react';
import plus from './Vector.png';

const CreateInvoiceCard: React.FC = () => {
  return (
    <div className="w-full mt-6 flex flex-col items-center text-center">
      {/* Grey Background Section */}
      <div className="w-full bg-gray-100 rounded-[2rem] p-6 flex flex-col items-center">
        <div className="flex items-center justify-center w-14 h-14 mb-4 bg-dashboard-purple text-fuchsia-600 rounded-full text-4xl font-light">
          <img src={plus} alt="" />
        </div>

        {/* Gradient Text */}
        <h2
          className="text-xl font-semibold mb-1 bg-clip-text text-transparent"
          style={{
            backgroundImage:
              'linear-gradient(169.7deg, #DD2A7B 1.49%, #9747FF 42.07%, #334CCA 99.84%)',
          }}
        >
          Create New Invoice
        </h2>

        <p className="text-sm text-dashboard-text-light leading-tight">
          Start by creating and sending new invoice
        </p>
      </div>

      {/* Last Line with Solid Purple Background */}
      <p
        className="mt-5 text-xs text-white leading-tight px-3 py-2 rounded-full"
        style={{ color: 'rgba(129, 52, 175, 1)' }}
      >
        Or Upload an existing invoice and set payment reminder
      </p>
    </div>
  );
};

export default CreateInvoiceCard;
