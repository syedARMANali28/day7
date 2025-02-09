"use client";

import { useState } from 'react';
import { Sheet , SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import React from 'react';
import Link from 'next/link';
import { useCart } from "@/hooks/CartContext"; // Import Cart Context
import { UserButton, useUser, SignInButton } from "@clerk/nextjs"; // ✅ Import Clerk auth

export const FirstHeader = () => {
  return (
    <div className="flex flex-col items-center justify-between h-auto sm:h-12 md:14 lg:16 sm:flex-row w-full  bg-[#2d284d] px-4 md:px-[5%]">
      {/* Left Section: Free Shipping with Tick */}
      <div className="flex items-center space-x-2">
        {/* Tick Icon */}
        <img
          className="w-[16px] h-[16px] mb-1 sm:mb-0"
          src="/images/tick.png"
          alt="tick"
        />

        {/* Free Shipping Text */}
        <span className="text-white text-xs md:text-sm mb-1 py-1 sm:mb-0">
          Free Shipping On All Orders Over $50
        </span>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4 md:space-x-6 py-1 sm:w-auto sm:mb-0">
        {/* Language Selector */}
        <select className="bg-black text-white text-xs md:text-sm p-1 hover:text-gray-400">
          <option value="english">ENG</option>
        </select>

        {/* FAQs Link */}
        <span className="text-white text-xs md:text-sm cursor-pointer hover:text-gray-400">
          <Link href="/faq">FAQs</Link>
        </span>

        {/* Circle (Divider) */}
        <img
          className="hidden md:block w-[16px] h-[16px]"
          src="/images/circle.png"
          alt="divider"
        />

        {/* Need Help Link */}
        <span className="text-white text-xs md:text-sm cursor-pointer hover:text-gray-400">
          <Link href="/contactus">Need Help</Link>
        </span>
      </div>
    </div>
  );
};


export const MiddleHeader = () => {
  const { cart } = useCart(); // ✅ Get cart state from context
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0); // ✅ Calculate total cart items

  return (
    <div>
      <header className="text-gray-600 body-font bg-[#F0F2F3]">
        <div className="container mx-auto flex p-4 md:p-5 items-center justify-between">
          {/* Logo Section */}
          <a
            href="/"
            className="flex title-font font-medium items-center text-gray-900"
          >
            {/* Logo */}
            <img
              className="w-auto h-auto sm:w-[40px] sm:h-[40px]"
              src="/images/logo.png"
              alt="logo"
            />
            <span className="ml-2 text-2xl sm:text-3xl">Comforty</span>
          </a>

          {/* Navigation (Hidden for now, can be populated later) */}
          <nav className="hidden md:flex md:ml-auto md:mr-auto flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900"></a>
            <a className="mr-5 hover:text-gray-900"></a>
            <a className="mr-5 hover:text-gray-900"></a>
            <a className="mr-5 hover:text-gray-900"></a>
          </nav>

          {/* Cart Button with Dynamic Count */}
          <Link href="/cart" className="relative inline-flex items-center text-black bg-white border-0 py-1 px-3 focus:outline-none hover:bg-slate-200 rounded text-sm md:text-base">
            {/* Buy Icon */}
            <img
              className="w-[18px] h-[18px] md:w-[22px] md:h-[22px] mr-2"
              src="/images/Buy.png"
              alt="buy"
            />

            {/* Cart Text */}
            <span className="mr-1 md:mr-2">Cart</span>

            {/* Cart Count Badge (Only show when there are items) */}
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#398e95] text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </header>
    </div>
  );
};

export const LastHeader = () => {
  const [open, setOpen] = useState(false);
  const { isSignedIn } = useUser(); // ✅ Get auth state

  return (
    <div>
      {/* Last Header */}
      <header className="text-gray-600 body-font border-b hidden md:block">
        <div className="container mx-auto flex flex-wrap p-4 md:p-5 items-center justify-between">
          {/* Navigation Menu */}
          <ul className="hidden md:flex lg:w-2/5 flex-wrap items-center text-base">
            <li className="mr-5 hover:bg-slate-200 bg-[#edf8f987]">
              <Link href="/">Home</Link>
            </li>
            <li className="mr-5 hover:bg-slate-200 bg-[#edf8f987]">
              <Link href="/productpage">Shop</Link>
            </li>
            <li className="mr-5 hover:bg-slate-200 bg-[#edf8f987]">
              <Link href="/singleproduct">Product</Link>
            </li>
            <li className="mr-5 hover:bg-slate-200 bg-[#edf8f987]">
              <Link href="/pages">Pages</Link>
            </li>
            <li className="hover:bg-slate-200 bg-[#edf8f987]">
              <Link href="/aboutus">About</Link>
            </li>
          </ul>

          {/* Right Section: Contact Info + Auth Buttons */}
          <div className="lg:w-2/5 flex items-center justify-end gap-6">
            {/* Contact Section */}
            <button className="inline-flex items-center bg-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-sm md:text-base">
              Contact:
              <span className="ml-2">(808) 555-0111</span>
            </button>

            {/* 🔹 Show "Sign In" if not logged in */}
            {!isSignedIn ? (
              <SignInButton>
                <button className="bg-[#007580] text-white px-4 py-2 rounded-md shadow-md hover:bg-[#004d40] transition-all ease-in-out duration-200">
                  Sign In
                </button>
              </SignInButton>
            ) : (
              // 🔹 Show "Admin Panel" & "Sign Out" if logged in
              <div className="flex items-center gap-4">
                <Link
                  href="/admin"
                  className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition"
                >
                  Admin Panel
                </Link>

                {/* Clerk User Profile Button (Includes Sign Out) */}
                <UserButton afterSignOutUrl="/" />
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Separator Line for Small Screens */}
      <div className="md:hidden h-[30px] bg-white w-full"></div>

      {/* Floating Button for Mobile Menu */}
      <div className="fixed bottom-4 right-4 z-50 md:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button className="p-4 bg-black text-white rounded-full shadow-lg">
              <Menu size={24} />
            </button>
          </SheetTrigger>
        </Sheet>
      </div>
    </div>
  );
};
