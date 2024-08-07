import React, { useEffect, useState } from 'react';
import { logo } from "../assets";

const SplashScreen = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1500); // Display splash screen for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={` z-10 fixed inset-0  flex items-center justify-center bg-black bg-opacity-86 transition-opacity duration-500 ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <img src={logo} alt="Aysisphere" className="w-[300px] animate-pings h-[130px]" />
    </div>
  );
};

export default SplashScreen;
