import React from 'react';
import {ReactComponent as Logo} from '../img/logoSvg.svg';
import { useHistory } from 'react-router-dom';

import './style.css'

function Navbar() {

  const history = useHistory();
  return (
    <div className='nav-bar'>
      <Logo style={{
        position: 'absolute',
        top: '15px',
        left: '3%',
        width:'37px',
        height: '50px',
        // border: '1px solid white'
        // display: history.location.pathname === '/' ? '?' : 'none'
      }}/>
      <div className='line'>
        <hr/>
      </div>
    </div>
  );
}

export default Navbar;