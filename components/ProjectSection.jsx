import React from "react"
import Image from "next/image"
import Link from "next/link"

import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Google Clone ",
    description:
      "A project I created while learning React and TailwindCSS includes features such as a search bar, displaying search results, pagination, responsive layout etc.",
    image: "/project.jpg",
    github: "https://github.com/Narayan367/Google-search-clone",
    link: "https://nrd-google-search.netlify.app/",
  },
  
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className=" text-center font-bold text-4xl ">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              
                <div className="flex flex-col  animate-slideUp CubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-lg leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection