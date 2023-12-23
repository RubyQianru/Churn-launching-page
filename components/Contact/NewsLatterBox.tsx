"use client";

import { useTheme } from "next-themes";
import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';


const NewsLatterBox = () => {
  const { theme } = useTheme();

  return (
    <div
      className="wow fadeInUp relative z-10 rounded-sm p-8 sm:p-11 lg:p-8 xl:p-11 "
      data-wow-delay=".2s"
    >
      <h3 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white">
        Join the Waitlist
      </h3>
      <p className="mb-11 border-b border-body-color border-opacity-25 pb-11 text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-25">
        Lorem ipsum dolor sited Sed ullam corper consectur adipiscing Mae ornare
        massa quis lectus.
      </p>
      <div>
        <TextField
          type="text"
          id="outlined-basic" 
          label="Enter your name" 
          variant="outlined"
          className="mb-4 w-full"
        />
        <TextField
          type="email"
          id="outlined-basic" 
          label="Enter your email" 
          variant="outlined"
          className="mb-4 w-full"

        />

        <div className="flex justify-center">
        <Button
          variant="contained"
          size="large"
          className="mb-4 w-full bg-[#1976D2]"
        >
          Subscribe
        </Button>
        </div>
        
        <p className="dark:text-body-color-dark text-center text-base leading-relaxed text-body-color">
          No spam guaranteed, So please don’t send any spam mail.
        </p>
      </div>

    </div>
  );
};

export default NewsLatterBox;
