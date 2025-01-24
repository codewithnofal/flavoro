import React, { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";
const Success = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      {loading ? <PropagateLoader color="#36d7b7" /> : <div>
       
       <h2 className="text-3xl font-medium mb-4 text-center ">Order Successful !</h2>
       <p>Your Order Has been Successfully placed</p>
     </div>}
      
    </div>
  );
};

export default Success;
