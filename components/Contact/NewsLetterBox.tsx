
import "./index.css"
import ButtonEffect from "../Button/ButtonEffect";
import { Button } from "@mui/material";

const NewsLatterBox = () => {

  return (
    <div
      className="wow fadeInUp relative z-10 rounded-sm p-8 sm:p-11 lg:p-8 xl:p-11 "
      data-wow-delay=".2s"
    >
      <h3 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white">
        Join the Waitlist
      </h3>
      <p className="mb-11 border-b border-body-color border-opacity-25 pb-11 text-base leading-relaxed text-black dark:text-white dark:border-white dark:border-opacity-25">
        Lorem ipsum dolor sited Sed ullam corper consectur adipiscing Mae ornare
        massa quis lectus.
      </p>
      <div>
        <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="border-stroke dark:text-body-color-dark dark:shadow-two mb-4 w-full rounded-md border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="border-stroke dark:text-body-color-dark dark:shadow-two mb-4 w-full rounded-md border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
          />
          <ButtonEffect 
            style="relative overflow-hidden shadow-submit dark:shadow-submit-dark mb-5 flex w-full cursor-pointer items-center justify-center rounded-md bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90"
            text="Submit"
          />

          <div className="flex justify-center">

        </div>
        
        <p className="dark:text-body-color-dark text-center text-base leading-relaxed text-black dark:text-white">
          No spam guaranteed, So please don’t send any spam mail.
        </p>
      </div>

    </div>
  );
};

export default NewsLatterBox;
