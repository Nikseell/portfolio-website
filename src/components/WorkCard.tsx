import { type FC } from 'react'
import { type WorkCardProps } from '../types/work'
import IconButton from './common/IconButton'
import arrow from '../assets/icons/arrow.svg'
import development from '../assets/icons/development.svg'
import defaultImage from '../assets/projects/default.png'

const WorkCard: FC<WorkCardProps> = ({ title, tags, link, codeLink, imageUrl, year }) => {
  return (
    <div className="flex flex-col overflow-hidden aspect-[4/3] sm:aspect-[4/3] md:aspect-[3/3] lg:aspect-[4/3] h-full">
      <div className="flex w-full h-full bg-[#191919] rounded-2xl p-4 sm:p-8 overflow-hidden">
        {imageUrl ? (
          <div className="w-full h-full min-h-0 min-w-0 overflow-hidden rounded-xl hover:scale-105 transition-all duration-300">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="w-full h-full min-h-0 min-w-0 overflow-hidden rounded-xl hover:scale-105 transition-all duration-300">
            <img
              src={defaultImage}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>

      <div className="flex justify-between items-center mt-4">
        <div className="flex flex-col">
          <p className="text-2xl font-semibold opacity-90">{title}</p>
          <div className="flex items-center gap-2">
            <p className="opacity-60 text-sm">{tags.join(', ')}</p>
            <p className="bg-white/60 h-1.5 w-1.5 rounded-full text-sm"></p>
            <p className="text-[#8B5CF6] text-sm">{year}</p>
          </div>
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
