import React from 'react'
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
     <header className="flex justify-between items-center px-12 py-6">
            <img src={logo} alt="Logo" />
            <nav className="space-x-10 font-medium font-Poppins">
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
            <button className="mr-[100px] font-Poppins py-2 px-10 rounded-md font-semibold bg-transparent text-white border border-white">
              Order Your Ice-cream
            </button>
          </header>
  )
}

export default Navbar
