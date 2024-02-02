import React, { useState, useEffect, useRef } from "react";
import ArrowDown from "/icon-arrow-down.svg";
import ArrowUp from "/icon-arrow-up.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import autoAnimate from "@formkit/auto-animate";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  const handleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div className="container py-5">
      <nav className="flex justify-between items-center ">
        {/* right nav */}
        <div className="flex justify-between items-center gap-10">
          <h1 className="cursor-pointer font-bold text-3xl">snap</h1>

          <p className="hidden lg:block cursor-pointer font-medium text-sm text-MediumGray hover:text-AlmostBlack duration-75">
            Features
          </p>
          <p className="hidden lg:block cursor-pointer font-medium text-sm text-MediumGray hover:text-AlmostBlack duration-75">
            Company
          </p>
          <p className="hidden lg:block cursor-pointer font-medium text-sm text-MediumGray hover:text-AlmostBlack duration-75">
            Careers
          </p>
          <p className="hidden lg:block cursor-pointer font-medium text-sm text-MediumGray hover:text-AlmostBlack duration-75">
            About
          </p>
        </div>

        {/* left nav */}
        <div className=" flex gap-6">
          <button className="hidden lg:block font-medium text-sm py-1 px-3 text-MediumGray hover:text-AlmostBlack duration-75">
            Login
          </button>
          <button className="hidden lg:block text-sm border-2  border-MediumGray py-1 px-3 text-MediumGray rounded-lg hover:text-AlmostBlack  hover:border-AlmostBlack duration-75">
            Register
          </button>
        </div>

        {/* mobile menu */}
        <div className="lg:hidden" onClick={handleMenu} ref={parent}>
          <div>{toggleMenu ? <RxCross2 /> : <GiHamburgerMenu />}</div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
