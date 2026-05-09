"use client";
import { Menu, X } from 'lucide-react'
import React, { useState } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] px-6 py-6">
      <div className="max-w-7xl mx-auto">
        <div className="glass rounded-2xl flex items-center justify-between px-8 py-4">
          {/* Left: Logo */}
          <div className="text-white text-2xl font-bold tracking-tight">
            Anirudh <span className="text-primary">Kulkarni</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10 text-sm font-bold uppercase tracking-widest text-gray-400">
            <a href="/#services" className="hover:text-primary transition-colors">Services</a>
            <a href="/#pricing" className="hover:text-primary transition-colors">Pricing</a>
            <a href="/blogs" className="hover:text-primary transition-colors">Blogs</a>
            <a
              href="/#contact"
              className="bg-primary text-white px-6 py-2.5 rounded-xl hover:bg-primary-hover transition-all duration-300 shadow-lg shadow-primary/20"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="p-2 rounded-xl hover:bg-white/5 transition-colors md:hidden"
            onClick={() => setIsOpen(true)}
          >
            <Menu color="white" size={28} />
          </button>
        </div>
      </div>

      {/* Sidebar (Mobile) */}
      <div
        className={`fixed top-0 right-0 h-full w-80 glass border-l border-white/10 shadow-2xl transform transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } z-[110]`}
      >
        <div className="flex items-center justify-between p-8">
          <h2 className="text-white text-xl font-bold">Menu</h2>
          <button
            className="p-2 rounded-xl hover:bg-white/5 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <X color="white" size={28} />
          </button>
        </div>
        <nav className="flex flex-col p-8 space-y-8 text-lg font-bold uppercase tracking-widest text-gray-400">
          <a href="/#services" className="hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Services</a>
          <a href="/#pricing" className="hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Pricing</a>
          <a href="/blogs" className="hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Blogs</a>
          <a href="/#contact" className="text-primary" onClick={() => setIsOpen(false)}>Contact</a>
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[105]"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}

export default Navbar
