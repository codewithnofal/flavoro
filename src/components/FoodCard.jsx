import React, { useContext } from "react";
import { FaStar } from "react-icons/fa";
import FoodData from "../FoodData";
import { FaCartShopping } from "react-icons/fa6";
import DataContext from "./DataContext";
import toast, { Toaster } from "react-hot-toast";

const FoodCard = () => {
  const { active, setActive, cart, setCart, totalQty ,selectedCategory,setSelectedCategory,categories,searchTerm, setSearchTerm} =
    useContext(DataContext);
  const addToCart = (food) => {
    const excitingCart = cart.find((CartItem) => CartItem.id === food.id);
    if (excitingCart) {
      const updatedCart = cart.map((item) =>
        item.id === food.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...food, quantity: 1 }]);
    }
  };
  const handleToast = (name) => toast.success(`Added ${name}`)
  const filteredItems = FoodData.filter((item)=>{
    const categoryMatch = selectedCategory === "All" || item.category === selectedCategory;
    const searchMatch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch;
  })
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="min-h-[100vh] mt-14  ">
        <div className="flex gap-7 flex-wrap ">
          {filteredItems.map((food) => (
            <div
              key={food.id}
              className="card h-[320px] w-[230px] rounded-lg shadow-lg bg-white p-4 flex flex-col  "
            >
              <div>
                <img
                  className="h-32 object-cover w-[100%] hover:scale-105 transition-all duration-400 ease-out cursor-grab"
                  src={food.img}
                  alt=""
                />
              </div>
              <div className="flex justify-between pt-2">
                <p className="font-medium  ">{food.name}</p>
                <p className="font-medium text-green-500"> ₹{food.price}</p>
              </div>
              <div className="w-full ">
                <p className="text-sm font-light h-20">
                  {food.desc.slice(0, 70)}....
                </p>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1 ">
                  <FaStar size={18} className="text-yellow-500" />
                  <span>{food.rating}</span>
                </div>
                <button
                  onClick={() => {
                    addToCart(food);
                    handleToast(food.name);
                  }}
                  className="px-3 py-2 bg-green-500 hover:bg-green-700 text-sm font-medium text-white rounded-lg"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
        <FaCartShopping
          onClick={() => setActive(!active)}
          size={50}
          className={`p-3 cursor-pointer bg-white shadow-lg rounded-full fixed right-10 bottom-10 ${
            totalQty > 0 ? "animate-bounce delay-500 transition-all" : ""
          }`}
        />
      </div>
    </>
  );
};

export default FoodCard;
