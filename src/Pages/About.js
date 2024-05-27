// Form.js
import React, { useState } from 'react';
import Input from '../Components/Input';  
import ZoneBaSelector from '../Components/ZoneBaSelector ';
import { type } from '../Components/Options';
import Dropdown from '../Components/DropDown';
import ImageUpload from '../Components/ImageUpload';




const Form = () => {
  const [formData, setFormData] = useState({
    zone: '',
    ba: '',
    fl:'',
    name:'',
    type:'',
    voltage:'',
    roadname: '',
    visitDate: '',
    patrolTime: '',
    substationImage1: null,
  });

  const [errors, setErrors] =useState({});

  const handleChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors((preErrors) => ({
      ...preErrors,
      [name]:''
    }))
  };


  const validateForm = () => {
    const newErrors = {};
    if (!formData.zone) newErrors.zone = 'Zone is required';
    if (!formData.ba) newErrors.ba = 'BA is required';
    if (!formData.fl) newErrors.fl = 'Road Name is required';
    if (!formData.visitDate) newErrors.visitDate = 'Visit Date is required';
    if (!formData.patrolTime) newErrors.patrolTime = 'Patrol Time is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log('Form Data:', formData);
    // You can also send form data to a server here
  };
 

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 w-2/3 mx-auto rounded-lg shadow-lg mt-10">
      <h2 className="text-xl text-center font-bold mb-4">Substation Form</h2>
      <ZoneBaSelector formData={formData} setFormData={setFormData} />
      <Input name="fl" label="FL Substation" value={formData.fl} onChange={handleChange} error={errors.fl} />
      <Input name="name" label="Substation / Feeder Pillar name" value={formData.name} onChange={handleChange} />
      <Dropdown name="type" label="Type" value={formData.type} onChange={handleChange}  options={type} />
      <Input name="voltage" label="Voltage" value={formData.voltage} onChange={handleChange} />
      <Input name="visitDate" label="Survey Date" type="date" value={formData.visitDate} onChange={handleChange} />
      <Input name="patrolTime" label="Patrol Time" type="time" value={formData.patrolTime} onChange={handleChange} />
      <ImageUpload name="substationImage1" label="Substation Image 1" value={formData.substationImage1} onChange={handleChange} error={errors.substationImage1} />

      <Input name="fl" label="FL Substation" value={formData.fl} onChange={handleChange} />
      <Input name="fl" label="FL Substation" value={formData.fl} onChange={handleChange} />
      <Input name="fl" label="FL Substation" value={formData.fl} onChange={handleChange} />
      <Input name="fl" label="FL Substation" value={formData.fl} onChange={handleChange} />
      <Input name="fl" label="FL Substation" value={formData.fl} onChange={handleChange} />
      <Input name="fl" label="FL Substation" value={formData.fl} onChange={handleChange} />
      <Input name="fl" label="FL Substation" value={formData.fl} onChange={handleChange} />


      <Input name="roadname" label="Road Name" value={formData.roadname} onChange={handleChange} />
      
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
