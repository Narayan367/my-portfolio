
// import React from 'react';

// const SkillsChart = () => {
//   const skills = [
//     { category: 'Frontend Development', skills: [{ name: 'HTML', level: 80 }, { name: 'CSS', level: 50 }, { name: 'JavaScript', level: 60 } ,{ name: 'React', level: 65 }, {name: 'ASP.NET MVC' , level:70 } ] },
//     { category: 'Backend Development', skills: [{ name: 'Web API', level: 50 }, { name: 'Fluent API', level: 60 }, { name: 'Entity Frameword', level: 60 }, { name: 'LINQ', level: 70 }] , experience:1},
//     { category: 'Database', skills: [{ name: 'MySQL', level: 55 }, { name: 'PostgreSqL', level: 40 }]}
//   ];

//   return (
//     <section id= "skills" className='h-full '>
//     <h1 className="my-4 text-center font-bold text-4xl">
//     My Skills
//     <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
    
//   </h1>
//     <div className="p-6 space-y-4 md:flex md:space-x-16 rounded md:space-y-0 ">
//       {skills.map((skillCategory, i) => (
//         <div key={i} className=" space-y-2 md:w-1/3 transform transition duration-500 hover:scale-105 hover:shadow-lg px-10 py-4 hover:bg-gray-50 dark:hover:bg-gray-700 rounded">
//           <h2 className="text-lg font-bold">{skillCategory.category}
//           </h2>
//           {skillCategory.skills.map((skill, j) => (
//             <div key={j} className="relative pt-1">
//               <p className="text-lx">{skill.name}</p>
//               <div className="overflow-hidden h-1 text-xs flex rounded bg-green-200 w-3/4">
//                 <div style={{ width: `${skill.level}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-700"></div>
//               </div>
//               <p className="text-sm absolute top-0 right-0">{skill.level}%</p>
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//     </section>
//   );
// };

// export default SkillsChart;

// @flow strict

import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import Marquee from "react-fast-marquee";

function Skills() {
  return (
    <div id="skills" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Skills
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="w-full my-12">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.map((skill, id) => (
            <div className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
              key={id}>
              <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                <div className="flex -translate-y-[1px] justify-center">
                  <div className="w-3/4">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 p-6">
                  <div className="h-8 sm:h-10">
                    <Image
                      src={skillsImage(skill)?.src}
                      alt={skill}
                      width={40}
                      height={40}
                      className="h-full w-auto rounded-lg"
                    />
                  </div>
                  <p className="text-white text-sm sm:text-lg">
                    {skill}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Skills;