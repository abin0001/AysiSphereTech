import React from "react";
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is imported

const Button = ({ className }) => (
  <button 
    type="button" 
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none transform transition-transform duration-300 hover:scale-125 ${className}`}
  >
    Get Started
  </button>
);

export default Button;
