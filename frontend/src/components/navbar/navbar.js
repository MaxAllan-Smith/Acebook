import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../navbar/navbar.css'

const Navbar = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
  }

  return (
    <nav id='navBar' className='navbar navbar-expand-lg navbar-light bg-light'>
      <h1 id='logo'>Acebook</h1>
      <input id='searchBar' type='text' className='form-control' placeholder='🔍 Search Acebook' aria-label='Search Acebook' aria-describedby='basic-addon1' />
      {token ? (
        <div id='buttonContainer'>
          <button id='buttonLogOut' type='button' className='btn btn-outline-primary' onClick={handleLogout}>Log Out</button>
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

// {/* <button id='buttonLogOut' type='button' className='btn btn-outline-primary'>Log Out</button> */ }
//   <button id='buttonLogin' type='button' className='btn btn-outline-primary'>Login</button>
// <button id='buttonSignUp' type='button' className='btn btn-outline-primary'>Sign Up</button>