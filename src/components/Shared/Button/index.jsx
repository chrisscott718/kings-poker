import React from 'react';

import './style.scss';

export const Button = ({children, onClick, className, type = "text", disabled}) => (
  <button
    onClick={onClick}
    className={`btn ${className}`}
    type={type}
    disabled={disabled}>
      {children}
  </button>
);
