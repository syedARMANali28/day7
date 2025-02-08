"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const FloatingButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50 md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button className="p-4 bg-black text-white rounded-full shadow-lg">
            <Menu size={24} />
          </button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[75%] sm:w-[60%] p-6">
          <nav className="flex flex-col space-y-4">
            <a href="/" className="text-lg font-medium text-white">Home</a>
            <a href="/productpage" className="text-lg font-medium text-white">Shop</a>
            <a href="/singleproduct" className="text-lg font-medium text-white">Product</a>
            <a href="/pages" className="text-lg font-medium text-white">Pages</a>
            <a href="/cart" className="text-lg font-medium text-white">Cart</a>
            <a href="/aboutus" className="text-lg font-medium text-white">About us</a>
            <a href="/faq" className="text-lg font-medium text-white">FAQ</a>
            <a href="/contactus" className="text-lg font-medium text-white">Contact us</a>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default FloatingButton;
