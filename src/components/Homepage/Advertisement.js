import React from "react";
import { useNavigate } from "react-router-dom";
export default function Advertisement() {
  const navigate=useNavigate()
  return (
    <div className="w-[70%] mx-auto my-32 ">
      <div className="ad-div flex bg-[#D87D4A] h-[80vh] relative rounded-lg max-md:flex-col max-md:h-fit">
        <div className="w-[60%] h-full flex justify-center items-end max-md:mx-auto">
          <img
            src={"/images/home/desktop/image-speaker-zx9.png"}
            alt=""
            className="z-20 h-[90%] max-md:h-[90%]"
          />
          <img
            src={"/images/home/desktop/pattern-circles.svg"}
            alt=""
            className="z-10 absolute left-[-20vw]"
          />
        </div>
        <div className="text-white w-[60%] p-20 flex flex-col gap-8 justify-center max-md:w-full max-md:items-center max-md:p-10">
          <span className="font-semibold text-5xl max-md:text-3xl">ZX9 SPEAKER</span>
          <p className="font-thin">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <button className="bg-black p-3 w-fit" onClick={()=>navigate("/speakers/zx9")}>SEE PRODUCT</button>
        </div>
      </div>
      <div className="relative my-10 rounded-lg bg-zx7 w-[100%]">
        <div className=" text-black p-10 flex flex-col gap-5">
          <span className="font-semibold text-4xl">ZX7 SPEAKER</span>
          <button className="border-2 border-black w-fit p-2" onClick={()=>navigate("/speakers/zx7")}>
            SEE PRODUCT
          </button>
        </div>
      </div>
      <div className="flex gap-5 max-md:flex-col">
        <img
          src={"/images/home/desktop/image-earphones-yx1.jpg"}
          alt=""
          className="rounded-lg"
        />
        <div className="bg-[#F1F1F1] w-[50%] rounded-lg flex flex-col items-center justify-center gap-4 max-md:items-center max-md:justify-center max-md:w-[100%] max-md:gap-5 p-5">
          <span className="text-4xl font-semibold">YX1 EARPHONES</span>
          <button className="bg-black text-white w-fit p-3 " onClick={()=>navigate("/earphones/yx1")}>
            SEE PRODUCT
          </button>
        </div>
      </div>
    </div>
  );
}
