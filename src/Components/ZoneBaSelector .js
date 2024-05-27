// ZoneBaSelector.js
import React from 'react';
import { b1Options } from './Options';
import Dropdown from './DropDown';

const ZoneBaSelector = ({ formData, setFormData }) => {
  const handleChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Get unique zones
  const zones = [...new Set(b1Options.map(option => option[0]))];

  // Filtered ba options based on selected zone
  const filteredBaOptions = b1Options
    .filter(option => option[0] === formData.zone)
    .map(option => [option[0], option[1]]);

  return (
    <>
      <Dropdown
        name="zone"
        label="Zone"
        value={formData.zone}
        onChange={handleChange}
        options={zones.map(zone => [zone, zone])}
      />
      <Dropdown
        name="ba"
        label="BA"
        value={formData.ba}
        onChange={handleChange}
        options={filteredBaOptions}
      />
    </>
  );
};

export default ZoneBaSelector;
