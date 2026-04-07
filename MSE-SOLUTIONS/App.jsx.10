import React, { useState } from 'react';

function App() {
  // 1. Declare a state variable named "count"
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>State Management</h1>
      <h3>Current Count: {count}</h3>
      
      {/* 2. Update the state using setCount */}
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: '10px' }}>
        Decrement
      </button>
    </div>
  );
}

export default App;
