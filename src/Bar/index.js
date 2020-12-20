import React, { useEffect, useState } from 'react'
import classnames from 'classnames'
import Menu from "../Menu"
import './styles.css';

function App() {
  const [ scrolled, setScrolled ] = useState(false)

  const handleScroll = () => {
    if (window.pageYOffset > 10) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener('wheel', handleScroll);
    return () => {
      window.removeEventListener('wheel', handleScroll)
    }
  }, [])

  const classNames = classnames("bar", { scrolled: scrolled })

  return (
    <div className={scrolled ? "bar-scrolled" : "bar"}>
      <Menu />
    </div>
  )
}

export default App
