import { type FC } from 'react'
import { experienceData } from '../../data/experience'

const Experience: FC = () => {
  const displayedExperience = experienceData.slice(0, 4)

  return (
    <section
      id="experience"
      className="text-white h-fit"
    >
      <div className="flex items-center justify-between pb-8">
        <div className="section-header">Experience</div>
      </div>
      <div className="space-y-4 sm:space-y-6">
        {displayedExperience.map((experience) => (
          <div
            key={experience.title}
            className="border border-[#333333] bg-[#141414] rounded-xl p-4 sm:p-6"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
              <div className="flex-1">
                <h2 className="text-lg sm:text-xl font-semibold text-[#DFDFDF]">{experience.title}</h2>
                <h3 className="text-base sm:text-lg text-[#8B5CF6] mt-1">{experience.company}</h3>
              </div>
              <div className="text-left sm:text-right mt-2 sm:mt-0 sm:ml-4">
                <p className="text-[#BFBFBF] text-sm">
                  {experience.startDate} - {experience.endDate}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
