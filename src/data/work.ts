import { type Work } from '../types/work'
import minimalPortfolioImage from '../assets/projects/minimal-portfolio-template.png'
import githubTrafficFrontendImage from '../assets/projects/github-traffic-frontend.png'
import ticTacToeImage from '../assets/projects/tic-tac-toe.png'
import googleTrexCloneImage from '../assets/projects/google-trex-clone.png'
import unityQuizGameImage from '../assets/projects/unity-quiz-game.png'

export const workData: Work[] = [
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
  {
    title: 'C# Tasks',
    description: 'Backend Development • 2021',
    tags: ['C#', '.NET'],
    codeLink: 'https://github.com/nikseell/c-sharp',
    year: '2021',
  },
  {
    title: 'C# Tests',
    description: 'Testing • 2021',
    tags: ['C#', '.NET'],
    codeLink: 'https://github.com/nikseell/c-sharp-tests',
    year: '2021',
  },
  {
    title: 'Quiz Game',
    description: 'Game Development • 2020',
    tags: ['Unity', 'C#'],
    link: 'https://balvurcb.lv/spele/',
    imageUrl: unityQuizGameImage,
    year: '2020',
  },
]
