import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === '') {
        setEmailError('Enter email');
    }

    
    if (password === '') {
      setPasswordError('Enter password');
      return '';

  }
    // For demonstration, we're using a simple validation.
    // In a real-world app, you would handle authentication here.
    if (email === 'test@example.com' && password === 'password') {
      alert('Login successful!');
    } else {
      setError('Invalid email or password');
    }

  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        {error && <div className="p-2 text-sm text-center text-red-600 bg-red-100 border border-red-400 rounded">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-1">

            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
            {emailError && <div className=" text-sm  text-red-600   ">{emailError}</div>}

            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            {passwordError && <div className="  text-sm   text-red-600   ">{passwordError}</div>}
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
