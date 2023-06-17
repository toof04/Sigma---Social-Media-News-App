import React, { useEffect } from 'react';
import './Chat.scss'

const ScrollLogger = () => {
      const handleScroll = () => {
      console.log( parseInt(document.getElementById('root').scrollTop.toFixed()));
    };

  useEffect(() => {

    document.getElementById('root').addEventListener('scroll', handleScroll);

  }, []);

  return <div id = "work">Scroll LoggerScroll LoggerScroll LoggerScroll LoggerScroll LoggerScroll LoggerScroll LoggerScroll LoggerScroll Logger</div>;
};

export default ScrollLogger;
