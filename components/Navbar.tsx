'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full relative flex items-center justify-between py-6 px-6 md:px-12 max-w-[1440px] mx-auto bg-white z-50">
      {/* Left */}
      <div className="flex items-center w-full md:w-1/4 mb-4 md:mb-0 justify-between md:justify-start">
        <Link href="/">
          <span className="text-xl md:text-[22px] font-bold text-gray-900 tracking-tight">Nisshant Menddhe</span>
        </Link>
      </div>

      {/* Center */}
      <div className="hidden lg:flex items-center justify-center w-2/4 gap-10 whitespace-nowrap">
        <Link href="/#about" className="flex-shrink-0 text-[14px] font-medium text-gray-400 hover:text-gray-900 transition-colors">About Us</Link>
        <Link href="/#courses" className="flex-shrink-0 text-[14px] font-medium text-gray-400 hover:text-gray-900 transition-colors">Courses</Link>
        <Link href="/#benefits" className="flex-shrink-0 text-[14px] font-medium text-gray-400 hover:text-gray-900 transition-colors">Benefits</Link>
        <Link href="/#faq" className="flex-shrink-0 text-[14px] font-medium text-gray-400 hover:text-gray-900 transition-colors">FAQ</Link>
      </div>

      {/* Right */}
      <div className="hidden md:flex items-center justify-end w-1/4 gap-6 whitespace-nowrap">
        <Link href="#" className="px-6 py-3 bg-[#0F172A] text-white text-[14px] font-medium rounded-full hover:bg-gray-800 transition-colors">Join Now</Link>
      </div>
    </nav>
  );
}
