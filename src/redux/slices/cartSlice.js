import { createSlice } from "@reduxjs/toolkit";

const initialState={
    items:[],
    totalPrice:0,
}

const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addItem:(state,action)=>{                                                                                                                              
            const data=action.payload.data;
            const count=action.payload.count;
            const findId=state.items.find((item)=>item.id===data.id)
            if(findId)
            {
                findId.count+=count;
                let total=Number(action.payload.price)+Number(state.totalPrice);
                state={...state,totalPrice:total}
                return;
            }
            const newItem={
                id:data.id,
                name:data.model,
                price:data.price,
                img:data.img,
                count:count,
            }
            console.log(newItem)
            state.items=[...state.items,newItem]
            let total=Number(action.payload.price)+Number(state.totalPrice);
            state={...state,totalPrice:total}
            
        },
        deleteItem:(state,action)=>{
            const oldCart=state.items.filter((item)=>Number(action.payload.id)===Number(state.item))
            state.totalPrice=Number(state.totalPrice)-Number(state.items.find((item)=>item.id===action.payload.id))
            state.items=[...oldCart]
        },
        deleteAll:(state)=>{
            state.items=[]
            state.totalPrice=0;
        },
        increaseOrder:(state,action)=>{
            //console.log(action.payload.id)
            let Count=state.items.find((item)=>action.payload.id===item.id)
            //console.log(Count.count)
            Count.count=(Count.count>0)?Number(Count.count)+1:Count.count;
        //    state={...state,totalPrice:this.totalPrice+(Count.count*Count.price)}
            let newTotal=state.totalPrice+(Count.count*Count.price)
            state.totalPrice=newTotal;
        },
        decreaseOrder:(state,action)=>
        {
           let Count=state.items.find((item)=>action.payload.id===item.id)
           Count.count=(Count.count>0)?Number(Count.count)-1:Count.count;
           state.totalPrice=state.totalPrice-(Count.count*Count.price)
        }
    }
})

export const {addItem,deleteItem,increaseOrder,decreaseOrder,deleteAll}=cartSlice.actions;
export default cartSlice.reducer;