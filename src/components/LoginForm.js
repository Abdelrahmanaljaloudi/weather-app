import React, { useState } from 'react';
import './BoxStyle.css'
function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Make a POST request to your server's login endpoint
    try {
      const response = await fetch('http://localhost:9000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Successful login, handle accordingly (e.g., set user state, redirect, etc.)
        console.log('Login successful', data);
      } else {
        // Failed login, handle accordingly (e.g., show error message)
        console.error('Login failed', data);
      }
    } catch (error) {
      console.error('Error during login', error);
    }
  };

  return (
    <div className="box">
      <form onSubmit={handleSubmit} className="login-form">
        <div>
          <br></br>
          <h1>Login</h1>
        </div>

        <label>
          Email:
          <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>

        <label>
          Password:
          <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>

        <div>
          <button type='submit'>Login</button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
