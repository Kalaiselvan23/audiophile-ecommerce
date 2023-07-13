import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/slices/cartSlice";

export default function ProductDiv(props) {
  const dispatch=useDispatch()
  const [counter, setcounter] = useState(1);
  return (
    <div>
      <div className="w-[75%] mx-auto my-16 h-[60vh] flex">
        <img
          src={props.data.img}
          alt=""
          className="h-full mx-auto"
        />
        <div className=" flex flex-col justify-around w-[40%] mx-auto  h-[80%] my-auto">
          <h1 className="text-5xl font-medium">{props.data.model}</h1>
          <p className="font-thin">
          {props.data.description}
          </p>
          <span className="font-bold text-xl">${props.data.price}</span>
          <div className=" flex">
          <div className="w-20 flex justify-between bg-white mx-20">
      <button
        className="counter-buttons w-5"
        onClick={() => {(counter-1)!==0?setcounter(counter-1):setcounter(counter)}}
      >
        -
      </button>
      <span className="my-auto">{counter}</span>
      <button className="counter-buttons w-5" onClick={()=>setcounter(counter+1)}>+</button>
    </div>
          <buttons className="bg-orange-500 text-white h-10 w-fit p-2" onClick={()=>{
            setcounter(1);
            dispatch(addItem({data:props.data,count:counter}))
            }}>Add Cart</buttons>
          </div>
        </div>
      </div>
    </div>
  );
}
