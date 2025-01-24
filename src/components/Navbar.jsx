import React, { useContext, useState } from "react";
import DataContext from "./DataContext";

const Navbar = () => {
 const {searchTerm,setSearchTerm} = useContext(DataContext)
  return (
    <div className="flex justify-between flex-col lg:flex-row items-center lg:items-start">
      <div className="flex flex-col">
        <h2 className="text-2xl font-semibold text-gray-600">
          {new Date().toUTCString().slice(0, 16)}
        </h2>
        <h1 className="text-3xl font-medium text-gray-900">
          Flavoro <span className="text-green-500">Foods</span>
        </h1>
      </div>
      <div>
        <input
          className="p-2 w-[80vw] lg:w-[19vw] rounded-lg outline-green-500 shadow-md"
          type="text"
          value={searchTerm}
          onChange={(e)=>{
            setSearchTerm(e.target.value)
          }}
          placeholder="Search Here..."
        />
      </div>
    </div>
  );
};

export default Navbar;
