import React from 'react';

export default function ProjectCard({ project }) {
    return (
        <div className="bg-zinc-900 rounded-2xl p-5 shadow-md hover:shadow-lg transition w-full max-w-md h-[500px] flex flex-col">
            {project.img && (
                <img
                    src={project.img}
                    alt={project.name}
                    className="rounded-xl mb-4 w-full object-cover h-48"
                />
            )}
            <div className="flex-1 flex flex-col">
                <h3 className="text-white text-2xl font-semibold mb-4">{project.name}</h3>
                <p className="text-gray-300 mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-3 mb-4">
                    {project.used.map((tech, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-1 text-gray-300 text-sm bg-zinc-800 px-2 py-1 rounded-lg"
                        >
                            {tech.icon}
                            <span>{tech.name}</span>
                        </div>
                    ))}
                </div>
                {/* Spacer to push the icons to the bottom only if needed */}
                <div className="mt-auto flex gap-4 pt-2">
                    {project.link.map((item, index) => (
                        <a
                            key={index}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-blue-400 text-2xl"
                        >
                            {item.icon}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
