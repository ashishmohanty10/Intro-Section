import React from "react";
import { CompanyList } from "./Lists";

const DesktopCompany = () => {
  return (
    <>
      <div className="p-4 w-[150px] bg-AlmostWhite rounded-lg shadow-2xl flex justify-center items-center">
        <div>
          {CompanyList.map((d, i) => (
            <>
              <div key={i} className="mb-2">
                <div>
                  <p className="text-sm text-MediumGray hover:text-AlmostBlack duration-75 font-medium">
                    {d.bio}
                  </p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export const MobileCompany = () => {
  return (
    <>
      <div className="">
        <div>
          {CompanyList.map((d, i) => (
            <>
              <div key={i} className="mb-2">
                <div>
                  <p className="text-sm text-MediumGray hover:text-AlmostBlack duration-75 font-medium">
                    {d.bio}
                  </p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default DesktopCompany;
