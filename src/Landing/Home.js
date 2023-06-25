import React, { useEffect, useState } from 'react';
import './Home.scss';
import Post from './post.js';

const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const root = document.getElementById('root');
    const newScrollPosition = root.scrollTop;
    setInterval(2000);
    setTimeout(setScrollPosition(newScrollPosition),2000);
  };

  useEffect(() => {
    document.getElementById('root').addEventListener('scroll', handleScroll);

    return () => {
      document.getElementById('root').removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <section className='spacetop'></section>
      <section className='content'>
        <center className={`sticky-line ${scrollPosition > 100 ? 'active' : 'back'}`}>
          Discover, Engage, And Share News
       
        </center>
        <section className='feed'>
          <div className='post'><Post /></div>
          <div className='post'><Post /></div>
          <div className='post'><Post /></div>
        </section>
      </section>
    </div>
  );
};

export default Home;