import React from "react";
import { FeatureList } from "./Lists";

const Features = () => {
  return (
    <>
      <div className="p-4 w-[150px] bg-AlmostWhite rounded-lg shadow-2xl flex justify-center items-center">
        <div>
          {FeatureList.map((d, i) => (
            <>
              <div key={i} className="flex  items-center gap-5 mb-2 ">
                <div>
                  <img src={d.imgUrl} alt="" className="w-[15px]" />
                </div>

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

export default Features;
