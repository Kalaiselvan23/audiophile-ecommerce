import React, { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Cartdiv from "../components/Cart/Cartdiv";
import { cartContext } from "../components/cartContext";
import { TiThMenu } from "react-icons/ti";
import Sidemenu from "../components/Sidemenu";
export default function RootLayouts(props) {
  const [ishover, sethover] = useState(false);
  const [ismenuHover, setmenuHover] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="relative">
      <cartContext.Provider value={{ cart: ishover, menu: ismenuHover }}>
        <div className={!props.from ? "bg-black" : "bg-[#191919]"}>
          <div className="text-white flex justify-between items-center h-[10vh] border-b-2 border-neutral-600 text-small w-[75%] mx-auto z-40">
            <div className="flex items-center justify-start max-sm:w-full">
              <span
                className="sm:block md:hidden lg:hidden"
                onClick={() => setmenuHover(!ismenuHover)}
              >
                <TiThMenu className="text-white text-xl" />
              </span>
              <NavLink className="font-extrabold text-2xl max-sm:text-center mx-auto" to="/">
                audiophile
              </NavLink>
            </div>
            <div className="flex justify-between w-[50%] md:hidden lg:flex max-sm:hidden">
              <NavLink to="/">
                <span class="hover:text-[#95774A] nav-link">HOME</span>
              </NavLink>
              <NavLink to="/headphones">
                <span class="hover:text-[#95774A] nav-link">HEADPHONES</span>
              </NavLink>
              <NavLink to="/speakers">
                <span class="hover:text-[#95774A] nav-link">SPEAKERS</span>
              </NavLink>
              <NavLink to="/earphones">
                <span class="hover:text-[#95774A] nav-link">EARPHONES</span>
              </NavLink>
            </div>
            <span
              onClick={() => sethover(!ishover)}
              className="max-sm:block md:hidden lg:block"
            >
              <img src={"/images/shared/desktop/icon-cart.svg"} alt="cart" />
            </span>
          </div>
        </div>
        {ishover ? <Cartdiv /> : ""}
        {ismenuHover ? <Sidemenu /> : ""}
        <Outlet />
      </cartContext.Provider>
    </div>
  );
}
