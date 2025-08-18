import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClick = (event) => {
    event.preventDefault();
    const id = event.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const heroElement = document.getElementById("hero");

    const handleScroll = () => {
      if (!heroElement) return;

      const heroBottom = heroElement.getBoundingClientRect().bottom;
      setShowBackToTop(heroBottom <= 0 || window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToHero = () => {
    const heroElement = document.getElementById("hero");
    if (heroElement) {
      heroElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const setShowBackToTop = (show) => {
    const backToTopButton = document.getElementById("back-to-top")
    if (backToTopButton) {
      backToTopButton.style.display = show ? "block" : "none";
    }
  };

  return (
    <>
      {/* Header */}
      <header className="shadow-md bg-white fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto h-24 px-6 flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="./assets/logo/SiPorto.png"
              alt="SiPorto"
              className="h-44 w-auto"
            />
          </div>

          {/* Desktop nav */}
          <nav className="hidden sm:flex space-x-16 font-normal text-lg items-center">
            <a href="#hero" onClick={handleClick} className="text-gray-900 hover:text-gray-800 hover:border-b-2 hover:border-orange-500 duration-100 ease-in-out h-24 w-20 flex items-center justify-center">
              Home
            </a>
            <a href="#about" onClick={handleClick} className="text-gray-900 hover:text-gray-800 hover:border-b-2 hover:border-orange-500 duration-100 ease-in-out h-24 w-20 flex items-center justify-center"
            >
              About
            </a>
            <a href="#features" onClick={handleClick} className="text-gray-900 hover:text-gray-800 hover:border-b-2 hover:border-orange-500 duration-100 ease-in-out h-24 w-20 flex items-center justify-center">
              Fitur
            </a>
            <a href="#showcase" onClick={handleClick} className="text-gray-900 hover:text-gray-800 hover:border-b-2 hover:border-orange-500 duration-100 ease-in-out h-24 w-20 flex items-center justify-center">
              Showcase
            </a>
            <a href="#faqs" onClick={handleClick} className="text-gray-900 hover:text-gray-800 hover:border-b-2 hover:border-orange-500 duration-100 ease-in-out h-24 w-20 flex items-center justify-center">
              FAQs
            </a>
            <a href="#cta" onClick={handleClick} className="text-gray-900 hover:text-gray-800 hover:border-b-2 hover:border-orange-500 duration-100 ease-in-out h-24 w-20 flex items-center justify-center">
              Contact
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="sm:hidden">
            <button
              id="menu-btn"
              onClick={toggleMenu}
              className="focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`sm:hidden px-6 pb-4 transition-all duration-300 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <nav className="space-y-2 font-medium">
            <a href="#hero" onClick={handleClick} className="block text-gray-900 hover:text-gray-700">Home</a>
            <a href="#about" onClick={handleClick} className="block text-gray-900 hover:text-gray-700">About</a>
            <a href="#features" onClick={handleClick} className="block text-gray-900 hover:text-gray-700">Fitur</a>
            <a href="#showcase" onClick={handleClick} className="block text-gray-900 hover:text-gray-700">Showcase</a>
            <a href="#faqs" onClick={handleClick} className="block text-gray-900 hover:text-gray-700">FAQs</a>
            <a href="#cta" onClick={handleClick} className="block text-gray-900 hover:text-gray-700">Contact</a>
          </nav>
        </div>
      </header>

      {/* Back to Top Button */}
      <button
        id="back-to-top"
        onClick={scrollToHero}
        aria-label="Back to top"
        title="Back to top"
        className="
          fixed bottom-6 right-6 
          bg-orange-500 text-white 
          p-3 rounded-sm 
          shadow-lg 
          hover:bg-orange-600 
          transition 
          duration-300 
          ease-in-out 
          transform 
          hover:scale-110 
          focus:outline-none 
          focus:ring-2 
          focus:ring-orange-400 
          focus:ring-opacity-75
          active:scale-95
          animate-bounce
          z-50
        "
      >
        <FaArrowUp />
      </button>
    </>
  );
}