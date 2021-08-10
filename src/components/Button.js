import React from 'react';
import '../assets/css/Button.css';
import { Link } from 'react-router-dom';

export function Button() {
  return (
    <Link to='donate'>
      <button className='Btn'>Donate</button>
    </Link>
  );
}