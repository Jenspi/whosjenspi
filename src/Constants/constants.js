/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: constants.js
   Version: II
   Creation: 02/06/2023
   Last modification: 11/23/2025 (Jenny Spicer)
*/

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faX,
  faBars,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
  faReact,
  faGithub,
  faLinkedin,
  faItchIo,
} from '@fortawesome/free-brands-svg-icons';

import {
  javaIcon,
  gitIcon,
  githubIcon,
  pyIcon,
  npmIcon,
  figmaIcon,
  avatar,
  plsqlIcon,
  arduinoIcon,
  reactnativeIcon,
  unrealengineIcon,
  githubcopilotIcon,
  gamemakerIcon,
  canvaIcon,
  unityIcon,
  blenderIcon,
  agileIcon,
  moddingIcon,
  csharpIcon,
  cppIcon,
  attImg
} from '../assets';

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

const media = {
  javaIcon,
  gitIcon,
  githubIcon,
  pyIcon,
  npmIcon,
  figmaIcon,
  avatar,
  plsqlIcon,
  arduinoIcon,
  reactnativeIcon,
  unrealengineIcon,
  githubcopilotIcon,
  gamemakerIcon,
  canvaIcon,
  unityIcon,
  blenderIcon,
  agileIcon,
  moddingIcon,
  csharpIcon,
  cppIcon,
  attImg
};

const icons = {
  faBars,
  faX,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faReact,
  faGithub,
  faLinkedin,
  faItchIo,
  faEnvelope,
};

const introduction = {
  text: [
    "Hey there, I'm happy you stopped by! 👋☺️",

		"My name is Jenny (Jennifer) Spicer, and I have a passion for software engineering & UI/UX. I currently work as a Junior Software Engineer at a VR peripheral company, working particularly with anything related to Unreal Engine. 💞",
    "Outside of my career, I'm passionate about helping people, re-starting my fitness journey, in love with the outdoors, and learning watercolor. 🌱",
    "I'm always looking to expand my circle and volunteer– please reach out if you have any volunteer opportunities or would like to connect! 💫"
  ],
};

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'research',
    title: 'Research',
  },
  {
    id: 'awards',
    title: 'Awards',
  },
  {
    id: 'skills',
    title: 'Skills',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

// TODO:
const projects = [
  /*{
    name: '',
    description: '',
    image: '',
    source_code_link: '',
    demo_link: '',
  },*/
];

// TODO:
const research = [];

// TODO: (in progress)
const awards = [
  /*{
    name: '',
    placement: '',
    award: '',
    description: '',
    image: '',
    date: '',
    source_code_link: '',
    demo_link: '',
    media_link: '',
  },*/
  {
    name: '🌐 AT&T Hackathon',
    placement: '🥇 1st',
    award: '$6,000 USD',
    description: 'Our team of three competed nationwide in this hackathon, creating a website for our proposed art app given the theme: create an engaging digital experience for AT&T\'s 5G and fiber expansion.',
    image: attImg,
    date: 'April 2023',
    source_code_link: 'https://github.com/shakkalaa/Kayjen-Hacketeers?tab=readme-ov-file',
    demo_link: 'https://shakkalaa.github.io/Kayjen-Hacketeers/',
    media_link: 'https://life.att.jobs/college-students-empowher-hackathon/',
  },
  /*
  {
    name: 'InnovateUNO',
    placement: '🥇 1st',
    award: '$200 USD',
    description: '',
    image: '',
    date: 'November 2023',
    source_code_link: '',
    demo_link: '',
    media_link: '',
  },
  {
    name: 'StartupUNO',
    placement: '🥇 1st',
    award: '$11,500 USD',
    description: 'November 2024',
    image: '',
    date: '',
    source_code_link: '',
    demo_link: '',
    media_link: '',
  },
  */
];

const memoji = {
  image: [avatar],
};

const skills = [
  {
    id: 'cpp',
    title: 'C++',
    icon: cppIcon,
    description:
      'I use C++ for Arduino development as well as Unreal Engine SDK development, focusing on encapsulation and abstraction.',
  },
  {
    id: 'gamemodding',
    title: 'Game Modding',
    icon: moddingIcon,
    description:
      'New to the game modding world, I am working on a mod for a VR game developed with Unreal Engine. Data injection with UE4SS and Lua has been so fun!',
  },
  {
    id: 'csharp',
    title: 'C#',
    icon: csharpIcon,
    description:
      'I have used C# for all of my Unity 3D games, most notably BREATHE (psychological horror game with an embedded system) and Sorts (sorting game).',
  },
  {
    id: 'agile',
    title: 'Agile Methodology',
    icon: agileIcon,
    description:
      'I enjoy checking off boxes, so iterative development with sprints, frequent check-ins, and adaptive planning is my favorite way to work!',
  },
  {
    id: 'blender',
    title: 'Blender',
    icon: blenderIcon,
    description:
      'I\'m a Blender newbie, having made only a few models as of November 2025. Hope you\'ll follow my progress!',
  },
  {
    id: 'unity',
    title: 'Unity 3D',
    icon: unityIcon,
    description:
      'I have extensive experience with Unity for 3D game development, being able to make a game start to finish independently with different scenes, animations, scripts (C#), and full UI/UX. ',
  },
  {
    id: 'canva',
    title: 'Canva',
    icon: canvaIcon,
    description:
      'I have experience creating designs and flyers for social media campaigns, events, and personal branding. I am \'Canva For Work\' certified!',
  },
  {
    id: 'gamemakerstudio',
    title: 'Game Maker Studio 2',
    icon: gamemakerIcon,
    description:
      'I am skilled with Game Maker Studio 2 for 2D games. Working on games both independently and collaboratively in game jams, I have implemented object-oriented programming (OOP) principles in Game Maker Language (GML).',
  },
  {
    id: 'githubcopilot',
    title: 'GitHub Copilot',
    icon: githubcopilotIcon,
    description:
      'I have recently started using GitHub Copilot to speed up the process of reading SDKs. It is especially helpful in languages I\'m unfamiliar with, and I can easily get answers for every tiny question.',
  },
  {
    id: 'unrealengine',
    title: 'Unreal Engine',
    icon: unrealengineIcon,
    description:
      'I have experience with visual scripting with blueprints for VR game development. I also contribute and maintain to StrikerVR\'s Unreal Engine SDK (C++).',
  },
  {
    id: 'reactnative',
    title: 'React Native',
    icon: reactnativeIcon,
    description:
      'I am well-versed in React Native for Android/iOS development, proficient in creating reusable components and managing application state using hooks and context (JavaScript & TypeScript).',
  },
  {
    id: 'java',
    title: 'Java',
    icon: javaIcon,
    description:
      'Being my preferred and favorite programming language, I have extensive experience utilizing Java for object-oriented programming (OOP) and implementing data structures.',
  },
  {
    id: 'git',
    title: 'Git',
    icon: gitIcon,
    description:
    'I am proficient in Git, managing code changes, collaborating with others, and resolving conflicts effectively.',
  },
  {
    id: 'github',
    title: 'GitHub',
    icon: githubIcon,
    description:
      'I am skilled in using GitHub for seamless project collaboration, code sharing, and issue tracking.',
  },
  {
    id: 'plsql',
    title: 'PL/SQL',
    icon: plsqlIcon,
    description:
      'I have a strong command of PL/SQL, encompassing a wide range of skills such as database normalization, triggers, front-end connectivity, and data analysis using software like Power BI.',
  },
  {
    id: 'figma',
    title: 'Figma',
    icon: figmaIcon,
    description:
    'Using Figma, I am able to make medium-fidelity and high-fidelity prototypes. This allows me to experiment with interactive UI/UX without code!',
  },
  {
    id: 'npm',
    title: 'npm',
    icon: npmIcon,
    description:
      'When it comes to building native applications, I prefer using npm as my runtime environment over Yarn.',
  },
  {
    id: 'arduino',
    title: 'Arduino',
    icon: arduinoIcon,
    description:
      'I have hands-on experience with Arduino, where I implemented an embedded system breathing monitor into my Unity 3D pyschological horror game, BREATHE, written in C++.',
  },
];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

export {
  media,
  introduction,
  projects,
  memoji,
  skills,
  markerSvg,
  icons,
  awards,
};
