import { type FC } from 'react'
import Skills from './Skills'
import { CodeEditor } from '@/components/animate-ui/components/code-editor'
import { Accordion, AccordionItem, AccordionTrigger, AccordionPanel } from '@/components/animate-ui/base/accordion'
import IconButton from '@/components/common/IconButton'

const Hero: FC = () => {
  return (
    <section className="h-fit pt-36">
      <div className="flex flex-col h-full">
        <div className="flex items-center">
          <div className="">
            <p className="text-[#8B8B8B] mb-3 text-xl">Hey! It's me Niklavs</p>

            <div className="flex mb-8">
              <h1 className="main-header">
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

            <div className="flex space-x-2 pt-4">
              <IconButton
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="devicon-github-original text-2xl text-[#F3F3F3]"></i>
              </IconButton>

              <IconButton
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="devicon-linkedin-plain text-2xl text-[#F3F3F3]"></i>
              </IconButton>

              <IconButton
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="devicon-twitter-plain text-2xl text-[#F3F3F3]"></i>
              </IconButton>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <Skills />
        </div>
        <div className="pt-20 flex justify-end">
          <div className="flex-1">
            <h1 className="text-[#DFDFDF] text-4xl font-semibold">What I do?</h1>

            <div className="mt-8 max-w-sm">
              <Accordion>
                <AccordionItem value="frontend">
                  <AccordionTrigger className="text-[#DFDFDF]">Frontend Development</AccordionTrigger>
                  <AccordionPanel className="text-[#BFBFBF]">
                    Building responsive and interactive user interfaces with React, TypeScript, and modern CSS
                    frameworks like Tailwind.
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem value="unity">
                  <AccordionTrigger className="text-[#DFDFDF]">Unity Development</AccordionTrigger>
                  <AccordionPanel className="text-[#BFBFBF]">
                    Creating engaging and interactive game experiences with Unity and C#.
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem value="backend">
                  <AccordionTrigger className="text-[#DFDFDF]">Backend Development</AccordionTrigger>
                  <AccordionPanel className="text-[#BFBFBF]">
                    Creating robust APIs and server-side applications with Node.js and databases.
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <CodeEditor
            cursor
            className="flex-1 h-[300px] bg-[#191919]"
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
