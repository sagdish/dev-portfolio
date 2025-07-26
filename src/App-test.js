import React from 'react';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>React 19 Test - Portfolio</h1>
      <p>If you can see this, React 19 is working!</p>
      <div style={{ marginTop: '20px' }}>
        <button onClick={() => alert('Button works!')}>Test Button</button>
      </div>
    </div>
  );
}

export default App;