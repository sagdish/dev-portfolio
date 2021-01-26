import React from 'react';

import './spinner.css';

export default function Spinner() {
  const style = {
    width: '100vw',
    height: '60vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }

  return (
    <div style={style}>
      <div className="spinner"></div>
    </div>
  )
}