import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  realvalencia,
  netgeeks,
  adminpanel,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "UX/UI Designer",
    icon: figma,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];




const projects = [
  {
    name: "Real Valencia",
    description:
      "Real Valencia is a company that is dedicated to integral reforms and decoration. From the page you can consult what is the specific price of the work you want to do.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
    ],
    image: realvalencia,
    source_code_link: "https://github.com/MikayelGyogchyan/realValenciaReform-project",
  },
  {
    name: "Netgeeks",
    description:
      "We are building a Movie Trailer App. We are going to use ReactJS to create our frontend. For the data that we are going to need, we are going to use the TheMovieDatabase API.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "TheMovieDatabase",
        color: "green-text-gradient",
      },
      {
        name: "React-Youtube",
        color: "pink-text-gradient",
      },
    ],
    image: netgeeks,
    source_code_link: "https://github.com/MikayelGyogchyan/GeeksHubsProject",
  },
  {
    name: "Admin Panel",
    description:
      "React admin panel dashboard using React Hooks and functional components. React.js admin panel design for beginners with Material UI, chart, and CSS from scratch.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "MaterialUI",
        color: "green-text-gradient",
      },
      {
        name: "SASS",
        color: "pink-text-gradient",
      },
    ],
    image: adminpanel,
    source_code_link: "https://github.com/MikayelGyogchyan/admin-panel",
  },
];

export { services, technologies, projects };

