// Checkbox.js
import React from 'react';

const Checkbox = ({ name, label, checked, onChange, error, checkboxLabel }) => {
  return (
    <div className="mb-4 grid grid-cols-2 gap-4 items-center">
      <label className="text-gray-700 text-sm font-bold"  >
        {label}
      </label>
      <div className='flex items=center'>
        <input
            id={name}
            type="checkbox"
            checked={checked}
            onChange={(e) => onChange(name, e.target.checked)}
            className="form-checkbox h-5 w-5 text-blue-600"
        />
        <label htmlFor={name}>{checkboxLabel}</label>
      </div>
      {error && <p className="text-red-500 text-xs italic col-span-2">{error}</p>}
      
    </div>
  );
};

export default Checkbox;
