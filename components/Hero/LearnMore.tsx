import './index.css'
const LearnMore = () => {
    let scrollDown = () => {
        window.scrollTo({
            top: window.scrollY + window.innerHeight,
            behavior: 'smooth'
        })

    }
    return (
      <>
        <div className="learnMore w-[300px] items-center" onClick={scrollDown}>
          <div className="text-1xl mb-4 w-[300px] font-bold leading-tight text-black transition duration-300  ease-in-out dark:text-white md:text-2xl">
            Learn More
          </div>
          <div className="flex w-[300px] rotate-45 cursor-pointer items-center justify-center text-black transition duration-300 ease-in-out dark:text-white">
            <span className=" h-3 w-3 rotate-180 border-l border-t border-black dark:border-white"></span>
          </div>
        </div>
      </>
    );
}

export default LearnMore;