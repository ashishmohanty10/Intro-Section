import React, { useState, useEffect, useRef } from "react";
import ArrowDown from "/icon-arrow-down.svg";
import ArrowUp from "/icon-arrow-up.svg";
import Hamburger from "/icon-menu.svg";
import Close from "/icon-close-menu.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import autoAnimate from "@formkit/auto-animate";
import DesktopFeatures from "./Featurs";
import MobileNavbar from "./MobileNavbar";
import DesktopCompany from "./Company";

const Navbar = () => {
  const [isFeature, setIsFeatures] = useState(false);
  const [isCompany, setIsCompany] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  const handleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  const handleFeaturesDropDown = () => {
    setIsFeatures(!isFeature);
  };

  const handleCompanyDropDown = () => {
    setIsCompany(!isCompany);
  };

  return (
    <div className="">
      <div className="container relative py-5">
        <nav className="flex items-center justify-between ">
          {/* right nav */}
          <div className="flex items-center justify-between gap-10">
            <h1 className="text-3xl font-bold cursor-pointer text-AlmostBlack">
              snap
            </h1>

            <div
              className="relative flex items-center justify-center gap-2"
              onClick={handleFeaturesDropDown}
            >
              <div className="flex items-center justify-between gap-2 cursor-pointer">
                <p className="hidden text-sm font-medium duration-75 md:block text-MediumGray hover:text-AlmostBlack">
                  Features
                </p>

                {isFeature ? (
                  <img src={ArrowUp} alt="" className="hidden lg:block" />
                ) : (
                  <img src={ArrowDown} alt="" className="hidden lg:block" />
                )}
              </div>

              <div className="absolute top-[20px]">
                {isFeature ? <DesktopFeatures /> : ""}
              </div>
            </div>

            <div
              className="relative flex items-center justify-center gap-2"
              onClick={handleCompanyDropDown}
            >
              <div className="flex items-center justify-between gap-2 cursor-pointer">
                <p className="hidden text-sm font-medium duration-75 cursor-pointer md:block text-MediumGray hover:text-AlmostBlack">
                  Company
                </p>

                {isCompany ? (
                  <img src={ArrowUp} alt="" className="hidden lg:block" />
                ) : (
                  <img src={ArrowDown} alt="" className="hidden lg:block" />
                )}
              </div>

              <div className="absolute top-[20px]">
                {isCompany ? <DesktopCompany /> : ""}
              </div>
            </div>

            <p className="hidden text-sm font-medium duration-75 cursor-pointer md:block text-MediumGray hover:text-AlmostBlack">
              Careers
            </p>
            <p className="hidden text-sm font-medium duration-75 cursor-pointer md:block text-MediumGray hover:text-AlmostBlack">
              About
            </p>
          </div>

          {/* left nav */}
          <div className="flex gap-6 ">
            <button className="hidden px-3 py-1 text-sm font-medium duration-75 md:block text-MediumGray hover:text-AlmostBlack">
              Login
            </button>
            <button className="hidden px-3 py-1 text-sm duration-75 border-2 rounded-lg md:block border-MediumGray text-MediumGray hover:text-AlmostBlack hover:border-AlmostBlack">
              Register
            </button>
          </div>

          {/* mobile menu */}
          <div className="md:hidden">
            <div className="absolute top-0 z-50 text-2xl right-5" ref={parent}>
              <div onClick={handleMenu}>
                {toggleMenu ? <img src={Close} /> : <img src={Hamburger} />}
              </div>
            </div>

            {/* mobile navbar */}
            <div className="absolute right-0 top-5">
              {toggleMenu ? (
                <>
                  <MobileNavbar />
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
