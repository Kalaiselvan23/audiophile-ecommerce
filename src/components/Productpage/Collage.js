import React from 'react'

export default function Collage() {
  return (
    <div className='flex mx-auto w-[75%]'>
      <div className='flex flex-col justify-around rounded-xl'>
        <img src="/images/product-xx59-headphones/desktop/image-gallery-1.jpg" className='h-full p-2 rounded-2xl' alt="" />
        <img src="/images/product-xx59-headphones/desktop/image-gallery-2.jpg" className='h-fit p-2 rounded-2xl' alt="" />
      </div>
      <img src="/images/product-xx59-headphones/desktop/image-gallery-3.jpg" className='p-2 rounded-2xl' alt=""/>
    </div>
  )
}
