import { type FC } from 'react'
import WorkCard from '../WorkCard'
import { workData } from '../../data/work'
import arrow from '../../assets/icons/arrow.svg'

const Work: FC = () => {
  const displayedWorks = workData.slice(0, 4)

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
      <button
        onClick={() => window.open('https://github.com/nikseell', '_blank')}
        className="flex justify-center items-center mt-6 sm:mt-8 md:mt-10 px-4 py-2 rounded-full gap-1 border border-[#333333] bg-[#141414] hover:bg-[#242424] hover:scale-105 transition-all duration-300 cursor-pointer w-full group"
      >
        <p className="flex items-center justify-center opacity-60 group-hover:opacity-100 group-hover:text-white transition-all duration-300">
          View more work
        </p>
        <img
          src={arrow}
          alt="arrow"
          className="w-7 h-7"
        />
      </button>
    </section>
  )
}

export default Work
