import React from 'react';
import { BrowserRouter, Routes, Route,Router } from "react-router-dom";
import { AuthProvider } from './components/AuthContext';
import FormW from './components/FormW';
import LoginForm from './components/LoginForm';
import Signup from './components/Signup';
import './App.css';


const api = {
  key: "8f637d4e9423cfbc473e25f570e124e9",
  base: "https://api.openweathermap.org/data/2.5/"
};

function App() {
  return (
    <div className="App">
      <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/weather" element={<FormW Api={api} />} />
        </Routes>
      </BrowserRouter>

      </div>
    </div>
  );
}

export default App;
