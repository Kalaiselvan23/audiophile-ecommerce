import React from 'react'

export default function ProductDescription(props) {
  // console.log(props.des)
  return (
    <div className='w-[75%] my-10 mx-auto flex justify-between p-5'>
      <div className='w-[60%]'>
      <h1 className='text-3xl my-5'>FEAUTURES</h1>
      <p className='font-thin'>
      {props.des}
      </p>
      </div>
      <ul className="p-5 w-[30%] font-thin">
        <h1 className='text-3xl my-5 font-normal'>IN THE BOX</h1>
        <li><span>1x</span> Headphone Unit</li>
        <li><span>2x</span> Replacement Earcups</li>
        <li><span>1x</span> User Manual</li>
        <li><span>1x</span> 3.5 mm audio cable</li>
      </ul>
    </div>
  )
}
