import cineraHero from '../../assets/cinera-hero.png';
import spotifyHero from '../../assets/spotify-hero.png';
import expensesHero from '../../assets/expenses-hero.png';

import cineraCaseStudy from '../../assets/project-cinera.png';
import spotifyCaseStudy from '../../assets/project-spotify.png';
import expensesCaseStudy from '../../assets/project-expenses.png';

export const getProjects = (mode = 'default') => {
  const isSolutions = mode === 'solutions';
  
  return [
    {
      id: 1,
      title: isSolutions ? 'Cinera (System Orchestration)' : 'Cinera (macOS App)',
      description: isSolutions 
        ? 'A high-performance implementation bridging native Rust/Tauri capabilities with complex web state management. Focused on system-level discovery and platform-consistent execution logic.' 
        : 'A native macOS discovery application designed for platform-consistent UI/UX. Engineered with a high-performance Tauri and Rust backend to bridge native OS capabilities.',
      image: cineraHero,
      caseStudyImage: cineraCaseStudy,
      tags: isSolutions ? ['System Orchestration', 'Rust', 'Tauri', 'Native Bridge'] : ['Tauri', 'Rust', 'React', 'Desktop'],
      demoLink: 'https://vimeo.com/1118518277',
    },
    {
      id: 2,
      title: isSolutions ? 'Spotify API Lifecycle Dashboard' : 'Spotify Dashboard',
      description: isSolutions
        ? 'A full-stack integration showcase featuring secure OAuth 2.0 flows and automated LLM data pipelines. Focuses on the lifecycle of high-volume API data and secure token orchestration.'
        : 'A full-stack analysis dashboard featuring secure OAuth 2.0 integration and narrative-based listening analysis powered by the Google Gemini API.',
      image: spotifyHero,
      caseStudyImage: spotifyCaseStudy,
      tags: isSolutions ? ['OAuth 2.0', 'API Lifecycle', 'LLM Pipeline', 'Node.js'] : ['OAuth 2.0', 'React', 'Gemini AI', 'Node.js'],
      demoLink: 'https://spotify-ai-dashboard.vercel.app/',
      repoLink: 'https://github.com/Emememil/spotify-ai-dashboard',
    },
    {
      id: 3,
      title: isSolutions ? 'Financial Logic: Transaction Engine' : 'Expense Splitter Pro',
      description: isSolutions
        ? 'A specialized technical showcase of transactional integrity and complex state management. Engineered to handle financial settlements with persistent data validation and accurate math logic.'
        : 'A feature-rich SPA designed to simplify financial settlements with advanced state management and fluid physics-based motion. Focuses on design-to-code parity.',
      image: expensesHero,
      caseStudyImage: expensesCaseStudy,
      tags: isSolutions ? ['Financial Logic', 'Data Integrity', 'State Orchestration'] : ['TypeScript', 'Framer Motion', 'Vite', 'State Management'],
      demoLink: 'https://emememil.github.io/expense-splitter-app/',
      repoLink: 'https://github.com/Emememil/expense-splitter-app',
    },
  ];
};
