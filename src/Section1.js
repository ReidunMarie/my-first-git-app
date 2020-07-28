import React, { useEffect } from 'react';
import MacSvg from './MacSvg';
import pizza from './png/pizza.png';
import Card from './Card';
import './index.css';

const FirstSection = () => {
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
    <div className="section background-1">
      <div className="content-box yellow-color">
        <Card>Tekst</Card>
        <Card>
          <img src={pizza} width="100%"/>
          Coming regret simple longer little am sister on. Do danger in to adieus ladies houses oh eldest.
        </Card>
        <Card>XXX</Card>
      </div>
    </div>
  )
};

export default FirstSection;
