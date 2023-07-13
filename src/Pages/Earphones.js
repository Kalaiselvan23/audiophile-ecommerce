import React from 'react'
import Compliment from '../components/Compliment'
import Footer from '../components/Footer'
import Title from '../components/Headphone/Title'
import Navbar from '../components/Navbar'
import Products from '../components/Products';
import Data from '../Contents/Headphonedata';
import GetModel from '../components/GetModel'
export default function Earphones() {
  return (
    <div>
    {/* <Navbar/> */}
    <Title title="EARPHONES"/>
    {Data.filter((item)=>item.type==="earphones").map((item)=><GetModel data={item} />)}
    <Products/>
    <Compliment/>
    <Footer/>
    </div>
  )
}
