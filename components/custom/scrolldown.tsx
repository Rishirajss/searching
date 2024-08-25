"use client";
import { ChevronDown } from "lucide-react";

const ScrollDownButton = () => {
  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollDown}
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 
                 bg-white bg-opacity-20 backdrop-blur-sm 
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
