// ImageUpload.js
import React, { useState } from 'react';
import Modal from 'react-modal';

const ImageUpload = ({ name, label, value, onChange, error }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleDelete = () => {
    onChange(name, null);
  };

  const handleImageClick = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
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
          {value ?  
              <img
                src={URL.createObjectURL(value)}
                alt="Selected"
                className="h-8 w-8 rounded-full cursor-pointer"
                onClick={handleImageClick}
              />  
           : ' '}

          <label
            htmlFor={name}
            className={`cursor-pointer flex items-center 
                bg-blue-500 hover:bg-blue-700 text-white font-bold  py-1 px-4 rounded focus:outline-none focus:shadow-outline`}
          >
        
            Upload Image
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
      
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Image Modal">
        <button onClick={closeModal} className="float-right bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline">
          Close
        </button>
        {value && <img src={URL.createObjectURL(value)} alt="Selected" className="block mx-auto mt-4" />}
      </Modal>
    </div>
  );
};

export default ImageUpload;
