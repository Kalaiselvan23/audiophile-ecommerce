import React, { useContext } from "react";
import { BsCart3 } from "react-icons/bs";
import { cartContext } from "../cartContext";
import { useDispatch, useSelector } from "react-redux"
import CartList from "./CartList"
import { deleteAll } from "../../redux/slices/cartSlice";

export default function Cartdiv(props) {
  const dispatch=useDispatch();
  const hover=useContext(cartContext);
  const itemList=useSelector((state)=>state.cart);
  // const totalPrice=useSelector((state)=>state.totalPrice)
  return (
    <div className={"bg-white w-[20vw] absolute right-24 top-24 h-fit p-5 rounded-lg flex justify-center items-center flex-col z-50 max-sm:w-full max-sm:right-0"}>
    <div className="flex items-baseline justify-between w-full">
    <h1 className="text-left mb-5 text-xl font-extrabold">Cart({itemList.items.length})</h1>
    <button className="text-orange-500 tracking-tighter font-semibold text-sm underline underline-offset-2" onClick={()=>dispatch(deleteAll())}>Remove all</button>
    </div>
      <div>
     {itemList.items.length===0?
     <div>
        <span>
          <BsCart3 className="w-[10vh] h-[10vh] opacity-60"/>
        </span>
        <span className="font-bold">Cart is Empty</span>
        </div>:<div className="flex flex-col gap-3">{itemList.items.map((item)=><CartList item={item}/>)}</div>}
      </div>
      <div className="p-4 flex justify-between w-full font-semibold text-md">
          <h1>Total Amount</h1>
          <h1>$ {itemList.totalPrice}</h1>
        </div>
    </div>
  );
}
