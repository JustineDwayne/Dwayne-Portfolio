import React from 'react';

export default function About() {
    return (
        <section id='about' className="relative flex-1 flex flex-col items-center justify-center bg-cover bg-center border-2 bg-zinc-950 border-red-500"
            style={{
                backgroundImage: `linear-gradient(to bottom, #010203, #000000)`
            }}>
        <div className="flex flex-col items-center justify-center h-full px-4 my-4 text-center pt-8">
            <h2 className="text-white self-start font-semibold text-2xl">
                about me
            </h2>
        </div>
        </section>
    );
}
