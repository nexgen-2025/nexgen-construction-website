"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="w-full sticky top-0 z-50 bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-[#C01920]">
        NextGen Constructions
      </div>

      <ul className="hidden md:flex gap-8">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`hover:text-[#C01920] ${
                pathname === link.href
                  ? "text-[#C01920] font-bold"
                  : "text-gray-700"
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? "X" : "☰"}</button>
      </div>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white flex flex-col items-center gap-6 py-6 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`hover:text-[#C01920] ${
                pathname === link.href
                  ? "text-[#C01920] font-bold"
                  : "text-gray-700"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
