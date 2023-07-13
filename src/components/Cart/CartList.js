import React, { useState } from 'react'
import { increaseOrder,decreaseOrder, deleteItem } from '../../redux/slices/cartSlice';
import { useDispatch } from 'react-redux';
import {AiOutlineClose} from "react-icons/ai";

const CartList = (props) => {
    const item=props.item
    const dispatch=useDispatch();
    const [count,setCount]=useState(0);
  return (
    <div className='w-72 items-center flex justify-between p-3 bg-gray-100 rounded-md relative'>
    <AiOutlineClose className='absolute top-1 text-gray-500 text-md right-0 m-1' onClick={()=>dispatch(deleteItem(item.id))}/>
        <img alt="" src={`${item.img}`} className='w-20' /> 
        <div className='flex flex-col text-left'>
        <h4 className='font-semibold tracking-wide'>{item.name}</h4>
        <span>${item.price}</span>
        </div>
        <div className='flex justify-around w-24 h-5 items-center text-white outline-none'>
            <button className="bg-orange-500 w-6 rounded-full" onClick={()=>dispatch(decreaseOrder(item))}>-</button>
            <span className='text-black text-sm'>{item.count}</span>
            <button className='bg-orange-500 rounded-full w-6' onClick={()=>dispatch(increaseOrder(item))}>+</button>
        </div>
        
    </div>
  )
}

export default CartList