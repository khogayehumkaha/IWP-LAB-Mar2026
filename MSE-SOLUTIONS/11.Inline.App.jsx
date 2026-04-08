import React from 'react';
import myImage from './A.jpg';

function App() {
  /* const myImage = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500"; */

  return (
    <div style={{ padding: '40px', textAlign: 'center', backgroundColor: '#f4f4f9', minHeight: '100vh' }}>
      
      {/* The Styled Box */}
      <div style={{ 
        backgroundColor: '#2d3436', 
        color: '#fab1a0', 
        padding: '20px', 
        borderRadius: '15px', 
        width: '300px', 
        margin: 'auto',
        boxShadow: '0 10px 30px rgba(0,0,0,0.2)' 
      }}>
        
        <img src={myImage} alt="Tech" style={{ width: '100%', borderRadius: '10px', marginBottom: '15px' }} />
        
        <h2 style={{ margin: '0', fontWeight: 'bold' }}>React Design</h2>
        <p style={{ color: '#dfe6e9', fontSize: '14px' }}>Inline styling is fast and easy!</p>
        
        <button style={{ 
          backgroundColor: '#00cec9', 
          border: 'none', 
          padding: '8px 15px', 
          borderRadius: '5px', 
          cursor: 'pointer',
          fontWeight: 'bold'
        }}>
          Explore
        </button>
      </div>

    </div>
  );
}

export default App;