"use client";
import { Menu, X } from 'lucide-react'
import React, { useState } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      {/* Navbar */}
     <div className="flex items-center justify-between px-6 py-4 bg-[#1F1B1A] shadow-md sticky top-0 ">
  {/* Left: Logo */}
  <div className="text-white text-2xl font-bold">
    Anirudh <span className="text-[#FF914D]">Kulkarni</span>
  </div>

  {/* Desktop Menu */}
  <div className="hidden md:flex space-x-8 text-white font-medium">
    <a href="#services" className="hover:text-[#FF914D] transition">Services</a>
    <a href="#pricing" className="hover:text-[#FF914D] transition">Pricing</a>
    <a href="/blogs" className="hover:text-[#FF914D] transition">blogs</a>
    <a href="#contact" className="hover:text-[#FF914D] transition">Contact</a>
  </div>

  {/* Mobile Menu Button */}
  <Menu
    color="white"
    size={36}
    className="cursor-pointer md:hidden"
    onClick={() => setIsOpen(true)}
  />
</div>


      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#2A2524] shadow-lg transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } z-30`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-600">
          <h2 className="text-white text-xl font-semibold">Menu</h2>
          <X
            color="white"
            size={32}
            className="cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </div>
        <nav className="flex flex-col p-6 space-y-6 text-white">
          <a href="#contact" className="hover:text-[#FF914D] transition"             onClick={() => setIsOpen(false)}
>
            Contact
          </a>
          <a href="#pricing" className="hover:text-[#FF914D] transition"             onClick={() => setIsOpen(false)}
>
            Pricing
          </a>
          <a href="#services" className="hover:text-[#FF914D] transition"             onClick={() => setIsOpen(false)}
>
            Services
          </a>
          <a href="/blogs" className="hover:text-[#FF914D] transition"             onClick={() => setIsOpen(false)}
>
            Blogs
          </a>
        </nav>
      </div>

      {/* Overlay when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}

export default Navbar
