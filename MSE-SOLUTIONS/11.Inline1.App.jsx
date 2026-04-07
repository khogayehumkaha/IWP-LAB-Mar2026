import React from 'react';

function App() {
  // Styling object defined as a variable (cleaner approach)
  const myStyle = {
    color: "white",
    backgroundColor: "dodgerblue",
    padding: "20px",
    margin: "20px",
    fontWeight: "bold",
    marginBottom: "50px",
    borderRadius: "10px",
    fontFamily: "Arial"
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Inline Styling Demo</h1>
      
      {/* Applying the style object */}
      <div style={myStyle}>
        This box is styled using an inline JavaScript object!
      </div>

      {/* Applying style directly double braces {{ }} */}
      <p style={{ color: 'red', fontWeight: 'italic' }}>
        This is a direct inline style.
      </p>
    </div>
  );
}

export default App;