import React, { useState } from 'react';

function App() {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [msg, setMsg] = useState('');
  const [isLogged, setIsLogged] = useState(false);

  const validate = (e) => {
    e.preventDefault();
    // Static Credentials check
    if (user === "admin" && pass === "1234") {
      setIsLogged(true);
    } else {
      setMsg("Invalid Username or Password!");
    }
  };

  if (isLogged) return <h1 style={{textAlign: 'center'}}>Welcome, {user}!</h1>;

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <form onSubmit={validate}>
        <h2>Login</h2>
        <input type="text" placeholder="Username" onChange={(e) => setUser(e.target.value)} /><br/><br/>
        <input type="password" placeholder="Password" onChange={(e) => setPass(e.target.value)} /><br/><br/>
        <button type="submit">Login</button>
      </form>
      <p style={{ color: 'red' }}>{msg}</p>
    </div>
  );
}

export default App;
