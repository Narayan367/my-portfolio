import React from "react"



const AboutSection = () => {
  return (
    <section id="about" >
      <div>
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded animate-pulse"></hr>
        </h1>
        <div className="flex md:flex-row-reverse justify-between flex-col gap-4">
         
          <div className=" rounded-lg  text-lg font-normal  p-8 dark:bg-gray-800 bg-white    hover:shadow-lg">
            <p>
            I am a passionate software engineer who always welcomes big opportunities and never stops growing. Currently, I am pursuing my degree in computer science. I have been learning and working on various web development projects for the past two years, specializing in ASP.NET development.
            </p>
            <p className="mt-4">
            In addition, I am a strong problem-solver and enjoy the challenge of finding creative solutions to complex problems. I am always looking for new ways to improve my skills and stay up-to-date with the latest technologies and trends in the field.
            </p>
            <p className="mt-4 ">
            Overall, my goal as a developer is to use my skills and knowledge to create meaningful and impactful projects that can help improve people's lives. I am excited to continue learning and growing as a developer, and I am confident that my passion and dedication will lead me to great success in the future.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
