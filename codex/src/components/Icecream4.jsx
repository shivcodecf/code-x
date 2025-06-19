import React from "react";
import logo from "../assets/logo.png";
import icecream4 from "../assets/icecream 4.png";
import frame2 from "../assets/frame2.png";
import frame3 from "../assets/frame3.png";
import frame4 from "../assets/frame4.png";
import ice3 from "../assets/ice3.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../common/Navbar";

const Icecream4 = () => {
  const images = [frame2, frame3, frame4, ice3];
  const links = ["/", "/ice2", "/ice3", "/ice4"];

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#2DA54E] to-[#47F66E] text-white font-sans overflow-hidden transition-all duration-300 ease-in-out">
    

      <Navbar/>

      {/* Main Section */}
      <main className="flex flex-col md:flex-row px-10 min-h-[calc(100vh-100px)]">
        {/* Left Text Area */}
        <div className="flex-1 flex flex-col justify-center space-y-4 text-center md:text-left px-2 mt-[-100px]">
          <h2 className="text-9xl font-Pacifico font-bold">icecream</h2>
          <h3 className="text-5xl font-bold text-white mt-3 font-Poppins">
            Evergreen cone
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
          <div className="flex gap-6 pt-10 h-[100px] mt-[-80px]">
            {images.map((ice, index) => (
              <div
                key={index}
                className="relative w-[124px] h-[200px] flex justify-center items-end"
              >
                <div className="absolute bottom-0 w-[70px] h-[54px] border-[2px] rounded-[12px] border-white z-0" />
                <div className="relative w-[204px] ml-[-21px] h-[120px] overflow-hidden flex justify-center">
                  <Link to={links[index]}>
                    <img
                      src={ice}
                      alt={`ice-${index}`}
                      className="w-[240px] mt-[10px] cursor-pointer h-[110px] object-contain transition-transform duration-500 ease-in-out origin-bottom hover:rotate-[13deg] hover:scale-110"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Ice Cream Image aligned to bottom */}
        <motion.div
          initial={{ y: 200, x: 100, opacity: 0 }}
          animate={{ y: 0, x: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex-1 flex items-end justify-center"
        >
          <img
            src={icecream4}
            alt="ice cream"
            className="w-[300px] md:w-[420px] drop-shadow-lg"
          />
        </motion.div>
      </main>
    </div>
  );
};

export default Icecream4;
