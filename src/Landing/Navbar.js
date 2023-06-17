import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import logo from '../images/logo.svg'; 

const Navbar = () => {
  
  return (
    <article>
      <div className="links-left">
        <div><Link to='/' className='Link'>Home</Link></div>
        <div><Link to='/Chat' className='Link'>Chat</Link></div>
        <div><Link to='/Profile' className='Link'>Profile</Link></div>
      </div>
            <div className='logo'><img src = {logo} alt = "logo here" ></img></div>

      <div className="links-right">
        <div><Link to='/' className='button-30'>Login</Link></div>
        <div><Link to='/Chat' className='button-30' style={{backgroundColor:'yellow'}}>Sign Up</Link></div>
      </div>
    </article>
  );
};

export default Navbar;
