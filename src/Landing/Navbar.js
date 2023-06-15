import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss'
const Navbar = () => {
  return (
    <nav>
    <div className="logo">Sigma</div>
    <div className="links">
    <Link to='/'>Home</Link>
    <Link to='/Feed'>Feed</Link>
    <Link to='/Chat'>Chat</Link>
    <Link to='/Profile'>Profile</Link>
    </div>
    </nav>
  );
};

export default Navbar;
