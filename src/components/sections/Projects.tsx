import { type FC } from 'react'
import SectionTitle from '../common/SectionTitle'
import ProjectCard from '../ProjectCard'
import { projectsData } from '../../data/projects'

const Projects: FC = () => {
  const displayedProjects = projectsData.slice(0, 4)

  return (
    <div className="text-white">
      <div className="flex items-center justify-between">
        <SectionTitle>Projects</SectionTitle>
        <button className="text-white/70 hover:text-white underline text-sm transition-colors">view all</button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
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
    </div>
  )
}

export default Projects
