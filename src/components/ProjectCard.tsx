import { type FC } from "react";
import { type ProjectCardProps } from "../types/project";

const ProjectCard: FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  link,
  codeLink,
  imageUrl,
}) => {
  return (
    <div className="rounded-2xl p-6 relative overflow-hidden aspect-[5/3] bg-[#cbcbcb7a] h-full">
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-20 rounded-full blur-3xl bg-[#FF804A] opacity-60" />
      <div className="relative z-10 flex h-full">
        <div className="w-1/2 pr-6 flex items-center justify-center">
          <div className="w-full h-full aspect-[4/3] bg-white rounded-xl flex items-center justify-center">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="text-gray-500 text-sm">Image placeholder</div>
            )}
          </div>
        </div>

        <div className="w-1/2 flex flex-col justify-between h-full">
          <div className="space-y-4">
            <h2 className="text-2xl lg:text-3xl font-bold text-white leading-tight">
              {title}
            </h2>

            <p className="text-white/90 text-sm lg:text-base leading-relaxed">
              {description}
            </p>

            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 lg:px-4 lg:py-2 backdrop-blur-sm border border-white rounded-full text-xs lg:text-sm text-white font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            {link && (
              <button
                onClick={() => window.open(link, "_blank")}
                className="px-4 py-2 lg:px-6 lg:py-3 bg-white hover:bg-white/90 text-gray-900 rounded-full text-sm lg:text-base font-medium transition-all duration-200 shadow-lg"
              >
                View project
              </button>
            )}
            {codeLink && (
              <button
                onClick={() => window.open(codeLink, "_blank")}
                className="px-4 py-2 lg:px-6 lg:py-3 bg-white hover:bg-white/90 text-gray-900 rounded-full text-sm lg:text-base font-medium transition-all duration-200 shadow-lg"
              >
                View code
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
