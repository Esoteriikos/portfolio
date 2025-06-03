'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
} from '@headlessui/react';
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navLinks = [
    { name: 'About', path: '#about' },
    { name: 'Skills', path: '#skills' },
    { name: 'Experience', path: '#experience' },
    { name: 'Projects', path: '#projects' },
    { name: 'Education', path: '#education' },
    { name: 'Certificates', path: '#certificates' },
    { name: 'Awards', path: '#awards' },
    { name: 'Publications', path: '#publications' },
    { name: 'Testimonials', path: '#testimonials' },
    { name: 'Contact', path: '#contact' },
  ];

  const mainLinks = navLinks.slice(0, 5);
  const moreLinks = navLinks.slice(5);

  return (
    <nav className="bg-gray-950 text-white sticky top-0 z-50 shadow-xl">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-indigo-400 hover:text-indigo-300">
          Shubham C.
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {mainLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="hover:text-indigo-300 px-3 py-2 text-sm font-medium"
            >
              {link.name}
            </Link>
          ))}

          <Menu as="div" className="relative inline-block text-left">
            <MenuButton className="inline-flex items-center text-sm font-medium hover:text-indigo-300 transition focus:outline-none">
              More
              <ChevronDownIcon className="ml-1 h-5 w-5 transition-transform duration-200 ui-open:rotate-180" />
            </MenuButton>

            <MenuItems className="absolute right-0 mt-2 w-56 origin-top-right rounded-xl bg-gray-800/90 backdrop-blur-md shadow-lg ring-1 ring-black/20 focus:outline-none z-50">
              <div className="py-1">
                {moreLinks.map((link) => (
                  <MenuItem key={link.name}>
                    {({ active }) => (
                      <Link
                        href={link.path}
                        className={`block px-4 py-2 text-sm rounded-md ${
                          active ? 'bg-indigo-600 text-white' : 'text-gray-100'
                        }`}
                      >
                        {link.name}
                      </Link>
                    )}
                  </MenuItem>
                ))}
              </div>
            </MenuItems>
          </Menu>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white p-2 hover:bg-gray-700 rounded focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-700 px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:bg-gray-700 hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
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
