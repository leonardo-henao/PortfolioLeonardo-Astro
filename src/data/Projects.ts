import type { IPortfolioProject } from '../interfaces/IPortfolioProject';

// Aplicaciones web
export const AllWebProjects: IPortfolioProject[] = [
  {
    name: 'Johana Martinez',
    image: '/images_apps/fuxionjohanamartinez.png',
    imageBackground: '/images/blob-haikei-purple.svg',
    description:
      'Destaca por su diseño atractivo y funcionalidad, en los cuales trabajé exclusivamente. Con un enfoque claro en la captación de clientes, la página refleja profesionalismo y facilita la interacción con los visitantes.',
    toolsUsed: ['Astro', 'React components', 'CSS', 'Javascript', 'Tailwind CSS', 'Vercel'],
    link: 'https://fuxionjohanamartinez.com',
  },
  {
    name: 'Macrosss',
    image: '/images_apps/macrosss.jpg',
    imageBackground: '/images/blob-haikei-blue.svg',
    description:
      'Una herramienta que genera automáticamente macros y fórmulas utilizando inteligencia artificial para optimizar el flujo de trabajo en Excel. Sistema de login con Firebase y persistencia en Mysql. ',
    toolsUsed: [
      '.Net',
      'Entity Framework',
      'Arquitectura DDD',
      'Angular',
      'Tailwind CSS',
      'SCSS',
      'Mysql',
      'Firebase Authentication',
      'Azure',
      'Vercel',
    ],
    link: 'https://macrosss.com',
  },
  {
    name: 'IPTV Listas M3U Website',
    image: '/images_apps/iptv_lists_website.png',
    imageBackground: '/images/blob-haikei.svg',
    description:
      'Sitio web del proyecto IPTV Listas M3U que refleja la innovación y la utilidad de nuestra aplicación, diseñado para mejorar su experiencia y facilitar su acceso a esta herramienta.',
    toolsUsed: ['Astro', 'Tailwind CSS', 'Mysql', 'Firebase Authentication', 'Vercel'],
    link: 'https://www.iptvlistasm3u.com/',
  },
  {
    name: 'Rick and Morty - API',
    image: '/images_apps/rick-and-morty.jpg',
    imageBackground: '/images/blob-haikei-pink.svg',
    description:
      'Este proyecto web exhibe habilidades técnicas en el desarrollo de aplicaciones utilizando JavaScript modular, CSS puro y sigue el patrón Modelo-Vista-Controlador (MVC). Utiliza la API de Rick and Morty como un ejemplo concreto para demostrar el manejo de datos y la interacción con el DOM, proporcionando así una experiencia interactiva y atractiva para el usuario.',
    toolsUsed: ['Javascript Vanilla', 'Javascript modular', 'CSS', 'MVC', 'Consumo de rest API', 'Vercel'],
    link: 'https://sofka-rick-and-morty-api-c4.vercel.app/',
  },
];

// Aplicaciones para android
export const AllAndroidProjects: IPortfolioProject[] = [
  {
    name: 'Limpiador de Memoria',
    image: '/images_apps/memory_cleaner.jpg',
    imageBackground: '/images/blob-haikei-pink.svg',
    description:
      'Una solución eficiente y potente para optimizar el rendimiento de tu dispositivo Android. Desarrollada con Kotlin, esta aplicación se basa en una exhaustiva investigación sobre las carpetas residuales generadas por diversas aplicaciones.',
    toolsUsed: ['Kotlin', 'XML', 'Lottie', 'Play Store', 'Google Play Billing'],
    link: 'https://play.google.com/store/apps/details?id=com.ds.memorycleaner',
  },

  {
    name: 'IPTV Listas M3U',
    image: '/images_apps/iptv_lists_android.jpg',
    imageBackground: '/images/blob-haikei.svg',
    description:
      'Aplicación para Android donde los usuarios comparten listas de IPTV, el sistema funciona con un registro de cada usuario, limitaciones por tipos de usuario, cada usuario tiene un perfil publico al cual otros usuarios pueden acceder y ver el contenido compartido por el. Sistema de notificaciones push, diseñada con la librería Material Design. Backend creado en Python con Django.',
    toolsUsed: ['Kotlin', 'Mysql', 'Firebase Authentication', 'Firebase Clod Messaging', 'Python', 'Django'],
    link: 'https://iptvlistasm3u.com',
  },
];
