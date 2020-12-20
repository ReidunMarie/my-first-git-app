import React, { useEffect } from 'react'
import styled from "styled-components";
import "./styles.css";

const Svg = styled.svg`
  position: absolute;
  left: -25%;
  bottom: 0;
`;

function MotionBackground() {
useEffect(() => {
  const tl = new window.TimelineMax();
  const time = 3;
  tl
    .from('#wave3', time, { x: "20x", repeat: -1, yoyo: true, ease: window.Sine.easeInOut })
    .from('#wave2', time, { x: "30px", repeat: -1, yoyo: true, ease: window.Sine.easeInOut }, `-=${time}`)
    .to('#wave2', time, { x: "15px", repeat: -1, yoyo: true, ease: window.Sine.easeInOut }, `-=${time}`)
    .from('#wave1', time, { x: "40px", repeat: -1, yoyo: true, ease: window.Sine.easeInOut }, `-=${time}`)
    .to('#wave1', time, { x: "30px", repeat: -1, yoyo: true, ease: window.Sine.easeInOut }, `-=${time}`)
}, [])

  console.log(window.TweenMax);
  return (
    <Svg width="150%" viewBox="20 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path x="-100" id="wave1" d="M259 15.0191V278.019H1V6.01953C12 10.5195 23.5 21.5195 50.5 30.0195C72.1 36.8195 94.5 22.8526 103 15.0191C113.5 5.01912 142.5 -9.48088 174.5 12.5191C206.5 34.5191 244.167 23.3525 259 15.0191Z" />
    <path id="wave2" d="M259 15.0191V278.019H1V6.01953C12 10.5195 23.5 21.5195 50.5 30.0195C72.1 36.8195 94.5 22.8526 103 15.0191C113.5 5.01912 142.5 -9.48088 174.5 12.5191C206.5 34.5191 244.167 23.3525 259 15.0191Z" />
    <path id="wave3" d="M259 15.0191V278.019H1V6.01953C12 10.5195 23.5 21.5195 50.5 30.0195C72.1 36.8195 94.5 22.8526 103 15.0191C113.5 5.01912 142.5 -9.48088 174.5 12.5191C206.5 34.5191 244.167 23.3525 259 15.0191Z" />
    </Svg>
  );
}

export default MotionBackground;
