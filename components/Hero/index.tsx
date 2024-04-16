'use client'

import LearnMore from "./LearnMore";
import NewsLatterBox from "../Contact/NewsLetterBox";
import './index.css';
import React, { MouseEvent, useState, useEffect } from 'react';

const windowHeight: number = typeof window !== 'undefined' ? window.innerHeight : 0
const windowWidth: number = typeof window !== 'undefined' ? window.innerWidth : 0

const Hero = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [containerStyle, setContainerStyle] = useState({
    left: '0vw',
    top: '80vh',
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setScrollPosition(scrollTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setContainerStyle({
      left: '40vw',
      top: '5vh',
    });
  }, []);


  return (
    <>
      <section
        id="home"
        className="dark:bg-gray-dark relative z-10 overflow-hidden bg-white"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full h-screen px-4 flex justify-center items-center text-center">
                <div className="mx-auto w-[1000px]">
                <NewsLatterBox/>    
                </div>
                
                  <div
                    className="newlettercontainer"
                    data-wow-delay=".2s"
                    style={{ ...containerStyle, '--scroll': `${scrollPosition}px` } as any}
                    >
                  </div>
                  <div className="mx-auto absolute top-3/4 mt-20 z-20">
                    <LearnMore/>
                </div>  
              </div>
            </div>
          </div>
        
      </section>
    </>
  );
};

export default Hero;
