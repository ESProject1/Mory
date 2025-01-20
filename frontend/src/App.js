import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch('/hello')
      .then(response => response.text())
      .then(message => {
        setMessage(message);
      });
  }, [])

  return (
    <div className="App">
      <header className="App-header">
          {message}
      </header>
    </div>
  );
}

export default App;