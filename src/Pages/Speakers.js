import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Compliment from '../components/Compliment'
import Products from '../components/Products'
import Title from '../components/Headphone/Title'
import Data from '../Contents/Headphonedata';
import GetModel from '../components/GetModel'
import { Outlet } from 'react-router-dom'

export default function Speakers() {
  return (
    <div>
      {/* <Navbar/> */}
      <Title title="SPEAKERS"/>
      {Data.filter((item)=>item.type==="speakers").map((item)=><GetModel data={item} />)}
      <Products/>
      <Compliment/>
      <Footer/>
      <Outlet/>
    </div>
  )
}
