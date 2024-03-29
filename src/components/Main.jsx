import React from "react";
import DesktopImg from "/image-hero-desktop.png";
import MobileImg from "/image-hero-mobile.png";
import Audiophile from "/client-audiophile.svg";
import Databiz from "/client-databiz.svg";
import Maker from "/client-maker.svg";
import Meet from "/client-meet.svg";

const Main = () => {
  return (
    <div className="container py-5">
      <div className="flex flex-col lg:flex-row justify-between items-center px-20 gap-24 mb-5 lg:mb-0">
        <div className="order-2 lg:order-1 flex flex-col gap-8">
          <h2 className="hidden lg:block  text-center lg:text-left text-7xl font-bold">
            Make <br /> remote work
          </h2>

          <h2 className="lg:hidden text-2xl text-center lg:text-left lg:text-7xl font-bold">
            Make remote work
          </h2>

          <p className="font-medium text-lg lg:w-[70%] text-MediumGray lg:text-left text-center">
            Get your team in sync, no matter your location. Steamline processes,
            create team rituals. and watch productivity soar.
          </p>

          <div className="flex justify-center lg:justify-start">
            <button className=" py-2 px-3 bg-AlmostBlack text-AlmostWhite rounded-lg text-sm mb-10">
              Learn More
            </button>
          </div>

          <div className="flex justify-center lg:justify-start items-center gap-8">
            <img src={Databiz} alt="" />
            <img src={Audiophile} alt="" />
            <img src={Meet} alt="" />
            <img src={Maker} alt="" />
          </div>
        </div>

        <div className="hidden order-1 lg:order-2 w-[500px] lg:flex justify-center items-center">
          <img src={DesktopImg} alt="" />
        </div>

        <div className="lg:hidden order-1 lg:order-2 w-[450px] flex justify-center items-center">
          <img src={MobileImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Main;
