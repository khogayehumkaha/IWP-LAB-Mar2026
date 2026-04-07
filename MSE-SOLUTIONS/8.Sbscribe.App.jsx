import React from 'react';

function App() {
  const handleClick = () => {
    alert("Thank you for subscribing!");
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Lab Experiment 8</h1>
      <button onClick={handleClick} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Subscribe
      </button>
    </div>
  );
}

export default App;
