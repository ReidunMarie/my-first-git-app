import React, { useRef, useEffect } from 'react';
import { TimelineMax, Power2, Bounce, Circ } from "gsap";

const MacSvg = () => {
  const stand = useRef(null);
  const standBack = useRef(null);
  const monitorBottom = useRef(null);
  const theScreen = useRef(null);
  const text = useRef(null);
  const boxes = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const [entry] = entries;
      console.log('entry', entry, entry.isIntersecting);
      if (entry.intersectionRatio > 0) {
        animate();
      }
    });
    const el = document.getElementById('computer');
    observer.observe(el);
  });

  const animate = () => {
    const tl = new TimelineMax();

    tl.from(stand.current, 0.3, {scaleY: 0, transformOrigin: "bottom", ease: Power2.easeOut})
      .from(standBack.current, 0.3, {scaleY: 0, transformOrigin: "bottom", ease: Bounce.easeOut})
      .from(monitorBottom.current, 0.5, {scaleX: 0, transformOrigin: "center", ease: Bounce.easeOut})
      .from(theScreen.current, 0.4, {scaleY: 0, transformOrigin: "bottom", ease: Circ.easeOut, delay: 0.4})
      .staggerFrom(text.current, 0.2, {scaleX: 0}, -0.1)
      .from(boxes.current, 0.2, {scaleY: 0, transformOrigin: "bottom", ease: Bounce.easeOut})
  };

  return (
    <svg id="computer" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 512 512" height="300" style={{ enableBackground: 'new 0 0 512 512' }}>
      <g ref={theScreen} id="screen">
    <path d="M0,357.336V26c0-5.504,4.704-10,10.448-10h491.104C507.296,16,512,20.496,512,26v331.336H0z"/>

    <rect x="17.864" y="33.864" style={{ fill: '#FFFFFF' }} width="476.24" height="305.6"/>
      </g>
    <path ref={monitorBottom} id="monitorBottom" style={{ fill: '#E2E2E2' }} d="M512,357.336V400c0,5.864-4.704,10.664-10.448,10.664H10.448C4.704,410.664,0,405.864,0,400v-42.664  H512z"/>
      <g  ref={standBack} id="standBack">
        <polygon style={{ fill: '#C9C9C9' }} points="181.336,485.336 330.664,485.336 320,410.664 192,410.664 "/>
        <polygon style={{ fill: '#AAAAAA' }} points="320,410.664 192,410.664 185.352,457.2 322.488,428.064 "/>

    <polygon style={{ fill: '#939393' }} points="192,410.664 320,410.664 320.72,415.704 188.68,433.936 "/>
      </g>
    <rect ref={stand} id="stand" x="144" y="485.336" style={{ fill: '#E2E2E2' }} width="224" height="10.664"/>
    <g ref={text} id="text">
    	<rect x="96" y="197.336" style={{ fill: '#C9C9C9' }} width="320" height="10.664"/>
    	<rect x="96" y="165.336" style={{ fill: '#C9C9C9' }} width="320" height="10.664"/>
    	<rect x="96" y="133.336" style={{ fill: '#C9C9C9' }} width="320" height="10.664"/>
    	<rect x="96" y="101.336" style={{ fill: '#C9C9C9' }} width="320" height="10.664"/>
    	<rect x="96" y="69.336" style={{ fill: '#C9C9C9' }} width="320" height="10.664"/>
    </g>
    <g ref={boxes} id="boxes">
    	<rect id="box1" x="96" y="229.336" style={{ fill: '#F2B851' }} width="85.336" height="74.664"/>
    <rect id="box2" x="213.336" y="229.336" style={{ fill: '#25B6D2' }} width="85.336" height="74.664"/>
    	<rect id="box3" x="330.64" y="229.336" style={{ fill: '#F2B851' }} width="85.336" height="74.664"/>
    </g>
    </svg>
  )
};

export default MacSvg;
