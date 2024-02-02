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
      <div className="container py-5 relative">
        <nav className="flex justify-between items-center ">
          {/* right nav */}
          <div className="flex justify-between items-center gap-10">
            <h1 className="cursor-pointer font-bold text-3xl text-AlmostBlack">
              snap
            </h1>

            <div
              className="flex justify-center items-center gap-2 relative"
              onClick={handleFeaturesDropDown}
            >
              <div className="flex justify-between items-center gap-2 cursor-pointer">
                <p className="hidden md:block  font-medium text-sm text-MediumGray hover:text-AlmostBlack duration-75">
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
              className="flex justify-center items-center gap-2 relative"
              onClick={handleCompanyDropDown}
            >
              <div className="flex justify-between items-center gap-2 cursor-pointer">
                <p className="hidden md:block cursor-pointer font-medium text-sm text-MediumGray hover:text-AlmostBlack duration-75">
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

            <p className="hidden md:block cursor-pointer font-medium text-sm text-MediumGray hover:text-AlmostBlack duration-75">
              Careers
            </p>
            <p className="hidden md:block cursor-pointer font-medium text-sm text-MediumGray hover:text-AlmostBlack duration-75">
              About
            </p>
          </div>

          {/* left nav */}
          <div className=" flex gap-6">
            <button className="hidden md:block font-medium text-sm py-1 px-3 text-MediumGray hover:text-AlmostBlack duration-75">
              Login
            </button>
            <button className="hidden md:block text-sm border-2  border-MediumGray py-1 px-3 text-MediumGray rounded-lg hover:text-AlmostBlack  hover:border-AlmostBlack duration-75">
              Register
            </button>
          </div>

          {/* mobile menu */}
          <div className="md:hidden">
            <div className=" text-2xl z-50" onClick={handleMenu} ref={parent}>
              {toggleMenu ? <img src={Close} /> : <img src={Hamburger} />}
            </div>

            {/* mobile navbar */}
            <div className="absolute top-5 right-0">
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
