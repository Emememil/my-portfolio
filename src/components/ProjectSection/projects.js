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
    description: 'A native macOS discovery application designed for platform-consistent UI/UX. Engineered with a high-performance Tauri and Rust backend to bridge native OS capabilities with complex web state management.',
    image: cineraHero,
    caseStudyImage: cineraCaseStudy,
    tags: ['Tauri', 'Rust', 'React', 'Desktop'],
    demoLink: 'https://vimeo.com/1118518277',
  },
  {
    id: 2,
    title: 'Spotify Dashboard',
    description: 'A full-stack analysis dashboard featuring secure OAuth 2.0 integration and narrative-based listening analysis powered by the Google Gemini API.',
    image: spotifyHero,
    caseStudyImage: spotifyCaseStudy,
    tags: ['OAuth 2.0', 'React', 'Gemini AI', 'Node.js'],
    demoLink: 'https://spotify-ai-dashboard.vercel.app/',
    repoLink: 'https://github.com/Emememil/spotify-ai-dashboard',
  },
  {
    id: 3,
    title: 'Expense Splitter Pro',
    description: 'A feature-rich SPA designed to simplify financial settlements with advanced state management and persistent local storage. Focuses on design-to-code parity and fluid physics-based motion.',
    image: expensesHero,
    caseStudyImage: expensesCaseStudy,
    tags: ['TypeScript', 'Framer Motion', 'Vite', 'State Management'],
    demoLink: 'https://emememil.github.io/expense-splitter-app/',
    repoLink: 'https://github.com/Emememil/expense-splitter-app',
  },
];
