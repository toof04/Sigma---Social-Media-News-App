import React, { useEffect } from 'react';
import './Home.scss';
import Post from './post.js';



const Home = () => {
  const [scrollPosition,setScrollPosition]=React.useState(0);
      const handleScroll = () => {
        console.log(window.innerHeight);
        const selector = document.getElementById('root');
        const root = document.querySelector('.sticky-line');;
      root.style.setProperty('--scroll',selector.scrollTop / selector.offsetHeight - (selector.innerHeight ));
            setScrollPosition( parseInt(document.getElementById('root').scrollTop.toFixed()));

    };

  useEffect(() => {

    document.getElementById('root').addEventListener('scroll', handleScroll);

  }, []);
  return (
    <div>
      <section className='spacetop'></section>
      <section className='content'>
        <center className={`sticky-line ${scrollPosition < 100 ? '' : 'active'}`}>
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
