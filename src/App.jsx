import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Success from './pages/Success'
import DataContext from './components/DataContext'
import FoodData from './FoodData'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => {
  const [active,setActive] = useState(false)
  const [cart,setCart] = useState([]);
  const totalQty = cart.reduce((total,item)=>total +  item.quantity, 0);
  const totalPrice = cart.reduce((total,item)=>total + item.price * item.quantity , 0);
  const [selectedCategory,setSelectedCategory] = useState("All");
  const categories = ["All" , "Launch" , "Breakfast" , "Dinner" , "Snacks"];
  const [searchTerm, setSearchTerm] = useState("");
  
  return (
    <div className='p-5'>
     <DataContext.Provider value={{active,setActive,cart,setCart,totalQty,totalPrice,selectedCategory,setSelectedCategory,categories,searchTerm,setSearchTerm}}>
     <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/success' element={<ProtectedRoute element={<Success />} />} />
      </Routes>
     </DataContext.Provider>
     
    </div>
  )
}

export default App
