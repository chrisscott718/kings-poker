import React from 'react';

import './style.scss';

export const Button = ({children, onClick, className}) => (
  <button onClick={onClick} className={`btn ${className}`}>{children}</button>
);
