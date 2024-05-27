import React from 'react';


const Alert = ({ message, type, onClose }) => {
  if (!message) return null;

  const alertTypeClass = {
    success: 'bg-green-100 border-green-400 text-green-700',
    error: 'bg-red-100 border-red-400 text-red-700',
    warning: 'bg-yellow-100 border-yellow-400 text-yellow-700',
  };

  return (
    <div className={`border-l-4 p-4 ${alertTypeClass[type] || 'bg-blue-100 border-blue-400 text-blue-700'}`} role="alert">
      <p>{message}</p>
      <button onClick={onClose} className="ml-2 text-sm font-semibold text-right text-blue-500">Close</button>
    </div>
  );
};

export default Alert;
