import React, { useState, useEffect } from 'react';
import './App.css';

const App: React.FC = () => {
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    fetch('http://localhost:8080/api/message')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error fetching message:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{message}</p>
      </header>
    </div>
  );
}

export default App;
