import './index.css'
const LearnMore = () => {
    
    return(
        <>
        <div className='learnMore items-center w-[300px]'>
            <div className="w-[300px] mb-4 text-1xl md:text-2xl font-bold leading-tight text-black dark:text-white  transition duration-300 ease-in-out">
                Learn More
            </div>
            <div
                className="w-[300px] flex rotate-45 cursor-pointer items-center justify-center text-black dark:text-white transition duration-300 ease-in-out"
            >
                <span className=" h-3 w-3 rotate-180 border-l border-t border-black dark:border-white"></span>
            </div>

        </div>
            
        </>
    )
}

export default LearnMore;