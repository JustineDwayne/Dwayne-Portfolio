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
    FaBootstrap,
    FaLaravel
} from 'react-icons/fa';

import { RiTailwindCssFill, RiSupabaseFill } from "react-icons/ri";

import { SiVite } from "react-icons/si";

import sl from '../Assets/senseleads.jpg'
import dr from '../Assets/dripstr.jpg'
import tg from '../Assets/travelgo.jpg'
import wr from '../Assets/wraiter.jpg'
import cr from '../Assets/crud.jpg'

import ProjectCard from './ProjectCard';
import { FaV } from 'react-icons/fa6';

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
                name: 'Tailwind CSS',
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
                name: 'Tailwind CSS',
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
        ],
        link: [
            {
                icon: <FaGithub />,
                link: 'https://github.com/PulgasDAce/TravelGo'

            }
        ]
    },

    {
        id: 4,
        img: wr,
        name: 'wrAIter',
        desc: 'Content generator through Reddit posts links using DeepSeek API.',
        used: [
            {
                name: 'React',
                icon: <FaReact />,
            },

            {
                name: 'Tailwind CSS',
                icon: <RiTailwindCssFill />
            },

            {
                name: 'Node.js',
                icon: <FaNodeJs />
            },

            {
                name: 'Figma',
                icon: <FaFigma />
            }
        ],
        link: [

            {
                icon: <FaGithub />,
                link: 'https://github.com/JustineDwayne/wraiter'
            },
            {
                icon: <FaLink />,
                link: 'https://wraiter-omega.vercel.app/home'
            }
        ]
    },
        {
        id: 5,
        img: cr,
        name: 'Employee CRUD',
        desc: 'Employee Management Web Application with CRUD Functionalities using Laravel + Vite',
        used: [
            {
                name: 'Laravel',
                icon: <FaLaravel />,
            },

            {
                name: 'Bootstrap',
                icon: <FaBootstrap />
            },

            {
                name: 'Vite',
                icon: <SiVite />
            }
        ],
        link: [

            {
                icon: <FaGithub />,
                link: 'https://github.com/JustineDwayne/employee_crud'
            },
        ]
    }
]


export default function Projects() {
    return (
        <section className="relative flex-1 flex flex-col md:flex-row bg-gradient-to-b bg-black from-black to-zinc-800 px-4 md:px-10 py-10 bg-cover bg-center">
            <div className="flex flex-col justify-center max-w-4xl pt-2 pb-2 px-0 md:max-w-none md:flex-1">
                <h2 className="text-white font-semibold text-[3rem] md:text-[5rem] mb-6">
                    projects –
                </h2>
                <h2 className='text-white text-xl font-bold mb-8'>
                    here are some of the personal and group projects that i've worked on
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
                    {projects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

            </div>
        </section>
    );

}
