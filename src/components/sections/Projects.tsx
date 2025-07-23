import { type FC } from "react";
import Star from "../../assets/Star.svg";
import ProjectCard from "../ProjectCard";
import { projectsData } from "../../data/projects";

const Projects: FC = () => {
  const displayedProjects = projectsData.slice(0, 4);

  return (
    <div className="text-white py-12">
      <div className="flex items-center justify-between mb-12">
        <h1 className="flex gap-2 text-4xl font-bold">
          <img src={Star} alt="Star" className="w-10 h-10" />
          Projects
        </h1>
        <button className="text-white/70 hover:text-white underline text-sm transition-colors">
          view all
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
  );
};

export default Projects;
