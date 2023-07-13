import React from "react";
export default function Footer() {
  return (
    <div className="bg-[rgb(25,25,25)] text-white h-fit mt-16 pb-5">
      <div className="flex justify-between w-[70%] mx-auto p-10 max-md:flex-col max-md:items-center">
        <span className="font-bold text-2xl my-auto">audiophile</span>
        <ul className="flex justify-between mt-5 md:hidden lg:flex gap-3 max-md:flex-row max-md:justify-between max-sm:flex-col items-center max-sm:gap-4">
          <li>HOME</li>
          <li>HEADPHONES</li>
          <li>SPEAKERS</li>
          <li>EARPHONES</li>
        </ul>
      </div>
      <div className="w-[70%] mx-auto flex justify-between">
        <p className="font-thin w-fit h-fit overflow-hidden mx-10 max-md:mx-auto ">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <div className="flex gap-10 h-6 mr-8 max-md:hidden">
          <img src={"/images/shared/desktop/icon-facebook.svg"} alt="" />
          <img src={"/images/shared/desktop/icon-twitter.svg"} alt="" />
          <img src={"/images/shared/desktop/icon-instagram.svg"} alt="" />
        </div>
      </div>
    </div>
  );
}
