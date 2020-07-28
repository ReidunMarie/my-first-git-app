import React, { useState, useEffect } from 'react';
import './index.css';

// inspo: http://seanhalpin.io/
// ingen bakgrunnsfarge når du er helt øverst
// forsvinner oppover, animert, når du begynner å scrolle nedover
// scroller du oppover, får du baren ned igjen, animert, men nå med en bakgrunnsfarge

const TopBar = () => {
  /*useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const [entry] = entries;
      console.log('entry', entry, entry.isIntersecting);
      entry.intersectionRatio > 0 ? entry.target.classList.add('slide-up') : entry.target.classList.remove('slide-up');
    });
    const elements = document.getElementsByClassName('animate-slide-up');
    console.log(elements);
    Array.from(elements).forEach(el => observer.observe(el));
  });*/
  const [ scrolled, setScrolled ] = useState(0)
  const [ className, setClassName ] = useState('')
  const [ scrollingDown, setScrollingDown ] = useState(false)

  useEffect(() => {
    const handleScroll = ({ deltaY }) => {
      let c = deltaY > 0 ? 'down' : 'up';
      if (window.pageYOffset === 0) {
        c = 'top'
      }
      if (c !== className) {
        setClassName(c)
      }
    }
    window.addEventListener('wheel', handleScroll)
    return () => {
      window.removeEventListener('wheel', handleScroll)
    }
  }, [])
  // <div className={`top-bar ${scrolled ? '' : 'top'}`}>
  return (
    <div className={`top-bar ${className}`}>
      <a href="#sectionTwo">Section two...</a>
    </div>
  )
};

export default TopBar;
