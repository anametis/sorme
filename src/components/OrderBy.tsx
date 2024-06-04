import React, { useState } from 'react';

interface OrderByProps {
  onSortChange: (sortOption: string) => void;
  sortOption: string;
  className?: string
}

const OrderBy: React.FC<OrderByProps> = ({ onSortChange, sortOption ,className }) => {

  return (
    <div className={`flex items-center p-4 bg-gray-100 rounded-lg ${className}`}>
      <span className="mr-4 text-gray-700">Order By:</span>
      {[{ label: 'Most Popular', value: 'mostPopular' },{ label: 'Cheapest', value: 'cheapest' }, { label: 'New', value: 'newest' }, { label: 'Expensive', value: 'expensive' }, { label: 'Name A-Z', value: 'nameAZ' }, { label: 'Name Z-A', value: 'nameZA' }].map(
        ({ label, value }) => (
          <button
            key={value}
            onClick={() => onSortChange(value)}
            className={`px-4 py-2 mx-1 rounded-md ${
              sortOption === value ? 'bg-pink-300 text-white' : 'bg-gray-300 text-gray-700'
            }`}
          >
            {label}
          </button>
        )
      )}
    </div>
  );
};

export default OrderBy;
