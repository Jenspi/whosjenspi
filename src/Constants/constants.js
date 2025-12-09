/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: constants.js
   Version: II
   Creation: 02/06/2023
   Last modification: 12/08/2025 (Jenny Spicer)
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
  placeholderImg,
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
  attImg,
  innovateunoImg,
  startupunoImg,
  tcpchatImg,
  breatheImg,
  research_camochameleonImg,
  research_scholarupImg,
  research_fitnessappImg,
  research_breatheImg,
  // gamejournal_ow2Img,
  // documentationWorkshopImg,
  // vrarhistoryImg,
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
  placeholderImg,
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
  attImg,
  innovateunoImg,
  startupunoImg,
  tcpchatImg,
  breatheImg,
  research_camochameleonImg,
  research_scholarupImg,
  research_fitnessappImg,
  research_breatheImg,
  // gamejournal_ow2Img,
  // documentationWorkshopImg,
  // vrarhistoryImg,
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
  // {
  //   id: 'blog',
  //   title: 'Blog',
  // },
  {
    id: 'contact',
    title: 'Contact',
  },
];

// TODO (in progress):
const projects = [
  // Mobile apps, networking, 
  /*{
    name: '',
    description: '',
    image: placeholderImg,
    stack: '',
    source_code_link: '',
    demo_link: '',
  },*/
  {
    name: 'BREATHE',
    description: 'Step into the mind of Willow in this first-person psychological thriller. What began as an innocent infatuation with a local quickly twists into something dark and inescapable, and your own breathing will dictate your composure.',
    image: breatheImg,
    stack: 'Unity 3D, C#, Arduino, Embedded Systems',
    source_code_link: 'https://github.com/playBREATHE',
    demo_link: 'https://jenspi.itch.io/breathe',
  },
  {
    name: 'TCPChat',
    description: 'Terminal-based TCP chat with Client-Server Architecture and extensive error handling. Works on single machine or with multiple machines on same home network.',
    image: tcpchatImg,
    stack: 'Java, Sockets, Multi-threading',
    source_code_link: 'https://github.com/Jenspi/TCPChat',
    demo_link: 'https://github.com/Jenspi/TCPChat/releases',
  },
  {
    name: 'MORE PROJECTS LISTED SOON!',
    description: '',
    image: placeholderImg,
    stack: '',
    source_code_link: '',
    demo_link: '',
  },
];

// TODO (in progress):
const research = [
  // BREATHE, ScholarUp, Camo Chameleon, Fitness App
  /*{
    name: '',
    advised_under: '',
    presentation: '',
    description: '',
    image: placeholderImg,
    date: '',
    demo_link: '',
    research_link: '',
  },*/
  {
    name: 'ScholarUp',
    advised_under: 'Self',
    presentation: '',// InnovateUNO 2023 PowerPoint
    description: 'Researched user interaction and user interface design principles and mobile app development to create a study aid application that helps university students organize their academic resources and improve their study habits.',
    image: research_scholarupImg,
    date: 'August 2024 - December 2024',
    demo_link: '',// Repository link – Installation instructions in README
    research_link: '',// Repository link – ScholarUp Case Study
  },
  {
    name: 'Camo Chameleon',
    advised_under: 'Dr. Shreya Banerjee (Humans, Hybrid AI, and Machines Lab)',
    presentation: '',// StartupUNO 2024 Pitch Deck
    description: 'Researched how to create an educational video game that helps children improve their emotional intelligence through gameplay. Research included, but not limited to, game design principles, Unity 3D development, and psychological studies on emotional intelligence. Worked closely with mentors from the UNO Psychology Department, as well as child development experts.',
    image: research_camochameleonImg,
    date: 'August 2024 - January 2025',
    demo_link: '',// Not allowed to share
    research_link: 'https://dl.acm.org/doi/10.24963/ijcai.2025/1062',// ICJAI 2025 Paper (ACM.org)
  },
  {
    name: 'BREATHE',
    advised_under: 'Self',
    presentation: '',// Initial Pitch Deck
    description: 'Ongoing research on how to create an immersive psychological horror game that incorporates biofeedback through an embedded system and changes gameplay accordingly. Research included, but not limited to, game design principles, Unity 3D development, and Arduino integration.',
    image: research_breatheImg,// Same image here as project image– I'd like people to be able to link it back to the project listed above
    date: 'January 2025 - Present',
    demo_link: '',// playbreathe.com
    research_link: '',// No research paper formed yet -- see pink paper on desk
  },
  {
    name: 'Fitness App',
    advised_under: 'Self directed with mentor guidance under Dr. Christopher Summa (Bioinformatics & Machine Learning Lab)',
    presentation: '',// None yet, in-progress; vision board for now?
    description: 'Researched how to create a fitness app that uses visualization to help users stay motivated on their fitness journey. Researched mobile app development frameworks, databases, and exercise tracking methods, plus started development on the application.',
    image: research_fitnessappImg,
    date: 'January 2025 - May 2025',// Would like to continue working on this when I get a chance
    demo_link: '',// Not available yet, in-progress
    research_link: '',// No research paper formed yet
  },
];

const awards = [
  /*{
    name: '',
    placement: '',
    award: '',
    description: '',
    image: placeholderImg,
    date: '',
    source_code_link: '',
    demo_link: '',
    media_link: '',
  },*/
  {
    name: '⚡️ StartupUNO',
    placement: '🥇 1st: $10,000 USD + 🏆 Audience Favorite',
    award: '$1,500 USD',
    description: 'Our team of three competed against 36 other teams at the University of New Orleans, creating a business plan and prototype for our video game, Chamo Chameleon, which is aimed at helping children increase their emotional intelligence through gameplay.',
    image: startupunoImg,
    date: 'November 2024',
    source_code_link: 'https://github.com/Jenspi/CamoChameleon',
    demo_link: 'https://github.com/Jenspi/CamoChameleon/blob/main/Startup/StartupUNO-2024.pdf',
    media_link: 'https://thebeachuno.org/startupuno/',
  },
  {
    name: '🌐 AT&T Hackathon',
    placement: '🥇 1st',
    award: '$6,000 USD',
    description: 'Our team of three competed nationwide in AT&T\'s EmpowHer Hackathon, creating a website for our proposed art app, Dynamic Sketch, given the theme: create an engaging digital experience for AT&T\'s 5G and fiber expansion.',
    image: attImg,
    date: 'April 2023',
    source_code_link: 'https://github.com/shakkalaa/Kayjen-Hacketeers?tab=readme-ov-file',
    demo_link: 'https://shakkalaa.github.io/Kayjen-Hacketeers/',
    media_link: 'https://life.att.jobs/college-students-empowher-hackathon/',
  },
  {
    name: '💡 InnovateUNO',
    placement: '🥇 1st',
    award: '$200 USD',
    description: 'Our team of three researched and developed a mobile app, ScholarUp, that was presented at UNO\'s annual research symposium, InnovateUNO, along with 100 other students and faculty.',
    image: innovateunoImg,
    date: 'November 2023',
    source_code_link: 'https://github.com/Jenspi/ScholarUp/',
    demo_link: 'https://github.com/Jenspi/ScholarUp/',
    media_link: 'https://www.uno.edu/innovateuno/winners',
  },
];

// TODO (in progress):
const blog = [
  // Game journals, devlogs, 3090 VR/AR history (paper, presentation), Documentation workshop, Case studies (scholarup, breathe), VR Modding, What is a game jam at UNO like?, what is UNO IGDA like?
  /*{
    // may not need some of these fields
    name: '',
    description: '',
    image: placeholderImg,
    date: '',
    source_code_link: '',
    demo_link: '',
    media_link: '',
  },*/
  // {
  //   // may not need some of these fields
  //   name: '',
  //   blog_type: 'Game Journal',
  //   description: '',
  //   image: gamejournal_ow2Img,
  //   date: '',
  //   source_code_link: '',
  //   demo_link: '',
  //   media_link: '',
  // },
  // {
  //   // may not need some of these fields
  //   name: '',
  //   blog_type: 'Case Study',
  //   description: '',
  //   image: '',
  //   date: '',
  //   source_code_link: '',
  //   demo_link: '',
  //   media_link: '',
  // },
  // {
  //   // may not need some of these fields
  //   name: '',
  //   blog_type: 'VR/AR History & Future Presentation',
  //   description: '',
  //   image: vrarhistoryImg,
  //   date: '',
  //   source_code_link: '',
  //   demo_link: '',
  //   media_link: '',
  // },
  // {
  //   // may not need some of these fields
  //   name: '',
  //   blog_type: 'Workshop',
  //   description: '',
  //   image: documentationWorkshopImg,
  //   date: '',
  //   source_code_link: '',
  //   demo_link: '',
  //   media_link: '',
  // },
  // {
  //   // may not need some of these fields
  //   name: '',
  //   blog_type: 'Blog Post',
  //   description: '',
  //   image: '',
  //   date: '',
  //   source_code_link: '',
  //   demo_link: '',
  //   media_link: '',
  // },
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
  research,
  // blog,
};
