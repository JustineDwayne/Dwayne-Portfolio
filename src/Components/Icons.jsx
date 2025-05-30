import React from 'react';
import {
  FaReact,
  FaJsSquare,
  FaPython,
  FaCss3Alt,
  FaHtml5,
  FaGitAlt,
  FaNodeJs,
  FaPhp,
  FaFigma,
} from 'react-icons/fa';

import { RiTailwindCssFill, RiSupabaseFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";

const icons = [
  { icon: <FaReact />, name: 'React' },
  { icon: <FaJsSquare />, name: 'JavaScript' },
  { icon: <FaPython />, name: 'Python' },
  { icon: <FaCss3Alt />, name: 'CSS3' },
  { icon: <FaHtml5 />, name: 'HTML5' },
  { icon: <FaGitAlt />, name: 'Git' },
  { icon: <FaNodeJs />, name: 'Node.js' },
  { icon: <RiTailwindCssFill />, name: 'TailwindCSS' },
  { icon: <RiSupabaseFill />, name: 'Supabase' },
  { icon: <FaPhp />, name: 'PHP' },
  { icon: <VscVscode />, name: 'VSCode' },
  { icon: <FaFigma />, name: 'Figma' },
];

export default function Icons() {
  return (
    <section className="relative flex-1 flex flex-col md:flex-col bg-gradient-to-b from-black to-zinc-950 py-10 px-10 md:pt-8 bg-cover bg-center">
      <h2 className="text-white text-[5rem] font-bold mb-8 text-center">tech stacks</h2>
      <h2 className="text-white text-3xl font-bold mb-8 text-center">Here are some of the programming languages and technologies I've worked with including but not limited to:</h2>
      <div className="flex flex-wrap justify-center gap-6 pb-10">
        {icons.map(({ icon, name }, index) => (
          <div
            key={index}
            className="bg-zinc-900 p-6 rounded-2xl shadow-md hover:shadow-lg hover:bg-zinc-800 transition duration-300 flex flex-col items-center justify-center w-28 h-28"
          >
            <div className="text-white text-4xl mb-2">{icon}</div>
            <span className="text-sm text-zinc-300">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
