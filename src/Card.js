import React from 'react';
import './index.css';

const Card = ({ children }) => {
  return (
    <div className="card">
      {children}
    </div>
  )
};

export default Card;
