import Image from 'next/image'
import React from 'react'

function OrangeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative group">
        {/* Animated background element */}
        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-orange-600 rounded-3xl blur opacity-10 group-hover:opacity-20 transition duration-1000 group-hover:duration-200"></div>
        
        {/* Main Content Container */}
        <div className="relative bg-[#0f172a]/40 backdrop-blur-sm border border-white/5 rounded-3xl p-6 sm:p-10 lg:p-16">
          {children}
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-10 -right-10 hidden lg:block opacity-20 pointer-events-none">
           <Image
            src="/cube.png"
            alt=""
            width={100}
            height={100}
            className="animate-float"
          />
        </div>
      </div>
    </div>
  )
}

export default OrangeLayout
