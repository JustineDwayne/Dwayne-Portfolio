import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaPhone } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-zinc-950 text-gray-300 px-6 py-10">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">

                {/* Left: Contact Info */}
                <div className="flex-1">
                    <h3 className="text-white text-2xl font-bold mb-4">Let's Connect</h3>
                    <p className="mb-4 text-gray-400">
                        I’m open to collaborations, freelance projects, or just a friendly chat about tech.
                    </p>
                    <div className="flex items-center gap-3 text-gray-300">
                        <FaEnvelope className="text-lg" />
                        <a href="mailto:your.email@example.com" className="hover:text-blue-400 transition">
                            your.email@example.com
                        </a>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300 pt-2">
                        <FaPhone className="text-lg" />
                        <a href="mailto:your.email@example.com" className="hover:text-blue-400 transition">
                            your.email@example.com
                        </a>
                    </div>
                </div>

                {/* Right: Social Icons */}
                <div className='flex flex-col '>
                    <div className="flex flex-col items-center mb-4">
                        <h4 className="text-white text-xl font-semibold mb-4">Follow me</h4>
                        <div className="flex gap-6 text-2xl items-center justify-center">
                            <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                                <FaGithub />
                            </a>
                            <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <h4 className="text-white text-xl font-semibold mb-4">Hire me</h4>

                    </div>
                </div>
            </div>

            {/* Bottom: Copyright */}
            <div className="border-t border-zinc-800 mt-10 pt-6 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} Justine Dwayne. All rights reserved.
            </div>
        </footer>
    );
}
