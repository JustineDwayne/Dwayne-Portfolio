import React from 'react';
import ch from '../Assets/character.png';
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function About() {
    return (
        <section
            className="relative flex-1 flex flex-col md:flex-row bg-gradient-to-b bg-black from-black to-zinc-950 md:p-10 bg-cover bg-center"
        >

            <div className="flex flex-col justify-center max-w-4xl pt-8 px-10 md:max-w-none md:flex-1">
                <h2 className="text-white font-semibold text-[3rem] md:text-[5rem] mb-6">
                    about me
                </h2>

                <p className="text-white font-bold text-xl md:text-2xl leading-relaxed max-w-xl md:max-w-none mb-6">
                    I’m <strong>Justine Dwayne</strong>, an aspiring web developer and software engineer with a passion for creating user-centric UI/UX designs and building seamless component functionalities. This website serves as a showcase of my skills and dedication to crafting efficient, elegant web experiences.
                </p>

                <div className="flex items-center justify-center space-x-6">
                    <a
                        href="https://github.com/JustineDwayne"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        <FaGithub className="text-white text-[3rem] hover:text-gray-300 transition-colors duration-200" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/justine-dwayne-calma-65407a324/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin className="text-white text-[3rem] hover:text-gray-300 transition-colors duration-200" />
                    </a>
                </div>
            </div>



            {/* Image on right side */}
            <div className="md:mt-0 md:ml-10 flex justify-center md:justify-end md:flex-1">
                <img
                    src={ch}
                    alt="Character"
                    className="relative md:top-[2.5rem] top-0 md:w-72 lg:w-96 w-full max-w-full object-cover"
                />
            </div>
        </section>
    );
}
