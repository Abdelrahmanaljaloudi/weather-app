import React, { useState } from 'react';
import './BoxStyle.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
      const response = await axios.post('http://localhost:9000/login', { email, password });

      console.log(response.data);

      if (response.data === "Success") {
        // Use 'navigate' from 'react-router-dom' to redirect to '/weather'
        navigate('/weather');
      }
    } catch (error) {
      console.error('Error during login:', error);
      // Handle error (show a message, redirect to an error page, etc.)
    }
  };

  return (
    <div className='box-container'>
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
    </div>
  );
}

export default LoginForm;
