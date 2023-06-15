import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Home';
import Feed from './Feed';
import Error from './Error';
import Navbar from './Navbar';
import Chat from './Chat';
import Profile from './Profile';

const ReactRouterSetup = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/Feed' element={<Feed />}/>
        <Route path='/Chat' element={<Chat />}/>
        <Route path='/Profile' element={<Profile />}/>
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
};

export default ReactRouterSetup;
