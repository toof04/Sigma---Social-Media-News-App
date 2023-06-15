import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <article>
      <div className="logo">Sigma</div>
      <div className="links">
        <div><Link to='/' className='Link'>Home</Link></div>
        <div><Link to='/Feed' className='Link'>Feed</Link></div>
        <div><Link to='/Chat' className='Link'>Chat</Link></div>
        <div><Link to='/Profile' className='Link'>Profile</Link></div>
      </div>
    </article>
  );
};

export default Navbar;
