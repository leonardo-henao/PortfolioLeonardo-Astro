import type { IPortfolioProject } from '../interfaces/IPortfolioProject';

// Aplicaciones web
export const AllWebProjects: IPortfolioProject[] = [
  {
    name: 'Johana Martinez',
    image: '/images_apps/fuxionjohanamartinez.jpg',
    imageBackground: '/images/blob-haikei-purple.svg',
    description:
      'Destaca por su diseño atractivo y funcionalidad, en los cuales trabajé exclusivamente. Con un enfoque claro en la captación de clientes, la página refleja profesionalismo y facilita la interacción con los visitantes.',
    toolsUsed: ['Astro', 'React components', 'CSS', 'Javascript', 'Tailwind CSS', 'Vercel'],
    link: 'https://fuxionjohanamartinez.com',
  },
  {
    name: 'Memory cleaner - Website',
    image: '/images_apps/memorycleaner-website.jpg',
    imageBackground: '/images/blob-haikei-pink.svg',
    description:
      'Atractivo sitio web con tema oscuro y claro, idiomas ingles y español, enfocado en informar sobre funcionalidad de la aplicación y obtener descargas. Sitio web interactivo con animaciones y efectos visuales agradables que mejoran la experiencia de navegación.',
    toolsUsed: [
      'Astro',
      'Typescript',
      'Javascript',
      'CSS',
      'Framer motion',
      'React components',
      'Tailwind CSS',
      'Vercel',
      'Lottie',
    ],
    link: 'https://leonardohenao.com/tecnolapps/limpiador-de-memoria',
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
    image: '/images_apps/iptv_lists_website.jpg',
    imageBackground: '/images/blob-haikei.svg',
    description:
      'Sitio web del proyecto IPTV Listas M3U que refleja la innovación y la utilidad de nuestra aplicación, diseñado para mejorar su experiencia y facilitar su acceso a esta herramienta.',
    toolsUsed: ['Astro', 'Tailwind CSS', 'Mysql', 'Firebase Authentication', 'Vercel'],
    link: 'https://www.iptvlistasm3u.com/',
  },
];

// Aplicaciones para android
export const AllAndroidProjects: IPortfolioProject[] = [
  {
    name: 'Wallpplus',
    image: '/images_apps/wallpplus-android.jpg',
    imageBackground: '/images/blob-haikei-pink.svg',
    description:
      'Mas de 3000 fondos de pantalla en alta resolución, descarga y configura fácilmente los fondos en el dispositivo. Desarrollada en Kotlin, implementa mecanismos para optimizar el cache y mejorar la carga y visualización de las imágenes.',
    toolsUsed: ['Kotlin', 'XML', 'Play Store', 'Volley', 'Glide'],
    link: 'https://play.google.com/store/apps/details?id=com.ds.wallpup',
  },
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
