import React from 'react';

import './style.scss';

export const Button = ({children, onClick, className, type = "text"}) => (
  <button
    onClick={onClick}
    className={`btn ${className}`}
    type={type}>
      {children}
  </button>
);
