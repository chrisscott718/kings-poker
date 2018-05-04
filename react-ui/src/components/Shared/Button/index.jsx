import React from 'react';

import './style.scss';

export const Button = ({children, onClick, className, type="button", style, disabled}) => (
  <button
    onClick={onClick}
    className={`btn ${className}`}
    type={type}
    disabled={disabled}
    style={style}
  >
      {children}
  </button>
);
