// ImageUpload.js
import React from 'react';

const ImageUpload = ({ name, label, value, onChange, error }) => {
  const handleDelete = () => {
    onChange(name, null);
  };

  return (
    <div className="mb-4">
      <div className="grid grid-cols-2 gap-4 items-center">
        <label className="text-gray-700 text-sm font-bold" htmlFor={name}>
          {label}
        </label>
        <div className="flex items-center">
          <input
            className={`hidden`}
            id={name}
            type="file"
            accept="image/*"
            onChange={(e) => onChange(name, e.target.files[0])}
          />
          <label
            htmlFor={name}
            className={`cursor-pointer flex items-center ${
              value ? 'bg-gray-200 px-2 py-1 rounded-lg' : 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            }`}
          >
            {value ? (
              <>
                <img src={URL.createObjectURL(value)} alt="Selected" className="h-8 w-8 rounded-full" />
                <span className="ml-2">Change</span>
              </>
            ) : (
              'Upload Image'
            )}
          </label>
          {value && (
            <button
              type="button"
              onClick={handleDelete}
              className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
            >
              Delete
            </button>
          )}
        </div>
      </div>
      {error && <p className="text-red-500 text-xs italic">{error}</p>}
    </div>
  );
};

export default ImageUpload;
