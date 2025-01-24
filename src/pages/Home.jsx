import React from 'react'
import Navbar from '../components/Navbar'
import FoodCard from '../components/FoodCard'
import FoodItems from '../components/FoodItems'
import Cart from '../components/Cart'

const Home = () => {
  return (
    <div>
      <Navbar />
      <FoodItems />
      <FoodCard />
      <Cart />
    </div>
  )
}

export default Home
