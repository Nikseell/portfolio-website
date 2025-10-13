import { type FC } from 'react'
import Skills from './Skills'
import { CodeEditor } from '@/components/animate-ui/components/code-editor'
import { Accordion, AccordionItem, AccordionTrigger, AccordionPanel } from '@/components/animate-ui/base/accordion'
import IconButton from '@/components/common/IconButton'
import mailIcon from '../../assets/icons/mail.svg'

const Hero: FC = () => {
  return (
    <section
      id="home"
      className="h-fit pt-10 md:pt-36"
    >
      <div className="flex flex-col h-full max-w-7xl mx-auto">
        <div className="flex items-center">
          <div className="flex flex-col w-full">
            <p className="hero-greeting">Hey! It's me Niklavs</p>

            <div className="flex flex-col lg:flex-row mb-4 items-start lg:items-center gap-4 lg:gap-8">
              <h1 className="main-header flex-shrink-0">
                Software
                <br />
                Developer
              </h1>

              <p className="hero-subtitle sm:mt-3 max-w-2xl md:max-w-lg">
                <span className="hero-description">Experienced developer with expertise in </span>
                <span className="text-[#8B5CF6]">React</span> <span className="hero-description">and </span>
                <span className="text-[#8B5CF6]">Unity</span>,
                <span className="hero-description"> creating engaging web and game experiences.</span>
              </p>
            </div>

            <div className="flex space-x-2 pt-6">
              <IconButton
                href="https://github.com/nikseell"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="devicon-github-original text-2xl text-[#F3F3F3]/60 group-hover:text-[#F3F3F3] transition-colors duration-300"></i>
              </IconButton>

              <IconButton
                href="https://linkedin.com/in/niklavs-laicans"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="devicon-linkedin-plain text-2xl text-[#F3F3F3]/60 group-hover:text-[#F3F3F3] transition-colors duration-300"></i>
              </IconButton>

              <IconButton
                href="mailto:niklavs.laicans@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={'https://devicon-website.vercel.app/api/google/plain.svg?color=%23FFFFFF'}
                  alt="Email"
                  className="w-6 h-6 opacity-60 group-hover:opacity-100 transition-colors duration-300"
                />
              </IconButton>
            </div>
          </div>
        </div>
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <Skills />
        </div>
        <div className="pt-16 sm:pt-20 lg:pt-24 flex flex-col md:flex-row mb-8 gap-6 md:gap-8">
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start text-left">
            <h1 className="section-title mb-6 sm:mb-8">What I do?</h1>

            <div className="w-full max-w-2xl text-left md:pr-14">
              <Accordion>
                <AccordionItem value="frontend">
                  <AccordionTrigger className="text-[#DFDFDF] accordion-text text-left">
                    Frontend Development
                  </AccordionTrigger>
                  <AccordionPanel className="text-[#BFBFBF] accordion-text text-left">
                    Building responsive and interactive user interfaces with React, TypeScript, and modern CSS
                    frameworks like Tailwind.
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem value="unity">
                  <AccordionTrigger className="text-[#DFDFDF] accordion-text text-left">
                    Unity Development
                  </AccordionTrigger>
                  <AccordionPanel className="text-[#BFBFBF] accordion-text text-left">
                    Creating engaging and interactive game experiences with Unity and C#.
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem value="backend">
                  <AccordionTrigger className="text-[#DFDFDF] accordion-text text-left">
                    Backend Development
                  </AccordionTrigger>
                  <AccordionPanel className="text-[#BFBFBF] accordion-text text-left">
                    Creating robust APIs and server-side applications with Node.js and databases.
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <CodeEditor
            cursor
            className="w-full md:w-1/2 h-[250px] sm:h-[300px] lg:h-[350px] bg-[#191919]"
            lang="tsx"
            title="component.tsx"
            icon={<i className="flex devicon-react-original text-md text-[#F3F3F3]"></i>}
            duration={15}
            delay={0.5}
            copyButton
          >
            {`import { useState } from 'react'

export default function CoffeeTracker() {
  const [cups, setCups] = useState(0)
  
  return (
    <button onClick={() => setCups(cups + 1)}>
      ☕ {cups} {cups === 1 ? 'cup' : 'cups'}
    </button>
  )
}`}
          </CodeEditor>
        </div>
      </div>
    </section>
  )
}

export default Hero
