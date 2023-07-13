import React from "react";

export default function Xx99() {
  return (
    <div className="h-[90vh] bg-black bg-no-repeat bg-cover bg-center flex relative max-md:justify-center items-center max-md: ">
      <div className="w-[70%] flex items-center">
        <div className="flex flex-col text-white h-fit justify-around gap-4 items-start w-fit max-md:gap-3 max-md:w-full max-md:items-center md:mx-[20%]">
          <span className="text-[#8C8C8C]">NEW PRODUCT</span>
          <span className="text-6xl font-medium max-sm:text-3xl max-sm:mx-auto sm:w-fit max-md:2xl items-center">
            XX99 MARK II HEADPHONES
          </span>
          <p className="text-[#49575C] w-[60%] max-sm:full max-sm:mx-auto">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button className="bg-[#95774A] p-3 see-product-btn">
            <span>SEE PRODUCT</span>
          </button>
        </div>
        <img
          src="/images/banner/xx992.png"
          className="h-[90vh] max-sm:hidden max-md:hidden "
          alt=""
        />
      </div>
    </div>
  );
}
