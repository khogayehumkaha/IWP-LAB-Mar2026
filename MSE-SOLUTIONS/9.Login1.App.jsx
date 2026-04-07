import React, { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault(); // Prevents page reload
    if (username) setIsLoggedIn(true);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {isLoggedIn ? (
        <h1>Welcome, {username}!</h1>
      ) : (
        <form onSubmit={handleLogin}>
          <h2>Login Form</h2>
          <input 
            type="text" 
            placeholder="Username" 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          /><br/><br/>
          <input type="password" placeholder="Password" required /><br/><br/>
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
}

export default App;