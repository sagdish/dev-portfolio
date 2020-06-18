import React from 'react';
import { useLocation, Link } from 'react-router-dom';

import './style.css'

function Navbar() {

  const location = useLocation();
  // console.log('location',location)
  return (
    <div className='nav-bar'>
      {/* {location.pathname === '/' ? null : (
      <div className='pages-title'>
        <h3>Bio</h3><h3>Projects</h3><h3>Blog</h3><h3>Contact</h3>
      </div>)} */}
      <div className='line'>
        <hr/>
      </div>
    </div>
  );
}

export default Navbar;