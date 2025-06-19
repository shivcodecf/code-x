import React, { useState } from "react";
import logo from "../assets/logo.png";
import icecream from "../assets/icecream 1.png";
import ice3 from "../assets/ice3.png";
import frame2 from "../assets/frame2.png";
import frame3 from "../assets/frame3.png";
import frame4 from "../assets/frame4.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../common/Navbar";
import { useNavigate } from "react-router-dom";

const Icecream1 = () => {
  const images = [frame2, frame3, frame4, ice3];
  const links = ["/", "/ice2", "/ice3", "/ice4"];
  const [clickedIndex, setClickedIndex] = useState(null);
  const navigate = useNavigate();

  const handleClick = (index) => {
    setClickedIndex(index);

    // Delay navigation to allow animation to finish
    setTimeout(() => {
      navigate(links[index]);
    }, 150); // same as transition duration
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#C51C98] to-[#FF6CEE] text-white font-sans overflow-hidden transition-all duration-300 ease-in-out">
      {/* Navbar */}
      <Navbar />

      {/* Main Section */}
      <main className="flex flex-col md:mt-0 md:mr-0  mt-[100px] md:flex-row px-10 min-h-[calc(100vh-100px)]">
        {/* Left Section */}
        <div className=" flex-1 mt-[-40px] flex flex-col justify-center space-y-4 text-center md:text-left px-2 md:mt-[-100px]  ">
          <h2 className=" text-6xl md:text-9xl font-Poppins md:font-Pacifico font-bold ml-[-37px] md:mr-0 md:ml-0 ">
            icecream
          </h2>
          <h3 className=" text-4xl md:text-5xl font-bold text-white mt-3 font-Poppins">
            Strawberry cone
          </h3>
          <p className="text-white/90 max-w-lg font-Poppins mt-6">
            Embark on a culinary journey of delight as you immerse yourself in
            our artisan-crafted ice cream collection—each flavor a story, each
            scoop an unforgettable chapter in your sweet odyssey!
          </p>
          <p className="text-white/90 max-w-lg font-Poppins">
            Indulge in a world of imagination, where every scoop unveils a new
            taste adventure! Choose your favorite
          </p>

          {/* Mini Cones */}
          <div className="grid grid-cols-2 md:flex md:flex-nowrap gap-6 pt-10 h-auto md:h-[100px] mt-[-40px] md:mt-[-80px] justify-center md:justify-start">
            {images.map((ice, index) => (
              <div
                key={index}
                className="relative w-full md:w-[124px] h-[200px] flex justify-center items-end"
              >
                {/* Animated white border */}
                <motion.div
                  initial={{ opacity: 1 }}
                  animate={{ opacity: clickedIndex === index ? 0.2 : 1 }}
                  transition={{ duration: 0.4 }}
                  className="absolute bottom-0 w-[70px] h-[54px] border-[2px] rounded-[12px] border-white z-0"
                />

                {/* Image container */}
                <div className="relative w-full md:w-[204px] h-[120px] overflow-hidden flex justify-center">
                  <button
                    onClick={() => handleClick(index)}
                    className="cursor-pointer"
                  >
                    <img
                      src={ice}
                      alt={`ice-${index}`}
                      className="w-[150px] md:w-[240px] mt-[10px] h-[110px] object-contain transition-transform duration-500 ease-in-out origin-bottom hover:rotate-[13deg] hover:scale-110"
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image Touching Bottom */}
        <div className=" mt-[70px] md:mt-0">
          <motion.div
            initial={{ y: 200, x: 100, opacity: 0 }}
            animate={{ y: 10, x: 10, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex-1 flex items-end justify-center"
          >
            <img
              src={icecream}
              alt="ice cream"
              className="w-[300px] md:w-[420px] drop-shadow-lg"
            />
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Icecream1;
