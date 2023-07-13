import React from "react";

export default function Compliment() {
  return (
    <div className="w-[70%] flex mx-auto rounded-lg max-md:flex-col max-md:flex-col-reverse">
      <div className="flex flex-col justify-center gap-7">
        <span className="text-4xl font-medium mt-5">
          BRINGING YOU THE <span className="text-[#D87D4A] mr-2">BEST</span> AUDIO
          GEAR
        </span>
        <p className="font-thin w-[90%] max-md:mx-auto">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <img
        src={"/images/shared/desktop/image-best-gear.jpg"}
        className="rounded-lg"
        alt="2"
      />
    </div>
  );
}
