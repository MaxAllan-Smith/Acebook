import React, { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import '../navbar/navbar.css'

const Navbar = ({ navigate }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));

  const handleLogout = () => {
    localStorage.removeItem('token');
  }

  return (
    <nav id='navBar' className='navbar navbar-expand-lg navbar-light bg-light'>
      <h1 id='logo'>Acebook</h1>
      <input id='searchBar' type='text' className='form-control' placeholder='🔍 Search Acebook' aria-label='Search Acebook' aria-describedby='basic-addon1' />
      {token ? (
        <div id='buttonContainer'>
          <Link to="/">
            <button id='buttonLogOut' type='button' className='btn btn-outline-primary' onClick={handleLogout}>Log Out</button>
          </Link>
        </div>
      ) : (
        <div id='buttonContainer'>
          <Link to="/login">
            <button id='buttonLogin' type='button' className='btn btn-outline-primary'>Login</button>
          </Link>
          <Link to="/signup">
            <button id='buttonSignUp' type='button' className='btn btn-outline-primary'>Sign Up</button>
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar;