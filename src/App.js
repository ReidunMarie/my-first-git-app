import React from 'react';
import logo from './logo.svg';
import pepsi from './pepsi.jpg';
import mandm from './mandm.jpg';
import './App.css';
import './styles.css';
import TopBar from './TopBar';
import FirstSection from './Section1';
import SecondSection from './Section2';

function App() {
  return (
    <div className="App">
      <TopBar />
      <FirstSection />
      <SecondSection />
    </div>
  );
}

export default App;
