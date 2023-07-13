import React from 'react'
export default function Navbar(props) {
  return (
    <div>
    <div className={(!props.from?"bg-black":"bg-[#191919]")}>
    <div className='text-white flex justify-between items-center h-[10vh] border-b-2 border-neutral-600 text-small w-[75%] mx-auto'>
      <span className="font-extrabold text-2xl">audiophile</span>
      <div className='flex justify-between w-[40%] md:hidden lg:flex max-sm:hidden'>
        <span class="hover:text-[#95774A] nav-link">HOME</span>
        <span class="hover:text-[#95774A] nav-link">HEADPHONES</span>
        <span class="hover:text-[#95774A] nav-link">SPEAKERS</span>
        <span class="hover:text-[#95774A] nav-link">EARPHONES</span>
      </div>
      <span><img src={"/images/shared/desktop/icon-cart.svg"} alt="cart" /></span>
    </div>
    </div>
    </div>

  )
}
