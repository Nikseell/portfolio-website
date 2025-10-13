import { type Work } from '../types/work'
import minimalPortfolioImage from '../assets/projects/minimal-portfolio-template.png'
import githubTrafficFrontendImage from '../assets/projects/github-traffic-frontend.png'
import ticTacToeImage from '../assets/projects/tic-tac-toe.png'
import googleTrexCloneImage from '../assets/projects/google-trex-clone.png'
import portfolioWebsiteImage from '../assets/projects/portfolio-website.png'

export const workData: Work[] = [
  {
    title: 'Portfolio Website',
    description: 'My portfolio website built with React and TypeScript',
    tags: ['React', 'TypeScript'],
    codeLink: 'https://github.com/nikseell/portfolio-website',
    imageUrl: portfolioWebsiteImage,
    year: '2025',
  },
  {
    title: 'Minimal Portfolio Template',
    description: 'Ready-to-use minimal portfolio template - just add your content and deploy',
    tags: ['React', 'TypeScript'],
    codeLink: 'https://github.com/nikseell/portfolio-website',
    imageUrl: minimalPortfolioImage,
    year: '2025',
  },
  {
    title: 'GitHub Traffic Frontend',
    description: 'React + TypeScript dashboard for visualizing GitHub repository traffic data',
    tags: ['React', 'TypeScript'],
    codeLink: 'https://github.com/nikseell/github-traffic-frontend',
    imageUrl: githubTrafficFrontendImage,
    year: '2025',
  },
  {
    title: 'GitHub Traffic Backend',
    description: 'NestJS API for fetching and storing GitHub repository traffic data',
    tags: ['NestJS', 'TypeScript'],
    codeLink: 'https://github.com/nikseell/github-traffic-backend',
    year: '2025',
  },
  {
    title: 'Tic Tac Toe',
    description: '2D Tic Tac Toe implementation using Unity Engine and C#',
    tags: ['Unity', 'C#'],
    codeLink: 'https://github.com/nikseell/tic-tac-toe',
    imageUrl: ticTacToeImage,
    year: '2023',
  },
  {
    title: 'Google Trex Clone',
    description: 'Game Development • 2023',
    tags: ['Unity', 'C#'],
    codeLink: 'https://github.com/nikseell/google-trex-clone',
    imageUrl: googleTrexCloneImage,
    year: '2023',
  },
]
