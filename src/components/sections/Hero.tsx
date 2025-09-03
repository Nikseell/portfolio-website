import { type FC } from 'react'
import Skills from './Skills'

const Hero: FC = () => {
  return (
    <section className="h-[80vh] pt-36">
      <div className="flex flex-col h-full">
        <div className="flex items-center">
          <div className="">
            <p className="text-[#8B8B8B] mb-3 text-xl">Hey! It's me Niklavs</p>

            <div className="flex mb-8">
              <h1 className="text-[#DFDFDF] text-6xl font-medium">
                Software
                <br />
                Developer
              </h1>

              <p className="text-white text-2xl pl-16 mt-3 max-w-2xl">
                <span className="opacity-60">Experienced developer with expertise in </span>
                <span className="text-[#8B5CF6]">React</span> <span className="opacity-60">and </span>
                <span className="text-[#8B5CF6]">Unity</span>,
                <span className="opacity-60"> creating engaging web and game experiences.</span>
              </p>
            </div>

            <div className="flex space-x-4 pt-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 flex items-center justify-center rounded-xl border border-[#333333] bg-[#141414] opacity-60 hover:opacity-100 duration-300"
              >
                <i className="devicon-github-original text-2xl text-[#F3F3F3] "></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 flex items-center justify-center rounded-xl border border-[#333333] bg-[#141414] opacity-60 hover:opacity-100 duration-300"
              >
                <i className="devicon-linkedin-plain text-2xl text-[#F3F3F3]"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 flex items-center justify-center rounded-xl border border-[#333333] bg-[#141414] opacity-60 hover:opacity-100 duration-300"
              >
                <i className="devicon-twitter-plain text-2xl text-[#F3F3F3]"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <Skills />
        </div>
      </div>
    </section>
  )
}

export default Hero
