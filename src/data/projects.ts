export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

export const projectsData: Project[] = [
  {
    title: "Minimal Portfolio Template",
    description:
      "Ready-to-use minimal portfolio template - just add your content and deploy",
    tags: ["REACT", "TYPESCRIPT"],
    link: "https://github.com/nikseell/portfolio-website",
  },
  {
    title: "GitHub Traffic Frontend",
    description:
      "React + TypeScript dashboard for visualizing GitHub repository traffic data",
    tags: ["REACT", "TYPESCRIPT"],
    link: "https://github.com/nikseell/github-traffic-frontend",
  },
  {
    title: "GitHub Traffic Backend",
    description:
      "NestJS API for fetching and storing GitHub repository traffic data",
    tags: ["NESTJS", "TYPESCRIPT"],
    link: "https://github.com/nikseell/github-traffic-backend",
  },
  {
    title: "Tic Tac Toe",
    description: "2D Tic Tac Toe implementation using Unity Engine and C#",
    tags: ["UNITY", "C#"],
    link: "https://github.com/nikseell/tic-tac-toe",
  },
  {
    title: "Google Trex Clone",
    description: "Game Development • 2023",
    tags: ["UNITY", "C#"],
    link: "https://github.com/nikseell/google-trex-clone",
  },
  {
    title: "Quiz Game",
    description: "Game Development • 2020",
    tags: ["UNITY", "C#"],
    link: "https://balvurcb.lv/spele/",
  },
  {
    title: "C# Tasks",
    description: "Backend Development • 2021",
    tags: ["C#", ".NET"],
    link: "https://github.com/nikseell/c-sharp",
  },
  {
    title: "C# Tests",
    description: "Testing • 2021",
    tags: ["C#", ".NET"],
    link: "https://github.com/nikseell/c-sharp-tests",
  },
];
