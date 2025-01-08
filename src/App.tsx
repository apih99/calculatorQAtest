import React from 'react';
import Calculator from './components/Calculator';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>React Calculator</h1>
      </header>
      <main>
        <Calculator />
      </main>
      <footer>
        <p>QA Automation Demo Project</p>
      </footer>
    </div>
  );
}

export default App; 