import Image from 'next/image'
import React from 'react'

function OrangeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1F1B1A] px-4 sm:px-8 md:px-16 lg:px-20 py-10 relative">
      {/* Outer Gradient Border */}
      <div className="relative p-[2px] w-full max-w-6xl rounded-lg bg-gradient-to-r from-[#FF914D] to-black">
        
        {/* Inner Content Box */}
        <div className="bg-[#1F1B1A] shadow-lg p-6 sm:p-8 md:p-10 lg:p-12 rounded-lg">
          {children}
        </div>

        {/* Decorative Cubes */}
        <div className="absolute top-[-20px] right-[-40px] hidden md:flex flex-col items-end space-y-[-30px] opacity-80">
          <Image
            src="/cube.png"
            alt="Decorative Cube"
            width={60}
            height={60}
            className="rotate-[15deg]"
          />
          <Image
            src="/OCUBE.png"
            alt="Decorative OCube"
            width={180}
            height={180}
            className="rotate-[5deg]"
          />
        </div>
      </div>
    </div>
  )
}

export default OrangeLayout
