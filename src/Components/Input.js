// Input.js
import React from 'react';

const Input = ({ name, label, type = "text", value, onChange, error}) => {
  return (
    <div className="grid grid-cols-2   gap-4 mb-4">
      <label className="text-gray-700 text-sm font-bold" htmlFor={name}>
        {label}
      </label>
      <div>
      {error && <p className="text-red-500 text-xs italic">{error}</p>}
        <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${error ? 'border-red-500' : ''}`}
            id={name}
            type={type}
            value={value}
            onChange={(e) => onChange(name, e.target.value)}
        />
      </div>
    </div>
  );
};

export default Input;
