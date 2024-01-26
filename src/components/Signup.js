

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './BoxStyle.css';

function Signup() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
        gender: 'male', 
        password: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log(formData);
      };
    

  return(
    <div className='box-container'>
    <div className="box">
      
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>

        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>

        <label>
          Age:
          <input type="number" name="age" value={formData.age} onChange={handleChange} required />
        </label>

        <label>
          Gender:
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>

        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </label>

        <button type="submit">Sign Up</button>
      </form>
    </div></div>
  );
}

export default Signup;
