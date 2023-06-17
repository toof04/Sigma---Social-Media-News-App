import React from 'react';
import './Home.scss';
import Post from './post.js';
const Home = () => {
  return (
    <body style={{fontSize:32}}>
      <section className='spacetop'></section>
      <section className='content'>
   <center> Discover, Engage, And Share News </center>
    <section className='feed' >
      <Post className='post'/>
      <Post className = 'post' />
      <Post className = 'post'/>

    </section>
    </section>


    </body>
  );
};

export default Home;
