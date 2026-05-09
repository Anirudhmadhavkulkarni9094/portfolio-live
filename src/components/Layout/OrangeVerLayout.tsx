import Image from 'next/image'
import React from 'react'

function OrangeVerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="relative group">
        {/* Animated background element */}
        <div className="absolute -inset-1 bg-gradient-to-b from-primary via-orange-600 to-transparent rounded-[3rem] blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
        
        {/* Main Content Container */}
        <div className="relative bg-[#0f172a]/40 backdrop-blur-sm border border-white/5 rounded-[3rem] p-8 sm:p-12 lg:p-20">
          {children}
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-10 -left-10 hidden lg:block opacity-20 pointer-events-none">
           <Image
            src="/cube.png"
            alt=""
            width={120}
            height={120}
            className="animate-float"
          />
        </div>
      </div>
    </div>
  )
}

export default OrangeVerLayout
