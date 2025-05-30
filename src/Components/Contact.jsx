import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone, FaFile } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-zinc-950 text-gray-300 px-6 py-10 overflow-x-hidden">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10 w-full">

                {/* Left: Contact Info */}
                <div className="flex-1 min-w-0">
                    <h3 className="text-white text-2xl font-bold mb-4">Let's Connect</h3>
                    <p className="mb-4 text-gray-400 break-words">
                        I’m open to collaborations, freelance projects, or just a friendly chat about tech.
                    </p>
                    <div className="flex items-start gap-3 text-gray-300 flex-wrap break-all">
                        <FaEnvelope className="text-lg mt-1" />
                        <a
                            href="mailto:calma.justinedwayne.11232003@gmail.com"
                            className="break-all"
                        >
                            calma.justinedwayne.11232003@gmail.com
                        </a>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300 pt-2">
                        <FaPhone className="text-lg" />
                        <span>+63 917 645 7016</span>
                    </div>
                </div>

                {/* Right: Social Icons & Resume */}
                <div className="flex flex-col items-center w-full md:w-auto">
                    <div className="flex flex-col items-center mb-6">
                        <h4 className="text-white text-xl font-semibold mb-4">Follow me</h4>
                        <div className="flex gap-6 text-2xl items-center justify-center">
                            <a
                                href="https://github.com/yourgithub"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-400"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href="https://linkedin.com/in/yourlinkedin"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-400"
                            >
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <h4 className="text-white text-xl font-semibold mb-4">Hire Me</h4>
                        <a href="/JDCalma - Resume 2025.pdf" download className="w-full">
                            <button className="flex items-center justify-center bg-zinc-900 hover:bg-zinc-800 text-white py-3 px-4 w-full md:w-[12rem] rounded-md transition">
                                <FaFile className="mr-2 text-lg" />
                                <span>Download Resume</span>
                            </button>
                        </a>
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
