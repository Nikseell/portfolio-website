import { type FC, useState } from 'react'
import WorkCard from '../WorkCard'
import { workData } from '../../data/work'
import { Accordion, AccordionItem, AccordionTrigger, AccordionPanel } from '../animate-ui/base/accordion'

const Work: FC = () => {
  const displayedWorks = workData.slice(0, 4)
  const additionalWorks = workData.slice(4)
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section
      id="work"
      className="text-white h-fit"
    >
      <div className="flex items-center justify-between pb-8">
        <div className="section-header">Work</div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
        {displayedWorks.map((work, index) => (
          <WorkCard
            key={index}
            title={work.title}
            description={work.description}
            tags={work.tags}
            link={work.link}
            codeLink={work.codeLink}
          />
        ))}
      </div>
      {additionalWorks.length > 0 && (
        <div className="mt-6 sm:mt-8 md:mt-10">
          <Accordion>
            <AccordionItem className="border-0 bg-transparent mb-0">
              <AccordionTrigger
                className="flex justify-center items-center px-4 py-2 rounded-full gap-1 border border-[#333333] bg-[#141414] hover:bg-[#242424] transition-all duration-300 cursor-pointer w-full group"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                <div className="flex items-center justify-center gap-1">
                  <p className="flex items-center justify-center opacity-60 group-hover:opacity-100 group-hover:text-white transition-all duration-300">
                    {isExpanded ? 'View more work' : 'Show less'}
                  </p>
                </div>
              </AccordionTrigger>
              <AccordionPanel className="bg-transparent border-0 p-0">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 pt-6">
                  {additionalWorks.map((work, index) => (
                    <WorkCard
                      key={index}
                      title={work.title}
                      description={work.description}
                      tags={work.tags}
                      link={work.link}
                      codeLink={work.codeLink}
                    />
                  ))}
                </div>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
      )}
    </section>
  )
}

export default Work
