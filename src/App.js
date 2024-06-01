import React  from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Login from './Pages/Auth/Login';
import Navbar from './Components/Navbar'; 


function App() {

 
  
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
