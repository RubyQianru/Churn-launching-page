'use client'

import { Mouse } from "@mui/icons-material";
import NewsLatterBox from "../Contact/NewsLatterBox";
import './index.css'
import React, { MouseEvent, useState } from 'react';

const windowHeight: number = typeof window !== 'undefined' ? window.innerHeight : 0
const windowWidth: number = typeof window !== 'undefined' ? window.innerWidth : 0

//top: 50vh - 50vw/2
//left: 50vw
const initLeft = windowWidth/2 * window.devicePixelRatio
const initTop = (windowHeight/2 - windowWidth/4) * window.devicePixelRatio
const Hero = () => {

  const [containerStyle, setContainerStyle] = useState({ 
    left: initLeft + 'px', 
    top: initTop + 'px'
  })
  const mousemove = (e: MouseEvent<HTMLDivElement>) => {
    const mouseX = e.clientX * window.devicePixelRatio - initLeft
    const mouseY = e.clientY * window.devicePixelRatio - initTop

    console.log(mouseX, mouseY)
    setContainerStyle({
      left: mouseX + 'px',
      top: mouseY + 'px'
    })
  }

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
                  onMouseMove={mousemove}
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
