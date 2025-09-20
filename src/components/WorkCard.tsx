import { type FC } from 'react'
import { type WorkCardProps } from '../types/work'
import IconButton from './common/IconButton'
import arrow from '../assets/icons/arrow.svg'
import development from '../assets/icons/development.svg'

const WorkCard: FC<WorkCardProps> = ({ title, tags, link, codeLink }) => {
  return (
    <div className="flex flex-col overflow-hidden aspect-[3/3] sm:aspect-[4/3] md:aspect-[3/3] lg:aspect-[4/3] h-full">
      <div className="flex w-full h-full bg-[#191919] rounded-2xl"></div>

      <div className="flex justify-between items-center mt-4">
        <div className="flex flex-col">
          <p className="text-2xl font-semibold opacity-90">{title}</p>
          <p className="opacity-60 text-sm">{tags.join(', ')}</p>
        </div>
        <div className="flex justify-end space-x-2 items-center">
          {link && (
            <IconButton
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={arrow}
                alt="view project"
                className="w-7 h-7"
              />
            </IconButton>
          )}

          {codeLink && (
            <IconButton
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={development}
                alt="view code"
                className="w-7 h-7"
              />
            </IconButton>
          )}
        </div>
      </div>
    </div>
  )
}

export default WorkCard
