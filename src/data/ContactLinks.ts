import type { IContactLinks } from "../interfaces/IContactLinks";

export const ContactLinks: IContactLinks[] = [
  // {
  //   link: 'http://wa.me/573165051130',
  //   icon: '/icons/whatsapp.svg',
  //   alt: 'icono de whatsapp',
  //   iconSmall: false,
  // },
  {
    link: "mailto:leonardofhenao.085@gmail.com",
    icon: "/icons/gmail.svg",
    alt: "icono de gmail",
    from: "Correo",
    iconSmall: false,
  },
  {
    link: "https://github.com/leonardo-henao",
    icon: "/icons/github.svg",
    alt: "icono de github",
    from: "Github",
    iconSmall: true,
  },
  {
    link: "https://www.linkedin.com/in/leonardo-henao/",
    icon: "/icons/linkedin.svg",
    alt: "icono de linkedin",
    from: "Linkedin",
    iconSmall: false,
  },
];

export const ContactOthers: IContactLinks[] = [
  {
    link: "https://play.google.com/store/apps/dev?id=7404460400144886326&hl=es-419",
    icon: "/icons/google-play.svg",
    alt: "icono de google play store",
    from: "Google Play Store",
    iconSmall: true,
  },
  {
    link: "https://www.twitch.tv/lhenaoll",
    icon: "/icons/google-play.svg",
    alt: "icono de twitch",
    from: "Twitch",
    iconSmall: true,
  },
  {
    link: "https://www.youtube.com/@lhenaoll",
    icon: "/icons/google-play.svg",
    alt: "icono de youtube",
    from: "Youtube",
    iconSmall: true,
  },
];
