'use client'

import NewsLatterBox from "../Contact/NewsLatterBox";
import './index.css'
import React, { MouseEvent, useState } from 'react';

const Hero = () => {

  const [containerStyle, setContainerStyle] = useState({ left: 0 + 'px', top: 0 + 'px' })

  const mousemove = (e: MouseEvent<HTMLDivElement>) => {

    const mouseX = e.clientX
    const mouseY = e.clientY

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
                {/* <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                </div> */}
                <div
                  className="newlettercontainer wow fadeInUp mx-auto max-w-[800px] text-center"
                  data-wow-delay=".2s"
                  onMouseMove={mousemove}
                ></div>
              </div>
            </div>
          </div>
        </div>
        
      </section>
    </>
  );
};

export default Hero;
