import React from 'react';
import { useLocation, Link } from 'react-router-dom';

import './style.css'

function Navbar() {

  const location = useLocation();
  // console.log('location',location)
  return (
    <div className='nav-bar'>
      <div className='line'>
        <hr/>
      </div>
    </div>
  );
}

export default Navbar;