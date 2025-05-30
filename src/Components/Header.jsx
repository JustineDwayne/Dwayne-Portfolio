import React, { useState } from 'react';
import logo from '../Assets/circle.png';
import { FaGripLines, FaTimes } from "react-icons/fa";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-zinc-950 sticky top-0 z-20 px-6 py-3 flex items-center justify-between shadow-md">
            <div className="flex items-center flex-row">
                <a href='#home' className='flex flex-row'>
                    <img src={logo} alt="logo" className="w-12 h-12 mr-4" /> <p className='text-white font-bold text-2xl pt-2'>jdc</p>
                </a>
            </div>

            {/* Desktop nav */}
            <nav className="hidden md:block">
                <ul className="flex space-x-8 text-white font-medium text-lg">
                    <li>
                        <a href="#about" className="hover:text-gray-300 transition-colors duration-200">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#stacks" className="hover:text-gray-300 transition-colors duration-200">
                            Stacks
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className="hover:text-gray-300 transition-colors duration-200">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:text-gray-300 transition-colors duration-200">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>

            {/* Hamburger button */}
            <button
                className="md:hidden text-white focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
            >
                {isOpen ? (
                    <FaTimes className="w-8 h-8 text-white" />
                ) : (
                    <FaGripLines className="w-8 h-8 text-white" />
                )}
            </button>

            {/* Mobile menu */}
            {isOpen && (
                <nav className="absolute top-full left-0 w-full bg-zinc-900 shadow-md md:hidden">
                    <ul className="flex flex-col items-center space-y-4 py-4 text-white font-medium text-lg">
                        <li>
                            <a
                                href="#about"
                                className="hover:text-gray-300 transition-colors duration-200"
                                onClick={() => setIsOpen(false)}
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#stacks"
                                className="hover:text-gray-300 transition-colors duration-200"
                                onClick={() => setIsOpen(false)}>
                                Stacks
                            </a>
                        </li>
                        <li>
                            <a
                                href="#projects"
                                className="hover:text-gray-300 transition-colors duration-200"
                                onClick={() => setIsOpen(false)}
                            >
                                Projects
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="hover:text-gray-300 transition-colors duration-200"
                                onClick={() => setIsOpen(false)}
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
}

export default Header;
