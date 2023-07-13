import React from 'react'
import { NavLink } from 'react-router-dom'
import Products from './Products'

const Sidemenu = () => {
  return (
    <div className='bg-white h-full absolute w-full'>
        <Products/>
    </div>
  )
}

export default Sidemenu