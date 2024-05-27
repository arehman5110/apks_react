import React,  { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Login from './Pages/Auth/Login';
import Navbar from './Components/Navbar';
import Alert from './Components/Alert';


function App() {

  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');

  const showAlert = (message, type) => {
    setAlertMessage(message);
    setAlertType(type);
  };

  const closeAlert = () => {
    setAlertMessage('');
    setAlertType('');
  };
  return (
    <div className="App">
     
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </div>
  );
}

export default App;
