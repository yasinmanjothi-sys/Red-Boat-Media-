"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="w-full p-6 flex justify-between items-center fixed top-0 z-50 bg-transparent transition-all duration-300 pointer-events-auto">
            <Link href="/" className="flex items-center gap-2">
                <Image src="/logo-v2.png" alt="Red Boat Media" width={160} height={160} className="w-32 md:w-40 h-auto" />
            </Link>
            <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-gray-200">
                <Link href="/services" className="hover:text-[#FF512F] transition-colors">Services</Link>
                <Link href="/work" className="hover:text-[#FF512F] transition-colors">Work</Link>
                <Link href="/contact" className="hover:text-[#FF512F] transition-colors">Contact</Link>
            </div>
            <button className="bg-transparent border border-white/20 text-white px-6 py-2 rounded-full font-sans text-sm hover:bg-white/10 transition-colors">
                <a href="https://manage.redboatmedia.com" target="_blank" rel="noopener noreferrer">Client Login</a>
            </button>
        </nav>
    );
}
