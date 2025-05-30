import React from 'react'
import {
    FaReact,
    FaJsSquare,
    FaCss3Alt,
    FaHtml5,
    FaNodeJs,
    FaFigma,
    FaGithub,
    FaLink,
    FaBootstrap
} from 'react-icons/fa';

import { RiTailwindCssFill, RiSupabaseFill } from "react-icons/ri";

import sl from '../Assets/senseleads.jpg'
import dr from '../Assets/dripstr.jpg'
import tg from '../Assets/travelgo.jpg'
import ProjectCard from './ProjectCard';

const projects = [
    {
        id: 1,
        img: sl,
        name: 'Sense Leads Website',
        desc: "A company website that I've worked on as an intern for Sense Leads Electronics and Construction Corp.",
        used: [
            {
                name: 'React',
                icon: <FaReact />,
            },
            {
                name: 'TailwindCSS',
                icon: <RiTailwindCssFill />
            },
            {
                name: 'Figma',
                icon: <FaFigma />
            }
        ],
        link: [
            {
                icon: <FaLink />,
                link: 'https://senseleads.vercel.app'
            },
            {
                icon: <FaGithub />,
                link: 'https://github.com/JustineDwayne/senseleads'
            }
        ]
    },

    {
        id: 2,
        img: dr,
        name: 'Dripstr',
        desc: 'An Ecommerce website with personal 3D avatar models for wearable visualization.',
        used: [
            {
                name: 'React',
                icon: <FaReact />,
            },
            {
                name: 'TailwindCSS',
                icon: <RiTailwindCssFill />
            },
            {
                name: 'Supabase',
                icon: <RiSupabaseFill />
            },
            {
                name: 'Figma',
                icon: <FaFigma />
            }
        ],
        link: [
            {
                icon: <FaLink />,
                link: 'https://dripstr-web.netlify.app'
            },
            {
                icon: <FaGithub />,
                link: 'https://github.com/Jhonjhorie/DRIPSTR_WEB'
            }
        ]
    },

    {
        id: 3,
        img: tg,
        name: 'TravelGo',
        desc: 'A flight and hotel booking website with API integration.',
        used: [
            {
                name: 'HTML',
                icon: <FaHtml5 />,
            },
            {
                name: 'CSS',
                icon: <FaCss3Alt />
            },
            {
                name: 'Javascript',
                icon: <FaJsSquare />
            },
            {
                name: 'Node.js',
                icon: <FaNodeJs />
            },
            {
                name: 'Bootstrap',
                icon: <FaBootstrap />
            },
            {
                name: 'Figma',
                icon: <FaFigma />
            }
        ],
        link: [
            {
                icon: <FaGithub />,
                link: 'https://github.com/PulgasDAce/TravelGo'

            }
        ]
    }

]


export default function Projects() {
    return (
        <section className="relative flex-1 flex flex-col md:flex-row bg-gradient-to-b bg-black from-black to-zinc-800 md:p-10 bg-cover bg-center">
            <div className="flex flex-col justify-center max-w-4xl pt-2 pb-2 px-0 md:max-w-none md:flex-1">
                <h2 className="text-white font-semibold text-[3rem] md:text-[5rem] mb-6">
                    projects –
                </h2>
                <h2 className='text-white text-xl font-bold mb-8'>here are some of the personal and group projects that i've worked on</h2>
                <div className="flex flex-col items-center md:flex-row md:flex-wrap md:justify-center gap-8">
                    {projects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    )
}
