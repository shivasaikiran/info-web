import React from "react";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <>
    <Link to='/hireus'>
    <button className="px-6 py-2 mr-6 text-white rounded-full bg-gradient-to-r from-pink-500 to-orange-500">
      Hireus
    </button>
    </Link>
    
    <button className="px-6 py-2 text-white rounded-full bg-gradient-to-r from-pink-500 to-orange-500">
      
    Contact
  </button>
  </>
  );
};

export default Button;
