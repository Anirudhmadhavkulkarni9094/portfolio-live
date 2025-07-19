import Image from 'next/image'
import React from 'react'

function OrangeVerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1F1B1A] px-4 sm:px-8 md:px-16 lg:px-20 py-10 relative">
      <div className="p-[1px] w-full max-w-6xl bg-gradient-to-b from-[#FF914D] to-black rounded-lg relative">
        <div className="bg-[#1F1B1A] shadow-lg p-6 sm:p-8 md:p-10 lg:p-12 rounded-lg">
          {children}
        </div>

        {/* Decorative Images */}
        <div className="absolute top-0 right-0 hidden md:block">
          <Image
            src="/cube.png"
            alt=""
            width={50}
            height={50}
            className="animate-bounce"
          />
          <Image
            src="/OCUBE.png"
            alt=" "
            width={250}
            height={250}
            className="rotate-6 animate-bounce"
          />
        </div>
      </div>
    </div>
  )
}

export default OrangeVerLayout
