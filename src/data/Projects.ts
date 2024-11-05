import type { IPortfolioProject } from "../interfaces/IPortfolioProject";

const defaultRol = "Diseño y Desarrollo completo";

// Aplicaciones web
export const AllWebProjects: IPortfolioProject[] = [
  {
    name: "Creaciones Fabi",
    rol: defaultRol,
    image: "/images_apps/creacionesfabi.webp",
    imageBackground: "/images/blob-haikei-blue.svg",
    description: `
		<strong>Desafios: </strong> Lograr colocar mas de 40 imágenes optimizando la carga del sitio web. <br/> 
		<strong>Soluciones: </strong> Utilizar imágenes de ultima tecnología (<i>.webp</i>) y realizar un lazy loading de las imágenes que no se visualizan para mejorar la carga del sitio web.`,
    toolsUsed: [
      "Astro",
      "React",
      "Tailwind CSS",
      "CSS",
      "Vercel",
      "TypeScript",
      "Framer Motion",
    ],
    link: "https://creacionesfabi.com",
  },
  {
    name: "Johana Martinez",
    rol: defaultRol,
    image: "/images_apps/fuxionjohanamartinez.webp",
    imageBackground: "/images/blob-haikei-purple.svg",
    description: `
		<strong>Propósito: </strong> Captación de clientes y destacar los principales productos. <br/>
		<strong>Solución: </strong> Reflejar profesionalismo y facilitar la interacción de los visitantes con los principales productos.`,
    toolsUsed: [
      "Astro",
      "React",
      "CSS",
      "Javascript",
      "Tailwind CSS",
      "Vercel",
    ],
    link: "https://fuxionjohanamartinez.com",
  },
  {
    name: "Memory cleaner - Website",
    rol: defaultRol,
    image: "/images_apps/memorycleaner-website.webp",
    imageBackground: "/images/blob-haikei-pink.svg",
    description: `
		<strong>Desafió: </strong> Lograr captar usuarios de multiples idiomas y plasmar las principales funcionalidades de la aplicación. <br />
		<strong>Solución: </strong> Crear sitio web en multiples idiomas para mejorar la experiencia de cada usuario y reflejar las funcionalidades principales de la aplicación.`,
    toolsUsed: [
      "Astro",
      "Typescript",
      "JavaScript",
      "Tailwind CSS",
      "CSS",
      "Framer motion",
      "React",
      "Vercel",
      "Lottie",
    ],
    link: "https://limpiador-de-memoria.vercel.app/en/",
  },
  {
    name: "Macrosss",
    rol: defaultRol,
    image: "/images_apps/macrosss.webp",
    imageBackground: "/images/blob-haikei-blue.svg",
    description:
      "Una herramienta que genera automáticamente macros y fórmulas utilizando inteligencia artificial para optimizar el flujo de trabajo en Excel. Sistema de login con Firebase y persistencia en Mysql. ",
    toolsUsed: [
      ".Net",
      "Entity Framework",
      "Arquitectura DDD",
      "Angular",
      "Tailwind CSS",
      "SCSS",
      "Mysql",
      "Firebase Authentication",
      "Azure",
      "Vercel",
    ],
    link: "https://macros-excel.vercel.app/",
  },
  {
    name: "IPTV Listas M3U Website",
    rol: defaultRol,
    image: "/images_apps/iptv_lists_website.webp",
    imageBackground: "/images/blob-haikei.svg",
    description:
      "Sitio web del proyecto IPTV Listas M3U que refleja la innovación y la utilidad de nuestra aplicación, diseñado para mejorar su experiencia y facilitar su acceso a esta herramienta.",
    toolsUsed: [
      "Astro",
      "Tailwind CSS",
      "Mysql",
      "Firebase Authentication",
      "Vercel",
    ],
    link: "https://iptv-list.vercel.app/",
  },
];

// Aplicaciones para android
export const AllAndroidProjects: IPortfolioProject[] = [
  {
    name: "Passion Nails",
    rol: defaultRol,
    image: "/images_apps/passionnails-android.webp",
    imageBackground: "/images/blob-haikei.svg",
    description:
      "Aplicación Android desarrollada con Kotlin que integra la API de Facebook para mostrar una galería de imágenes de uñas personalizadas. Presenta una interfaz de usuario intuitiva donde los usuarios pueden navegar, guardar y compartir imágenes para inspirarse en el arte de las uñas.",
    toolsUsed: [
      "API Graph Facebook",
      "Kotlin",
      "XML",
      "Play Store",
      "Volley",
      "Glide",
    ],
    link: "https://play.google.com/store/apps/details?id=com.lappsmov.nailspasion",
  },
  {
    name: "Wallpplus",
    rol: defaultRol,
    image: "/images_apps/wallpplus-android.webp",
    imageBackground: "/images/blob-haikei-pink.svg",
    description:
      "Mas de 3000 fondos de pantalla en alta resolución, descarga y configura fácilmente los fondos en el dispositivo. Desarrollada en Kotlin, implementa mecanismos para optimizar el cache y mejorar la carga y visualización de las imágenes.",
    toolsUsed: ["Kotlin", "XML", "Play Store", "Volley", "Glide"],
    link: "https://play.google.com/store/apps/details?id=com.ds.wallpup",
  },
  {
    name: "Limpiador de Memoria",
    rol: defaultRol,
    image: "/images_apps/memory_cleaner.webp",
    imageBackground: "/images/blob-haikei-pink.svg",
    description:
      "Una solución eficiente y potente para optimizar el rendimiento de tu dispositivo Android. Desarrollada con Kotlin, esta aplicación se basa en una exhaustiva investigación sobre las carpetas residuales generadas por diversas aplicaciones.",
    toolsUsed: ["Kotlin", "XML", "Lottie", "Play Store", "Google Play Billing"],
    link: "https://play.google.com/store/apps/details?id=com.ds.memorycleaner",
  },
  {
    name: "IPTV Listas M3U",
    rol: defaultRol,
    image: "/images_apps/iptv_lists_android.webp",
    imageBackground: "/images/blob-haikei.svg",
    description:
      "Aplicación para Android donde los usuarios comparten listas de IPTV, el sistema funciona con un registro de cada usuario, limitaciones por tipos de usuario, cada usuario tiene un perfil publico al cual otros usuarios pueden acceder y ver el contenido compartido por el. Sistema de notificaciones push, diseñada con la librería Material Design. Backend creado en Python con Django.",
    toolsUsed: [
      "Kotlin",
      "Mysql",
      "Firebase Authentication",
      "Firebase Clod Messaging",
      "Python",
      "Django",
    ],
    link: "https://iptv-list.vercel.app/",
  },
];

export const AllTwitchProjects: IPortfolioProject[] = [
  {
    name: "Etech [No-responsive]",
    rol: `Streamer y desarrollador completo`,
    image: "/images_apps/templates-from-twitch-1.webp",
    imageBackground: "/images/blob-haikei-pink.svg",
    description:
      "Landing page de una empresa de tecnologías. En este proyecto se destaca la re-utilización de componentes, colores, gradientes y código en general haciendo así su proceso de edición mas eficiente. ",
    toolsUsed: ["Astro", "Tailwind CSS", "React", "TypeScript"],
    link: "https://templates-from-twitch-1.vercel.app",
  },
  {
    name: "Rhinos GYM [No-responsive]",
    rol: `Streamer y desarrollador completo`,
    image: "/images_apps/templates-from-twitch-2.webp",
    imageBackground: "/images/blob-haikei-purple.svg",
    description:
      "Landing page de un gimnasio. En este proyecto se destaca el uso de multiples GridLayouts para la correcta organización y visualización de los elementos. ",
    toolsUsed: ["Astro", "Tailwind CSS", "React", "TypeScript"],
    link: "https://templates-from-twitch-2.vercel.app",
  },
  {
    name: "KangCokor [No-responsive]",
    rol: `Streamer y desarrollador completo`,
    image: "/images_apps/templates-from-twitch-3.webp",
    imageBackground: "/images/blob-haikei-blue.svg",
    description:
      "Landing page de una barbería. En este proyecto se destaca el uso de  HTML, CSS y JavaScript (vanilla) para la correcta edición y visualización de los elementos. En este proyecto no se utiliza ningún framework, se crean multiples Sliders infinitos y se hace bastante uso de GridLayouts para un posicionamiento y visualización correcto de los elementos.",
    toolsUsed: ["HTML", "CSS", "JavaScript"],
    link: "https://templates-from-twitch-3.vercel.app",
  },
];
