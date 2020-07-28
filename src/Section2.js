import React, { useEffect } from 'react';
import MacSvg from './MacSvg';
import './index.css';

const SecondSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const [entry] = entries;
      console.log('entry', entry, entry.isIntersecting);
      entry.intersectionRatio > 0 ? entry.target.classList.add('slide-up') : entry.target.classList.remove('slide-up');
    });
    const elements = document.getElementsByClassName('animate-slide-up');
    console.log(elements);
    Array.from(elements).forEach(el => observer.observe(el));
  });

  return (
    <div id="sectionTwo" className="section berry">
      <div className="content-box yellow-color">
        <MacSvg />
        <div className="info-container">
          <h2 className="animate-slide-up">Front-End utvikler</h2>
          <p className="animate-slide-up">Jeg er en Front-End utvikler og koder daglig i React</p>
        </div>
      </div>
    </div>
  )
};

export default SecondSection;
