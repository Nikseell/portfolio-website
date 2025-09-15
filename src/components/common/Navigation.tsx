import { type FC, useState, useEffect } from 'react'

const Navigation: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)

      const sections = ['home', 'projects', 'expertise', 'experience']
      const sectionElements = sections.map((id) => document.getElementById(id))

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i]
        if (section && scrollTop >= section.offsetTop - 120) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 120,
        behavior: 'smooth',
      })
    }
  }

  const getLinkClassName = (sectionId: string) => {
    const baseClasses =
      'px-4 py-1 text-xs md:text-base md:px-6 py-2 rounded-full font-medium transition-colors cursor-pointer'
    const activeClasses = 'bg-white text-black'
    const inactiveClasses = 'text-white hover:text-gray-300'

    return `${baseClasses} ${activeSection === sectionId ? activeClasses : inactiveClasses}`
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 hidden md:flex justify-center py-6 transition-all duration-300 w-full${
        isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center w-full max-w-[70rem] px-4">
        {/* <div className="justify-start hidden md:block w-40">
          <Link
            to="/"
            className="text-white text-2xl font-bold hover:text-gray-300 transition-colors"
          >
            NL.
          </Link>
        </div> */}

        <div className="flex items-center w-full justify-center space-x-2 md:space-x-2">
          <button
            onClick={() => scrollToSection('home')}
            className={getLinkClassName('home')}
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className={getLinkClassName('projects')}
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('expertise')}
            className={getLinkClassName('expertise')}
          >
            Expertise
          </button>
          <button
            onClick={() => scrollToSection('experience')}
            className={getLinkClassName('experience')}
          >
            Experience
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
