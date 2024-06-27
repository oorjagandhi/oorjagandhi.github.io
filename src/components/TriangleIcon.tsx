import React from 'react';

const TriangleIcon = ({ size = 16, color = "#7880B5" }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 2 L12 8 L4 14 Z" fill="none" stroke={color} strokeWidth="1"/>
  </svg>
);

export default TriangleIcon;
