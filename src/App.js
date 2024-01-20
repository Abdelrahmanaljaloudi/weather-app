import logo from './logo.svg';
import './App.css';
import FormW from './components/FormW';
import LoginForm from './components/LoginForm';
import Signup from './components/Signup';
import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';


const api = {
  key: "8f637d4e9423cfbc473e25f570e124e9",
  base: "https://api.openweathermap.org/data/2.5/"
}
function App() {


  
  return (
    <div className="App ">
  <div>
  <Switch>
  <Route path="/loginForm" element={<LoginForm />} />
  <Route path="/signup" element={<Signup />} />
  <Route path="/weather" element={<FormW Api={api} />} />
  <Redirect from="/" to="/weather" />
</Switch>
  
    <FormW Api={api} />
    </div>
    </div>
  );
}

export default App;
