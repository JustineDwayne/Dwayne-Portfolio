import React from 'react';
import ch from '../Assets/character.png';

export default function About() {
    return (
        <section
            id="about"
            className="relative flex-1 flex flex-col md:flex-row bg-gradient-to-b from-black to-zinc-950 md:p-10 border-red-500 border-2 bg-cover bg-center"
        >
            <div className="flex flex-col justify-center max-w-4xl pt-10 px-10 pb-6 md:max-w-none md:flex-1">
                <h2 className="text-white font-semibold text-[3rem] md:text-[5rem] mb-4 md:mb-6">
                    about
                </h2>

                <p className="text-white font-bold text-xl md:text-2xl leading-relaxed max-w-xl md:max-w-none">
                    I’m <strong>Justine Dwayne</strong>, an aspiring web developer and software engineer with a passion for creating user-centric UI/UX designs and building seamless component functionalities. This website serves as a showcase of my skills and dedication to crafting efficient, elegant web experiences.
                </p>
            </div>


            {/* Image on right side */}
            <div className="md:mt-0 md:ml-10 flex justify-center md:justify-end md:flex-1">
                <img
                    src={ch}
                    alt="Character"
                    className="relative md:top-[2.5rem] top-0 md:w-72 lg:w-96 object-cover"
                />

            </div>
        </section>
    );
}
