import React from 'react';
import Navbar from './Navbar.jsx';
import './header.css'



function Header() {
    return (
      <div className='Top'>
        <div className="Header">
          <h1 className='H1'> Welcome to our project about movies</h1>
          <Navbar/>
        </div>
      </div>
    );
}

export default Header