import React, { useContext } from 'react'
import { RxCross2 } from "react-icons/rx";
import { FaMinus ,FaPlus} from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import DataContext from './DataContext';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const Cart = () => {
 const {active,setActive,cart,setCart,totalQty,totalPrice} = useContext(DataContext);
 const removeToCart = (itemId) => {
        setCart(cart.filter((cartItem)=>cartItem.id !== itemId))
 }
 const addQty = (itemId) =>{
        setCart(cart.map((cartItem)=>cartItem.id === itemId ? {...cartItem , quantity:cartItem.quantity+1} :cartItem))
 }
 const reduceQty = (itemId) =>{
        setCart(cart.map((cartItem)=>cartItem.id === itemId && cartItem.quantity > 1 ? {...cartItem, quantity:cartItem.quantity-1} :cartItem))
 }
 const navigate = useNavigate()

  return (
    <>
   <div className={`h-screen overflow-y-scroll w-full lg:w-[22vw] bg-white fixed top-0 right-0 p-4  ${active ? "translate-x-0" : "translate-x-full"  } transition-all duration-500 ease-in-out`}>
   <div className="">
      <div className='flex items-center justify-between '>
        <h1 className='font-medium text-xl '>My Order</h1>
        <RxCross2 onClick={()=>setActive(!active)} className='border-2 border-gray-800 rounded-md p-0.5 text-xl hover:text-red-700 hover:border-red-700 cursor-pointer transition-all' />
      </div>
     {cart.length > 0 ? cart.map((item)=>(
         <div key={item.id} className='cart h-20  w-[100%] mt-5 rounded-lg bg-white shadow-lg flex items-center p-1 gap-2 relative'>
         <img className='h-[50%] object-cover' src={item.img} alt="" />
         <div>
             <p className='text-md font-semibold'>{item.name}</p>
             <p className='text-sm ml-1  text-green-500 font-semibold'>₹{item.price}</p>
         </div>
         <div className='flex gap-2 items-center absolute right-7 bottom-1'>
         <FaMinus onClick={()=>reduceQty(item.id)}  className='border-2 border-gray-700 p-1 rounded-md hover:bg-green-500 hover:border-none transition-all cursor-pointer  text-lg' />
         <span className='text-green-500'>{item.quantity}</span>
         <FaPlus onClick={()=>addQty(item.id)}  className='border-2 border-gray-700 p-1 rounded-md hover:bg-green-500 hover:border-none transition-all cursor-pointer  text-lg'  />
         </div>
       <MdDelete onClick={()=>{
        removeToCart(item.id);
        toast(`${item.name}Removed !`, {
            icon: '🖐️',
          });
       }}  className='absolute right-7 top-5 text-gray-500 cursor-pointer' />
       </div>
       
     )): <p className='mt-5 text-center text-xl font-medium'>Your Cart is Empty !!</p>}
    
     
    </div>
   
   </div>
   <div className={`fixed bottom-0  right-0 w-full lg:w-[22%]  bg-white shadow-md rounded-md ${active ? "translate-x-0" : "translate-x-full"} transition-all duration-500 ease-in-out`}>
        <h1 className='font-normal text-md'>Items : <span className='text-green-500'>{totalQty}</span></h1>
        <h2 className='font-normal text-md'>Total Amount : <span className='text-green-500'>₹{totalPrice}</span></h2>
        <hr className='my-2' />
        <button onClick={()=>navigate("/success")} className='w-full bg-green-500 py-2 rounded-lg text-white font-medium '>Checkout</button>
      </div>
    </>
  )
}

export default Cart
