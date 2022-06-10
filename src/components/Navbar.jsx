import React, { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import foto from '../base.png'

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="rounded-div flex items-center justify-between h-20 font-bold">
      <div className="foto rounded-t-full">
      <a href="https://www.bacode.com.ar" target="_blank">
              <img className="foto rounded-full" id="user-icon" src={foto} alt="BACode" />
            </a>
      </div>

      
      <Link to="/">
        <h1 className="text-2xl">Top 100 cryptos</h1>
      </Link>
      <div className="hidden md:block">
        <ThemeToggle />
      </div>

      {/* Menu Icon */}
      <div onClick={handleNav} className="block md:hidden cursor-pointer z-10">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Menu */}
      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-20 flex flex-col items-center justify-between w-full h-[90%] bg-primary ease-in duration-300 z-10"
            : "fixed left-[-100%] top-20 h-[90%] flex flex-col items-center justify-between ease-in duration-300"
        }
      >
        <ul className="w-full p-4">
          <li onClick={handleNav} className="border-b py-6">
            <Link to="/">Home</Link>
          </li>

          <li className=" py-6">
            <ThemeToggle />
          </li>
        </ul>
        <div className="flex flex-col w-full p-4"></div>
      </div>
    </div>
  );
};

export default Navbar;
