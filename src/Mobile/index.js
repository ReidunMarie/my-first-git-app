import React from 'react'
import Bar from '../Bar'
import Dots from '../Dots'
import FirstSection from '../Section1'
import MotionBackground from "./MotionBackground"
import MobileMenu from '../Menu/mobile-menu'
import 'dnb-ui-lib/style'

function App() {
  return (
    <div className="App">
      <Bar />
      <div className="section background-1">
        <MotionBackground />
        <Dots />
      </div>
      {/*<MobileMenu />*/}
    </div>
  );
}

export default App;
