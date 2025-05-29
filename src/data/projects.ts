export interface Project {
  id:number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  category: string;
}

export const frontendProjects:Project[] = [
  {
    id: 1,
    title: "S-Track",
    description: "Interactive student management dashboard with student data visualization and Firebase authentication.",
    image: "/strack.png",
    tags: ["React", "TypeScript", "TailwindCSS", "Firebase"],
    liveUrl: "https://s-track-six.vercel.app/",
    githubUrl: "https://github.com/sulthan1866/sTrack",
    category: "Web App"
  },
  {
    id: 2,
    title: "Habit Tracker UI",
    description: "It allows users to track their daily habits, supports light/dark mode syncing with system preferences, and visually displays habit progress with graphs.",
    image: "/habitTrackerUI.png",
    tags: ["Next.js", "TypeScript","TailwindCSS", "Recharts"],
    liveUrl: "https://habit-tracker-ui-tau.vercel.app/",
    githubUrl: "https://github.com/sulthan1866/Habit-tracker-ui",
    category: "Web App"
  },
  {
    id: 3,
    title: "CollegeTips.in Gallery",
    description: "A gallery website for CollegeTips.in, showcasing student photos with a modern design and smooth animations.",
    image: "https://www.collegetips.in/images/logo.jpg",
    tags: ["React.js","TypeScript","TailwindCSS"],
    liveUrl: "/temp",
    githubUrl: "/404",
    category: "Web App"
  },
  {
    id: 4,
    title: "Todo List / Random Picker",
    description: "A simple todo list and random task picker app built with React, allowing users to manage tasks and randomly select tasks from the list.",
    image: "/rPicker.png",
    tags: ["React", "TypeScript", "Bootstrap"],
    liveUrl: "https://rpicker.netlify.app/",
    githubUrl: "https://github.com/sulthan1866/Random-Picker",
    category: "Web App"
  }
];

export const fullstackProjects: Project[] = [
  {
    id: 5,
    title: "Habit Tracker",
    description: "A fullstack habit tracker application with user authentication, habit management, and progress tracking.",
    image: "/habitater.png",
    tags: ["SpringBoot","Java","React","TypeScript", "PostgreSQL", "Bootstrap"],
    liveUrl: "https://habitater.netlify.app/",
    githubUrl: "https://github.com/sulthan1866/Habit-Tracker",
    category: "Web App"
  },
  {
    id: 6,
    title: "Study cards",
    description: "A fullstack quiz application.",
    image: "/study_cards.png",
    tags: ["SpringBoot","Java","React","TypeScript", "PostgreSQL", "Bootstrap"],
    liveUrl: "https://study-card.netlify.app/",
    githubUrl: "https://github.com/sulthan1866/Study-cards",
    category: "Web App"
  }
];