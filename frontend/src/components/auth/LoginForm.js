import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/navbar';

const LogInForm = ({ navigate }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    let response = await fetch('/tokens', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email, password: password })
    })

    if (response.status !== 201) {
      console.log("yay")
      navigate('/login')
    } else {
      console.log("oop")
      let data = await response.json()
      window.localStorage.setItem("token", data.token)
      navigate("/posts");
    }
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }


  return (
    <form onSubmit={handleSubmit}>
      <Navbar />
      <input placeholder='Email' id="email" type='text' value={email} onChange={handleEmailChange} />
      <input placeholder='Password' id="password" type='password' value={password} onChange={handlePasswordChange} />
      <input role='submit-button' id='submit' type="submit" value="Submit" />
    </form>
  );
}

export default LogInForm;
