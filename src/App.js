import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://aws.amazon.com/amplify/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learning CI/CD on AWS for React App using AWS Amplify
        </a>
      </header>
    </div>
  );
}

export default App;
