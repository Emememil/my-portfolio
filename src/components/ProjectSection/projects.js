import cineraHero from '../../assets/cinera-hero.png';
import spotifyHero from '../../assets/spotify-hero.png';
import expensesHero from '../../assets/expenses-hero.png';

import cineraCaseStudy from '../../assets/project-cinera.png';
import spotifyCaseStudy from '../../assets/project-spotify.png';
import expensesCaseStudy from '../../assets/project-expenses.png';

export const projects = [
  {
    id: 1,
    title: 'Cinera App',
    description: 'A modern movie discovery web application that allows users to browse, search, and discover new films and TV shows with a sleek, user-friendly interface.',
    image: cineraHero,
    caseStudyImage: cineraCaseStudy,
    tags: ['Desktop App Development', 'React', 'Rust'],
    demoLink: 'https://vimeo.com/1118518277',
    // No repoLink for Cinera
  },
  {
    id: 2,
    title: 'Spotify Dashboard',
    description: 'A data visualization dashboard that connects to the Spotify API to provide users with insightful analytics about their listening habits and favorite tracks.',
    image: spotifyHero,
    caseStudyImage: spotifyCaseStudy,
    tags: ['Data Viz', 'React', 'API'],
    demoLink: 'https://spotify-ai-dashboard.vercel.app/',
    repoLink: 'https://github.com/Emememil/spotify-ai-dashboard',
  },
  {
    id: 3,
    title: 'Expense Splitter Pro',
    description: 'A progressive web app designed to simplify bill splitting and expense tracking among groups, featuring real-time updates and clear visualizations.',
    image: expensesHero,
    caseStudyImage: expensesCaseStudy,
    tags: ['React', 'State Management', 'UI/UX Design'],
    demoLink: 'https://emememil.github.io/expense-splitter-app/',
    repoLink: 'https://github.com/Emememil/expense-splitter-app',
  },
];
