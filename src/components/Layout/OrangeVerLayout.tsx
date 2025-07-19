import Image from 'next/image'
import React from 'react'

function OrangeVerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1F1B1A] px-4 sm:px-8 md:px-16 lg:px-20 py-10 relative">
      {/* Outer Container with Subtle Border */}
      <div className="relative p-[2px] w-full max-w-6xl rounded-lg bg-gradient-to-b from-[#FF914D] via-[#FF6A00] to-black">
        
        {/* Inner Content Box */}
        <div className="bg-[#1F1B1A] rounded-lg shadow-lg p-6 sm:p-8 md:p-10 lg:p-12 relative z-10">
          {children}
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-[-30px] right-[-50px] hidden md:flex flex-col items-end space-y-[-40px] opacity-75">
          <Image
            src="/cube.png"
            alt="Decorative Cube"
            width={70}
            height={70}
            className="rotate-[15deg]"
          />
          <Image
            src="/OCUBE.png"
            alt="Orange Decorative Cube"
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>
  )
}

export default OrangeVerLayout
