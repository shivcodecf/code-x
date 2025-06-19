import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react"; // Optional: install lucide-react for icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-transparent text-white font-Poppins px-6 py-4 md:px-20">
      <div className="flex justify-between items-center">
        <img src={logo} alt="Logo" className="w-32" />

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-10">
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            Shop
          </a>
          <a href="#" className="hover:underline">
            Delivery
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </nav>

        {/* CTA button (always visible) */}
        <button className="hidden md:block font-semibold py-2 px-6 border border-white rounded-md">
          Order Your Ice-cream
        </button>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="mt-4 flex flex-col space-y-4 md:hidden">
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            Shop
          </a>
          <a href="#" className="hover:underline">
            Delivery
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
          <button className="font-semibold py-2 px-6 border border-white rounded-md w-fit">
            Order Your Ice-cream
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
