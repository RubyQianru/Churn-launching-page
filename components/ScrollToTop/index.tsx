import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { ArrowUpward } from '@mui/icons-material';



export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-[99]">
      {isVisible && (
        <Button
          onClick={scrollToTop}
          aria-label="scroll to top"
          className="h-15 w-10 bg-[#1976D2]"
          variant="contained"
        >
          <ArrowUpward/>
        </Button>
      )}
    </div>
  );
}
