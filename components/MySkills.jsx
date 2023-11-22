
import React from 'react';

const SkillsChart = () => {
  const skills = [
    { category: 'Frontend Development', skills: [{ name: 'HTML', level: 80 }, { name: 'CSS', level: 50 }, { name: 'JavaScript', level: 70 } ,{ name: 'TailwindCSS', level: 60 },{ name: 'React', level: 85 } ] },
    { category: 'Backend Development', skills: [{ name: 'Node', level: 40 }, { name: 'Express', level: 60 }, { name: 'SQL', level: 80 }, { name: 'PHP', level: 70 }] , experience:1},
    { category: 'QA Engineer', skills: [{ name: 'Postman', level: 30 }, { name: 'Selenium', level: 40 }, { name: 'Manual Testing', level:25 }, { name: 'Jira', level: 35 }],  },
  ];

  return (
    <section id= "skills" className='h-full'>
    <h1 className="my-4 text-center font-bold text-4xl">
    My Skills
    <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
    
  </h1>
    <div className="p-6 space-y-4 md:flex md:space-x-16 rounded md:space-y-0 ">
      {skills.map((skillCategory, i) => (
        <div key={i} className=" space-y-2 md:w-1/3 transform transition duration-500 hover:scale-105 hover:shadow-lg px-10 py-4 hover:bg-gray-50 dark:hover:bg-gray-700 rounded">
          <h2 className="text-lg font-bold">{skillCategory.category}
          </h2>
          {skillCategory.skills.map((skill, j) => (
            <div key={j} className="relative pt-1">
              <p className="text-lx">{skill.name}</p>
              <div className="overflow-hidden h-1 text-xs flex rounded bg-green-200 w-3/4">
                <div style={{ width: `${skill.level}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-700"></div>
              </div>
              <p className="text-sm absolute top-0 right-0">{skill.level}%</p>
            </div>
          ))}
        </div>
      ))}
    </div>
    </section>
  );
};

export default SkillsChart;

