import { type FC } from 'react'
import ProjectCard from '../ProjectCard'
import { projectsData } from '../../data/projects'
import arrow from '../../assets/icons/arrow.svg'

const Projects: FC = () => {
  const displayedProjects = projectsData.slice(0, 4)

  return (
    <div className="text-white">
      <div className="flex items-center justify-between pb-8">
        <div className="section-header">Projects</div>
      </div>
      <div className="grid grid-cols-2 gap-8">
        {displayedProjects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            tags={project.tags}
            link={project.link}
            codeLink={project.codeLink}
          />
        ))}
      </div>
      <button
        onClick={() => window.open('https://github.com', '_blank')}
        className="flex justify-center items-center mt-10 p-3 rounded-full gap-1 border border-[#333333] bg-[#141414] hover:bg-[#242424] hover:scale-105 transition-all duration-300 cursor-pointer w-full group"
      >
        <p className="flex items-center justify-center opacity-60 group-hover:opacity-100 group-hover:text-white transition-all duration-300">
          View more projects
        </p>
        <img
          src={arrow}
          alt="arrow"
          className="w-7 h-7"
        />
      </button>
    </div>
  )
}

export default Projects
