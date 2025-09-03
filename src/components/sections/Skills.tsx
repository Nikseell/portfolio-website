import React from 'react'
import Marquee from 'react-fast-marquee'

const Skills: React.FC = () => {
  const skills = [
    { name: 'Unity', icon: 'devicon-unity-original' },
    { name: 'C#', icon: 'devicon-csharp-plain colored' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
    { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
    { name: 'VS Code', icon: 'devicon-vscode-plain colored' },
    { name: 'Tailwindcss', icon: 'devicon-tailwindcss-plain colored' },
    { name: 'React', icon: 'devicon-react-original colored' },
    { name: 'HTML5', icon: 'devicon-html5-plain colored' },
    { name: 'CSS3', icon: 'devicon-css3-plain colored' },
    { name: 'Git', icon: 'devicon-git-plain colored' },
    { name: 'NestJS', icon: 'devicon-nestjs-plain colored' },
    { name: 'NodeJS', icon: 'devicon-nodejs-plain colored' },
    { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
  ]

  return (
    <section>
      <Marquee
        speed={80}
        gradient={true}
        gradientColor={'#101010'}
        className="overflow-hidden"
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-row items-center mx-8 opacity-60"
          >
            <i className={`${skill.icon} text-3xl text-white`}></i>
            <span className="text-sm md:text-base text-white ml-2 font-semibold">{skill.name}</span>
          </div>
        ))}
      </Marquee>
    </section>
  )
}

export default Skills
