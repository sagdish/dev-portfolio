import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

import './style.css'

function Navbar() {

  const location = useLocation();
  // console.log('location',location)

  const [ navBar, setNavBar ] = useState(false);

  const setBackground = () => {
    if (window.scrollY > 60) {
      setNavBar(true)
    } else {
      setNavBar(false)
    }
  }
  window.addEventListener('scroll', setBackground)

  return (
    <div className={navBar && location.pathname !== '/' ? 'nav-bar active' : 'nav-bar'}>

      {location.pathname === '/' ? null : (
        <div className='pages-title' style={{
          alignSelf: 'flex-end'
        }}>
          <Link style={{textDecoration: 'none'}} to='/about'>
            <h3
              className={location.pathname === '/about' ? 'current' : ''}
            >Bio</h3>
          </Link>

          <Link style={{textDecoration: 'none'}} to='/projects'>
            <h3
                className={location.pathname === '/projects' ? 'current' : ''}
            >Projects</h3>
          </Link>

          <Link style={{textDecoration: 'none'}} to='/play'>
            <h3
              className={location.pathname === '/play' ? 'current' : ''}
            >Playground</h3>
          </Link>

          <Link style={{textDecoration: 'none'}} to='/blog'>
            <h3
              className={location.pathname === '/blog' ? 'current' : ''}
            >Blog</h3>
          </Link>

          <Link style={{textDecoration: 'none'}} to='/contact'>
            <h3
              className={location.pathname === '/contact' ? 'current' : ''}
            >Contact</h3>
          </Link>
        </div>
      )}

      <div className='line'>
        <hr/>
      </div>
    </div>
  );
}

export default Navbar;