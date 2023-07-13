import { createBrowserRouter,Route,createRoutesFromElements } from "react-router-dom"
import RootLayout from "../Layouts/RootLayout.js";
import Homepage from "../Pages/Homepage";
import Headphones from "../Pages/Headphones";
import Earphones  from "../Pages/Earphones";
import Speakers from "../Pages/Speakers";
import Getpage from "../Pages/Getpage";
import Checkout from "../Pages/Checkout.js";
import ProductDetails from "../Datas/productdetail";
import getRoute from "./getRoute.js";
const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
      <Route index element={<Homepage/>} />
      <Route path="/headphones" element={<Headphones/>}/>
      <Route path="headphones">
      {getRoute("headphone")}
      </Route>
      <Route path="earphones" element={<Earphones/>}/>
      <Route path="earphones">
      {/* {ProductDetails.filter((item)=>item.type==="earphones").map((item)=>{
        return <Route path={`${item.id}`} element={<Getpage productId={item.id} />} />
      })} */}
      {getRoute("earphones")}
      </Route>
      <Route path="speakers" element={<Speakers/>}/>
      <Route path="speakers">
      {/* {ProductDetails.filter((item)=>item.type==="speakers").map((item)=>{
        return <Route path={`${item.id}`} element={<Getpage productId={item.id} />} />
      })} */}
      {getRoute("speakers")}
      </Route>
      </Route>
    )
  )

export default router