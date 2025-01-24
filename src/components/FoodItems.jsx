import React, { useContext, useEffect, useState } from "react";
import FoodData from "../FoodData";
import DataContext from "./DataContext";
const FoodItems = () => {
 const {selectedCategory,setSelectedCategory,categories} =  useContext(DataContext);
  return (
    <div className="pt-10">
      <div>
        <h1 className="text-xl font-medium ">Find The Best Food</h1>
        <div className="flex gap-4 items-center mt-3 overflow-x-auto lg:overflow-x-hidden">
        
           {categories.map((category,index)=>(
             <button onClick={()=>setSelectedCategory(category)} className={`px-3 py-3  rounded-lg text-medium ${selectedCategory === category ? "bg-green-500" : "bg-gray-300"} transition-all duration-300 ease-in-out`}>{category}</button>
           ))}
        
        </div>
      </div>
    </div>
  );
};

export default FoodItems;
