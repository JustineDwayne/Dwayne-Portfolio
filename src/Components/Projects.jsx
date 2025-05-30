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
import ProjectCard from './ProjectCard';

const projects = [
    {
        id: 1,
        img: sl,
        name: 'Sense Leads Website',
        desc: 'A company website for Sense Leads Electronics',
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
        name: 'TravelGo',
        desc: 'A fligh and hotel booking website with API integration',
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
        <section className="relative flex-1 flex flex-col md:flex-row bg-gradient-to-b bg-black from-black to-zinc-950 md:p-10 bg-cover bg-center">
            <div className="flex flex-col justify-center max-w-4xl pt-4 px-10 md:max-w-none md:flex-1">
                <h2 className="text-white font-semibold text-[3rem] md:text-[5rem] mb-6">
                    projects --
                </h2>
                <h2 className='text-white text-lg font-bold mb-8'>here are some of the projects i've worked on</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    )
}
