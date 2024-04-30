"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Feature } from "@/types/feature";

const SingleFeature = ({ id, feature }: { id: number, feature: Feature }) => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);
  const { icon, title, paragraph } = feature;
  const isOdd = id % 2 !== 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.5 // Trigger when 50% of the element is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="w-full">
      <section
        ref={sectionRef}
        className="wow fadeInUp flex flex-col lg:flex-row items-center justify-center lg:justify-between"
        data-wow-delay=".15s"
      >
        {isOdd && (
          <div className={`flex mb-[50px] h-[400px] w-[400px] lg:mb=0 items-center justify-center text-primary order-1 lg:order-none ${!isOdd && 'lg:order-last'}`}>
            {icon}
          </div>
        )}

        <div className="flex flex-col justify-center lg:w-[800px] px-4 md:px-0 order-2">
          <h3 className={`mb-10 text-xl font-bold text-black dark:text-white sm:text-2xl md:text-4xl ${animate && 'typed-effect'}`}>
            {title}
          </h3>
          <p className={`text-base font-medium leading-relaxed text-body-color md:text-xl ${animate && 'float-effect'}`}>
            {paragraph}
          </p>
        </div>

        {!isOdd && (
          <div className={`flex mb-[50px] h-[400px] w-[400px] lg:mb-0 items-center justify-center text-primary order-1 lg:order-last`}>
            {icon}
          </div>
        )}
      </section>
    </div>
  );
};

export default SingleFeature;
