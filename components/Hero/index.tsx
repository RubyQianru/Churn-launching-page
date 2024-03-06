'use client'

import { Mouse } from "@mui/icons-material";
import NewsLatterBox from "../Contact/NewsLetterBox";
import './index.css'
import React, { MouseEvent, useState, useEffect } from 'react';

const windowHeight: number = typeof window !== 'undefined' ? window.innerHeight : 0
const windowWidth: number = typeof window !== 'undefined' ? window.innerWidth : 0

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
  
  // const mousemove = (e: MouseEvent<HTMLDivElement>) => {
  //   const mouseX = e.clientX;
  //   const opacity = (mouseX / windowWidth) ;

  //   setContainerStyle({
  //     left: '40vw',
  //     top: '5vh',
  //   });
  // }

  return (
    <>
      <section
        id="home"
        className="dark:bg-gray-dark relative z-10 overflow-hidden bg-white pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center"
                data-wow-delay=".2s"
              >
                <NewsLatterBox/>
                <div
                  className="newlettercontainer"
                  data-wow-delay=".2s"
                  // onMouseMove={mousemove}
                  style={containerStyle}
                >
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </section>
    </>
  );
};

export default Hero;
