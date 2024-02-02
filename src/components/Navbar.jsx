import React, { useState, useEffect, useRef } from "react";
import ArrowDown from "/icon-arrow-down.svg";
import ArrowUp from "/icon-arrow-up.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import autoAnimate from "@formkit/auto-animate";
import Features from "./Featurs";
import { FeatureList } from "./Lists";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isFeature, setIsFeatures] = useState(false);
  const [isCompany, setIsCompany] = useState(false);
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
    <div className="relative">
      <div className="container py-5">
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
                <p className="hidden lg:block  font-medium text-sm text-MediumGray hover:text-AlmostBlack duration-75">
                  Features
                </p>

                <img src={ArrowDown} alt="" className="hidden lg:block" />
              </div>

              <div className="absolute top-[20px]">
                {isFeature ? <Features /> : ""}
              </div>
            </div>

            <div
              className="flex justify-center items-center gap-2 relative"
              onClick={handleCompanyDropDown}
            >
              <div className="flex justify-between items-center gap-2 cursor-pointer">
                <p className="hidden lg:block cursor-pointer font-medium text-sm text-MediumGray hover:text-AlmostBlack duration-75">
                  Company
                </p>

                <img src={ArrowDown} alt="" className="hidden lg:block" />
              </div>

              <div className="absolute top-[20px]">
                {isCompany ? <Features /> : ""}
              </div>
            </div>

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
          <div className="lg:hidden relative" onClick={handleMenu} ref={parent}>
            <div className="text-AlmostBlack text-2xl z-10">
              {toggleMenu ? <RxCross2 /> : <GiHamburgerMenu />}
            </div>

            {/* mobile navbar */}
            <>
              {toggleMenu ? (
                <div className="w-[200px] h-screen top-0 right-0 bg-AlmostWhite absolute p-5 flex flex-col gap-5">
                  <div>
                    <p className="font-medium text-lg text-MediumGray hover:text-AlmostBlack duration-75">
                      Features
                    </p>
                  </div>

                  <div>
                    <p className="font-medium text-lg text-MediumGray hover:text-AlmostBlack duration-75">
                      Company
                    </p>
                  </div>

                  <p className="font-medium text-lg text-MediumGray hover:text-AlmostBlack duration-75">
                    Careers
                  </p>

                  <p className="font-medium text-lg text-MediumGray hover:text-AlmostBlack duration-75">
                    About
                  </p>

                  <button className="font-medium text-sm py-1 px-3 text-MediumGray ">
                    Login
                  </button>
                  <button className="text-sm border-2  border-MediumGray py-1 px-3 text-MediumGray rounded-lg">
                    Register
                  </button>
                </div>
              ) : (
                ""
              )}
            </>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
