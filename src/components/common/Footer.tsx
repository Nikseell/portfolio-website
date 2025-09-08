import arrow from '../../assets/icons/arrow.svg'
import { type FC } from 'react'

const Footer: FC = () => {
  return (
    <footer className="flex flex-col gap-8">
      <h1 className="flex justify-center main-header">Let's talk!</h1>
      <button
        onClick={() => window.open('mailto:niklavs.laicans@gmail.com', '_blank')}
        className="flex justify-center items-center p-3 rounded-full gap-1 border border-[#333333] bg-[#141414] hover:bg-[#242424] hover:scale-105 transition-all duration-300 cursor-pointer w-full group"
      >
        <p className="flex items-center justify-center opacity-60 group-hover:opacity-100 group-hover:text-white transition-all duration-300">
          niklavs.laicans@gmail.com
        </p>
        <img
          src={arrow}
          alt="arrow"
          className="w-7 h-7"
        />
      </button>
    </footer>
  )
}

export default Footer
