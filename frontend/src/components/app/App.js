import './App.css';
import LoginForm from '../auth/LoginForm'
import SignUpForm from '../user/SignUpForm'
import React, { useState } from 'react';
import Feed from '../feed/Feed'
import Homepage from '../homepage/homepage';
import {
  useNavigate,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage navigate={useNavigate()} />} />
        <Route path='/posts' element={<Feed navigate={useNavigate()} />} />
        <Route path='/login' element={<LoginForm navigate={useNavigate()} />} />
        <Route path='/signup' element={<SignUpForm navigate={useNavigate()} />} />
      </Routes>
    </>
  );
}

export default App;
