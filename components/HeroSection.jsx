"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,

} from "react-icons/ai"

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-32 md:flex-row md:space-x-4 md:text-left space-y-4">
        <div className=" md:w-1/2">
          <Image
            src="/headshot.png"
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-4/5">
          <div className="text-2xl sm:mt-4 ">Hello world!</div>
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-5xl">I&#39;m <span className="text-teal-600">Narayan Dhungel</span></h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m a{" "}
            <span className="font-semibold ">
              Full Stack .NET Developer{" "}
            </span>

          </p>
          <Link to = "contact" 
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-teal-600 rounded-lg group bg-gradient-to-br from-green-400 to-teal-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 text-xl">
              Contact me
            </span>
          </button>
          </Link>
          <div className="flex flex-row items-center  space-x-2 mt-4 justify-center md:justify-start">
            <a href="https://github.com/Narayan367" rel="noreferrer" target="_blank">
              <AiOutlineGithub
                className="hover:-translate-y-1 transition-transform cursor-pointer text-teal-600 dark:text-neutral-100"
                size={40}
              />
            </a>
            <a
              href="https://twitter.com/NarayanDhungel5"
              rel="noreferrer"
              target="_blank"
            >
              <AiOutlineTwitter
                className="hover:-translate-y-1 transition-transform cursor-pointer text-teal-600 dark:text-neutral-100"
                size={40}
              />
            </a>

            <a
              href="https://www.linkedin.com/in/narayan-dhungel-169755278/"
              rel="noreferrer"
              target="_blank"
            >
              <AiOutlineLinkedin
                className="hover:-translate-y-1 transition-transform cursor-pointer text-teal-600 dark:text-neutral-100"
                size={40}
              />
            </a>

          </div>
        </div>
      </div>

      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>

    </section>
  )
}

export default HeroSection
