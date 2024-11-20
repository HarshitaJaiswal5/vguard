import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="h-16 fixed z-10 w-full bg-white flex justify-between items-center px-4 sm:px-8 md:px-16 lg:px-28 shadow-md">
      <div className="flex items-center">
        <button
          onClick={toggleMenu}
          className="sm:hidden text-[#7d6c54] focus:outline-none"
        >
          <i className="fa-solid fa-bars text-2xl"></i>
        </button>
        <div className="hidden sm:flex items-center w-auto sm:w-32 justify-between">
          <div>Read</div>
          <span className="mx-3"> | </span>
          <div>ENG</div>
        </div>
      </div>
      <div className="tracking-widest text-xl font-light font-lustria cursor-pointer text-[#7d6c54]">
        VGUARD
      </div>
      <div id="icons" className="hidden sm:flex items-center space-x-3 sm:space-x-5">
        <i className="fa-solid fa-user text-[#7d6c54]" />
        <i className="fa-solid fa-magnifying-glass text-[#7d6c54]" />
        <i className="fa-regular fa-heart text-[#7d6c54]" />
        <i className="fa-solid fa-cart-shopping text-[#7d6c54]" />
      </div>
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg sm:hidden">
          <div className="flex flex-col items-start p-4">
            <button className="text-left text-[#7d6c54] py-2 w-full">
              Read
            </button>
            <button className="text-left text-[#7d6c54] py-2 w-full">
              ENG
            </button>
            <hr className="my-2 border-gray-300 w-full" />
            <div className="flex flex-col space-y-2">
              <button className="text-left text-[#7d6c54] flex items-center">
                <i className="fa-solid fa-user mr-3"></i> Profile
              </button>
              <button className="text-left text-[#7d6c54] flex items-center">
                <i className="fa-solid fa-magnifying-glass mr-3"></i> Search
              </button>
              <button className="text-left text-[#7d6c54] flex items-center">
                <i className="fa-regular fa-heart mr-3"></i> Wishlist
              </button>
              <button className="text-left text-[#7d6c54] flex items-center">
                <i className="fa-solid fa-cart-shopping mr-3"></i> Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
