import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Error from './Error';
import Navbar from './Navbar';
import Chat from './Chat';
import Profile from './Profile';
import './index.scss';
import Auth from '../auth/auth';
const ReactRouterSetup = () => {

  return (
    <div>
    <Router className = "back">
      <Auth/>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/Chat' element={<Chat />}/>
        <Route path='/Profile' element={<Profile />}/>
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
    </div>
  );
};

export default ReactRouterSetup;
