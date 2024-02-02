import { useState } from "react";
import ArrowDown from "/icon-arrow-down.svg";
import ArrowUp from "/icon-arrow-up.svg";
import { MobileCompany } from "./Company";
import { MobileFeatures } from "./Featurs";

const MobileNavbar = () => {
  const [mobileFeature, setMobileFeatures] = useState(false);
  const [mobileCompany, setMobileCompany] = useState(false);

  const handleFeaturesDropDown = () => {
    setMobileFeatures(!mobileFeature);
  };

  const handleCompanyDropDown = () => {
    setMobileCompany(!mobileCompany);
  };

  return (
    <>
      <div className="w-[200px]  h-screen  bg-AlmostWhite  py-20 px-5 flex flex-col gap-5">
        <div>
          <div
            className="flex justify-start items-center gap-4"
            onClick={handleFeaturesDropDown}
          >
            <p className="font-medium text-lg text-MediumGray hover:text-AlmostBlack duration-75">
              Features
            </p>

            {mobileFeature ? (
              <img src={ArrowUp} alt="" />
            ) : (
              <img src={ArrowDown} alt="" />
            )}
          </div>

          {mobileFeature ? <MobileFeatures /> : ""}
        </div>

        <div onClick={handleCompanyDropDown}>
          <div className="flex justify-start items-center gap-4 ">
            <p className="font-medium text-lg text-MediumGray hover:text-AlmostBlack  duration-75">
              Company
            </p>

            {mobileCompany ? (
              <img src={ArrowUp} alt="" />
            ) : (
              <img src={ArrowDown} alt="" />
            )}
          </div>

          <div>{mobileCompany ? <MobileCompany /> : ""}</div>
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
    </>
  );
};

export default MobileNavbar;
