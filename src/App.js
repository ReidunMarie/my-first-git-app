import React from 'react';
import logo from './logo.svg';
import pepsi from './pepsi.jpg';
import mandm from './mandm.jpg';
import './App.css';
import './styles.css';
import FirstSection from './FirstSection';

function App() {
  return (
    <div className="App">
      <div className="section yellow berry-color">
        <h1>Welcome to my playground</h1>
      </div>
      <FirstSection />
      <header className="App-header">
        <div className="mandm img" />
        <div className="pepsi img" />
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
