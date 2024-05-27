// Dropdown.js
import React from 'react';

const Dropdown = ({ name, label, value, onChange, options }) => {
  return (
    <div className="grid grid-cols-2 gap-4 mb-4">
      <label className="text-gray-700 text-sm font-bold" htmlFor={name}>
        {label}
      </label>
      <select
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={name}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
      >
        <option value="" hidden>Select {label}</option>
        {options.map((option, index) => (
          <option key={index} value={option[0]}>
            {option[1]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
