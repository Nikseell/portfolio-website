import { type FC } from "react";
import SectionTitle from "../common/SectionTitle";
import { experienceData } from "../../data/experience";

const Experience: FC = () => {
  const displayedExperience = experienceData.slice(0, 4);

  return (
    <section className="text-white">
      <SectionTitle>Experience</SectionTitle>
      {displayedExperience.map((experience) => (
        <div key={experience.title} className="mb-10">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl">{experience.title}</h1>
            <div className="flex flex-col justify-end items-end gap-2">
              <h1 className="text-xl font-semibold">{experience.company}</h1>
              <p>
                {experience.startDate} - {experience.endDate}
              </p>
            </div>
          </div>
          <div className="flex-1 h-0.5 opacity-50 bg-white mt-2"></div>
        </div>
      ))}
    </section>
  );
};

export default Experience;
