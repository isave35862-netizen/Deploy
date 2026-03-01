// src/App.jsx
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🚀 Welcome to Vite + React</h1>
      <p>This is a demo React app running with Vite.</p>

      <button
        onClick={() => setCount(count + 1)}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          marginTop: "20px",
          cursor: "pointer",
        }}
      >
        You clicked {count} times
      </button>
    </div>
  );
}

export default App;
