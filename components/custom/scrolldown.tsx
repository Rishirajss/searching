"use client";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const ScrollDownButton = () => {
  const [showButton, setShowButton] = useState(true);

  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight + 50,
      behavior: "smooth",
    });
    setShowButton(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setShowButton(true);
      } else if (window.scrollY > 0 && showButton) {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showButton]);

  if (!showButton) return null;

  return (
    <button
      onClick={scrollDown}
      className="fixed bottom-40 sm:bottom-14 left-[48%] sm:left-[49%] transform -translate-x-1/2 bg-white bg-opacity-20 backdrop-blur-sm 
                 rounded-full p-3 shadow-lg
                 transition-all duration-500 ease-in-out
                 hover:bg-opacity-30 hover:shadow-xl
                 focus:outline-none ring-2 ring-blue-400
                 animate-bounce"
      aria-label="Scroll down"
    >
      <ChevronDown className="w-4 h-4 text-gray-800" />
    </button>
  );
};

export default ScrollDownButton;
