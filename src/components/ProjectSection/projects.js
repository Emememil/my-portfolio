import cineraHero from '../../assets/cinera-hero.png';
import spotifyHero from '../../assets/spotify-hero.png';
import expensesHero from '../../assets/expenses-hero.png';

import cineraCaseStudy from '../../assets/project-cinera.png';
import spotifyCaseStudy from '../../assets/project-spotify.png';
import expensesCaseStudy from '../../assets/project-expenses.png';

export const projects = [
  {
    id: 1,
    title: 'Cinera (macOS App)',
    description: 'A native macOS movie discovery application built with a focus on platform-consistent UI/UX. Architected with a high-performance Tauri and Rust backend for native integration and complex state management.',
    image: cineraHero,
    caseStudyImage: cineraCaseStudy,
    tags: ['Tauri', 'Rust', 'React', 'Desktop Development'],
    demoLink: 'https://vimeo.com/1118518277',
    // No repoLink for Cinera as per original file
  },
  {
    id: 2,
    title: 'Spotify Dashboard',
    description: 'A full-stack data visualization dashboard featuring secure OAuth 2.0 integration and AI-driven listening analysis via the Google Gemini API.',
    image: spotifyHero,
    caseStudyImage: spotifyCaseStudy,
    tags: ['OAuth 2.0', 'React', 'Gemini AI', 'Data Viz'],
    demoLink: 'https://spotify-ai-dashboard.vercel.app/',
    repoLink: 'https://github.com/Emememil/spotify-ai-dashboard',
  },
  {
    id: 3,
    title: 'Expense Splitter Pro',
    description: 'A progressive web app designed to simplify bill splitting with advanced state management and local storage persistence. Features 1:1 design fidelity and fluid motion.',
    image: expensesHero,
    caseStudyImage: expensesCaseStudy,
    tags: ['TypeScript', 'State Management', 'Framer Motion'],
    demoLink: 'https://emememil.github.io/expense-splitter-app/',
    repoLink: 'https://github.com/Emememil/expense-splitter-app',
  },
];
