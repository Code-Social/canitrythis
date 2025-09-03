import React, { useEffect, useState } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";

const ScrollButton: React.FC = () => {
  const [atTop, setAtTop] = useState(true);
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;

      setAtTop(scrollY < 100); // near top
      setAtBottom(scrollY + windowHeight >= scrollHeight - 100); // near bottom
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
  };

  return (
    <button
      onClick={atBottom ? scrollToTop : scrollToBottom}
      className={`fixed bottom-6 right-6 p-3 rounded-full shadow-lg transition-all duration-300 
        bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:opacity-90
        ${atTop && atBottom ? "opacity-0 pointer-events-none" : "opacity-100"}`}
    >
      {atBottom ? <ArrowUp size={30} /> : <ArrowDown size={30} />}
    </button>
  );
};

export default ScrollButton;
