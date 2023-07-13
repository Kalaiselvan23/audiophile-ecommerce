import React from 'react'
import ProductDiv from "../components/Productpage/ProductDiv.js"
import Collage from "../components/Productpage/Collage.js"
import ProductDescription from "../components/Productpage/ProductDescription.js"
import Navbar from '../components/Navbar.js'
import Products from '../components/Products.js'
import Footer from '../components/Footer.js'
import Compliment from "../components/Compliment.js"
import ProductDetails from '../Datas/productdetail.js'

export default function Getpage(props) {
    const itemId=props.productId;    
    const product=ProductDetails.find((item)=>item.id===itemId)
  return (
    <div>
    <div>
      {/* <Navbar/> */}
      <ProductDiv data={product}/>
      <ProductDescription des={product.feature} />
      <Collage />
      <Products/>
      <Compliment/>
      <Footer/>
    </div>
</div>

  )
}
