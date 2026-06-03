"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600">
              <Image
                src="/images/logo.jpeg"
                alt="Aakasha Automations Logo"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
                priority
            />
            </div>

            <span className="text-lg font-bold text-slate-800 sm:text-xl">
              Aakasha
              <span className="text-indigo-600">Automations</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden items-center gap-8 md:flex">
            <Link href="/" className="text-sm font-medium text-slate-600 transition hover:text-indigo-600">Home
              </Link>
              <Link href="/about-us" className="text-sm font-medium text-slate-600 transition hover:text-indigo-600">About
              </Link>
            
            <Link href="/our-services" className="text-sm font-medium text-slate-600 transition hover:text-indigo-600">Services
              </Link>
              <Link href="/contact-us" className="text-sm font-medium text-slate-600 transition hover:text-indigo-600">Contact
              </Link>
          </nav>

          {/* Desktop Button */}
          <div className="hidden md:block">
             <Link href="/contact-us">
            <Button className=" cursor-pointer rounded-full bg-indigo-600 px-5 text-white hover:bg-indigo-700">
              Book Consultation
            </Button>
             </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="rounded-md p-2 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-6 w-6 text-slate-700" />
            ) : (
              <Menu className="h-6 w-6 text-slate-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="border-t border-slate-200 py-4 md:hidden">
            <nav className="flex flex-col gap-4">
              <Link href="/" className="text-sm font-medium text-slate-600 transition hover:text-indigo-600">Home
              </Link>
              <Link href="/about-us" className="text-sm font-medium text-slate-600 transition hover:text-indigo-600">About
              </Link>
            
            <Link href="/our-services" className="text-sm font-medium text-slate-600 transition hover:text-indigo-600">Services
              </Link>
              <Link href="/contact-us" className="text-sm font-medium text-slate-600 transition hover:text-indigo-600">Contact
              </Link>
              <Link href="/contact-us">
              <Button className="mt-2 w-full rounded-full bg-indigo-600 text-white hover:bg-indigo-700">
                Book Consultation
              </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}