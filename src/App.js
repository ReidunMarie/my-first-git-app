import React from 'react'
import logo from './logo.svg'
import pepsi from './pepsi.jpg'
import mandm from './mandm.jpg'
import './App.css'
import './styles.css'
import Mobile from "./Mobile";
import 'dnb-ui-lib/style'
import MenuBar from './MenuBar'

function App() {
  return (
    <div className="App">
      <MenuBar />
    </div>
  );
}
/*function App() {
  return (
    <div className="App">
      <Mobile />
    </div>
  );
}
/*function App() {
  return (
    <div className="App">
      <Bar />
      <FirstSection />
      <Dots />
      <SecondSection />
      <MobileMenu />
    </div>
  );
}*/

export default App;
