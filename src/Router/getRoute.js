import React from 'react'
import ProductDetails from '../Datas/productdetail'
import { Route } from 'react-router-dom'
import Getpage from '../Pages/Getpage'

const getRoute = (type) => {
    console.log(type)
    return ProductDetails.filter((item)=>item.type===type).map((item)=>{
        return <Route path={`${item.id}`} element={<Getpage productId={item.id} />} />})
}

export default getRoute
