import React, { PureComponent } from 'react';
import '../navbar/navbar.css'

class Navbar extends PureComponent {
  state = {}
  render() {
    return (
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <a id='logo' className='navbar-brand' href='#'>
          Acebook
        </a>
        <a>
          <input id='searchAcebook' type='text' className='form-control' placeholder='🔍 Search Acebook' aria-label='Search Acebook' aria-describedby='basic-addon1' />
        </a>
      </nav>
    );
  }
}

export default Navbar;