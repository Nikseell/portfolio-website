import { type FC } from "react";
import Star from "../../assets/Star.svg";
import ProjectCard from "../ProjectCard";

const Projects: FC = () => {
  const projectData = [
    {
      title: "Minimal Portfolio Template",
      description:
        "Ready-to-use minimal portfolio template - just add your content and deploy",
      tags: ["TEMPLATE", "PORTFOLIO"],
    },
    {
      title: "GitHub Traffic Frontend",
      description:
        "React + TypeScript dashboard for visualizing GitHub repository traffic data",
      tags: ["REACT", "TYPESCRIPT"],
    },
    {
      title: "GitHub Traffic Backend",
      description:
        "NestJS API for fetching and storing GitHub repository traffic data",
      tags: ["NESTJS", "TYPESCRIPT"],
    },
    {
      title: "Tic-Tac-Toe",
      description: "2D Tic Tac Toe implementation using Unity Engine and C#",
      tags: ["UNITY", "C#"],
    },
  ];

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
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            tags={project.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
