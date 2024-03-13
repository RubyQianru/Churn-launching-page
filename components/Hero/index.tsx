'use client'

import NewsLatterBox from "../Contact/NewsLetterBox";
import LearnMore from "./LearnMore";
import './index.css'
import React, { MouseEvent, useState, useEffect } from 'react';

const Hero = () => {

  const [containerStyle, setContainerStyle] = useState({
    left: '0vw',
    top: '80vh',
  });

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
              <div className="absolute top-3/4">
                  <LearnMore/>
                </div>   
                <div
                  className="newlettercontainer"
                  data-wow-delay=".2s"
                  style={containerStyle}
                >
                
              </div>
            </div>
          </div>
        </div>
        
      </section>
    </>
  );
};

export default Hero;
