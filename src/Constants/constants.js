/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: constants.js
   Version: II
   Creation: 02/06/2023
   Last modification: 12/17/2025 (Jenny Spicer)
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
  ecommercedbImg,
  gamejournal_ow2Img,
  gamejournal_ptcgpImg,
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
  ecommercedbImg,
  gamejournal_ow2Img,
  gamejournal_ptcgpImg,
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
  {
    id: 'blog',
    title: 'Blog',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

// TODO (population in progress):
const projects = [
  // Mobile apps, networking, 
  /*{
    name: '<emoji> ',
    description: '',
    image: placeholderImg,
    stack: '',
    source_code_link: '',
    demo_link: '',
    demo_video: '',
    media_link: '',
    digital_prototype: '',
  },*/
  {
    name: '🫁 BREATHE',
    description: 'Step into the mind of Willow in this first-person psychological thriller. What began as an innocent infatuation with a local quickly twists into something dark and inescapable, and your own breathing will dictate your composure.',
    image: breatheImg,
    stack: 'Unity 3D, C#, Arduino, Embedded Systems',
    source_code_link: 'https://github.com/playBREATHE',// follow our org, not get code ;)
    demo_link: 'https://jenspi.itch.io/breathe',
    demo_video: '',// TODO: Teaser trailer in progress
    media_link: 'https://www.instagram.com/p/DJ939yHPtR6/?img_index=4',
    digital_prototype: 'https://youtu.be/bh5EvOrB7Q0',
  },
  {
    name: '💬 TCPChat 1.0',
    description: 'Terminal-based TCP chat with Client-Server Architecture and extensive error handling. Works on single machine or with multiple machines on same home network.',
    image: tcpchatImg,
    stack: 'Java, Sockets, Multithreading',
    source_code_link: 'https://github.com/Jenspi/TCPChat',
    demo_link: 'https://github.com/Jenspi/TCPChat/releases',
    demo_video: '',// TODO: demo in progress
  },
  {
    name: '🛍️ E-Commerce DBMS',
    description: 'Design schemas, manage data, run queries, and modularize code for easy reuse & testing. .    ༘˚⋆🛍️ ｡⋆ 🛒 ⋆ 𖦹.✧˚',
    image: ecommercedbImg,
    stack: 'PL/SQL, Java, Oracle SQL Developer, JDBC',
    source_code_link: 'https://github.com/Jenspi/databases',
    demo_link: 'https://github.com/Jenspi/databases?tab=readme-ov-file#-run-this-project-no-installation-required',
    demo_video: '',// TODO: do I want to do this?
  },
  {
    name: '🧮 Sorts',
    description: '',// TODO: in progress
    image: placeholderImg,// TODO: in progress
    stack: 'Unity 3D, C#',
    source_code_link: '',// TODO: in progress; do I want this public?
    demo_link: '',// TODO: in progress
    demo_video: '',// TODO: in progress
    digital_prototype: '',// TODO: do I have one?
  },
  {
    name: '🕳️ MORE PROJECTS LISTED SOON!',
    description: '',
    image: placeholderImg,
    stack: '',
    source_code_link: '',
    demo_link: '',
    demo_video: '',
    media_link: '',
    digital_prototype: '',
  },
];

// TODO (population in progress):
const research = [
  /*{
    name: '<emoji> ',
    advised_under: '<do not include advised_under field if self-advised>',
    self_advised: true <do not include if advised under someone>,
    self_directed: true <<do not include if directed under someone>,
    lab: '',
    presentation: '',
    description: '',
    image: placeholderImg,
    date: '',
    demo_link: '',
    demo_video:'',
    research_link: '',
    pitch: '',
    media_link: '',
    short_description: '',
    // tags: '',
  },*/
  {
    name: '📚 ScholarUp',
    self_advised: true,
    self_directed: true,
    presentation: '',// TODO: powerpoint in progress
    description: 'Researched UI/UX design principles and mobile development to create a study aid app helping university students organize academic resources and improve study habits.',
    image: research_scholarupImg,
    date: 'Aug. - Dec. 2024',
    demo_link: 'https://github.com/Jenspi/ScholarUp/?tab=readme-ov-file#-installation',// cannot package on github without adding to npm registry, making it an open-source library. Also can't find a way to host the live demo where it won't cost money. :(
    demo_video:'https://youtube.com/shorts/N6ICQ3HzqOQ?feature=share',
    research_link: 'https://github.com/Jenspi/ScholarUp/tree/main?tab=readme-ov-file#-scholarup-case-study',// TODO: paper in progress
    pitch: '',// --- TODO: milestone 2 converted into nice pdf or presentation in progress
    short_description: 'ScholarUp is your next fav. mobile study app! All the features you need to study consistently + successfully, with a meticulous color scheme of green/white/brown. 📄‧₊˚🖇️✩ ₊˚🎧⊹♡',
  },
  {
    name: '🦎 Camo Chameleon',
    advised_under: 'Dr. Shreya Banerjee',
    self_directed: true,
    lab: 'Humans, Hybrid AI, and Machines Lab',
    presentation: '',// TODO: powerpoint in progress
    description: 'Researched game design principles, Unity 3D development, and psychological studies on emotional intelligence to create an educational video game helping children improve emotional intelligence through cross-disciplinary collaboration.',
    image: research_camochameleonImg,
    date: 'Aug. 2024 - Jan. 2025',
    demo_link: '',// TODO: very small demo in progress
    demo_video:'',// TODO: demo in progress
    research_link: 'https://dl.acm.org/doi/10.24963/ijcai.2025/1062',
    pitch: 'https://www.canva.com/design/DAG7FvAd_lY/WwMWtCtZanij5pgyPFo1vQ/edit?utm_content=DAG7FvAd_lY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
    short_description: 'Camo Chameleon is a digital game that utilizes artificial intelligence to help improve children\'s emotional intelligence in a gamified approach.˙✧˖°🎮 ⋆｡˚🕹. ݁₊ ⊹ . ',
  },
  {
    // research still in progress
    name: '🫁 BREATHE',
    self_advised: true,
    self_directed: true,
    description: 'Ongoing research on creating an immersive psychological horror game that uses biofeedback through Arduino-integrated embedded systems to dynamically adapt gameplay, incorporating game design principles and Unity 3D development.',
    image: research_breatheImg,
    date: 'Jan. 2025 - Present',
    demo_link: 'https://jenspi.itch.io/breathe',
    research_link: '',// TODO: paper/presentation in progress
    pitch: 'https://www.canva.com/design/DAGd_wtc9KE/1VDfyXGm-PnF8Dr3A2_ZJw/edit?utm_content=DAGd_wtc9KE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
    short_description: 'Step right into this first-person psychological thriller with biofeedback. 🫁˚˖𓍢༄˖࿔ˎˊ˗',
  },
  {
    // research still in progress
    name: '🏋️ Fitness Tracker',
    advised_under: 'Dr. C. Summa',
    self_directed: true,
    lab: 'Bioinformatics & Machine Learning Lab',
    presentation: '',// TODO: presentation in progress
    description: 'Researched how to create a fitness app that uses visualization to help users stay motivated on their fitness journey. Researched mobile app development frameworks, databases, and exercise tracking methods, plus started development on the application.',
    image: research_fitnessappImg,
    date: 'Jan. - May 2025',
    demo_link: '',// TODO: interactive demo in progress
    demo_video:'',// TODO: demo video in progress
    research_link: '',// TODO: paper in progress
    pitch: '',// TODO: converting pitch files into presentable PDF or presentation in progress
    short_description: 'Track and visualize your fitness data right at your fingertips-- leave all of the dirty work to your app! Calisthenics, strength training, running.. There is something for everyone! ˙✧˖°👟 ༘ ⋆｡˚🎧',
  },
];

// TODO: go through and see what fields are already in projects, and what fields are being filled with the project and not specifically the award; easiest to look directly at site.
const awards = [
  /*{
    name: '<emoji> ',
    placement: '<🥇 or 🥈 or 🥉 or 🏅 or 🏆> <placement, ex. "1st">',
    award: '',
    description: '',
    image: placeholderImg,
    date: '',
    powerpoint: '',
    demo_video: '',
    // source_code_link: '',// not implemented at the moment; all current awards are listed as projects in projects section
    demo_link: '',
    media_link: '',
    see_in_projects: <true or false>,
    see_in_research: <true or false>,
    see_in_blog: <true or false>,
  },*/
  {
    name: '⚡️ StartupUNO',
    placement: '🥇 1st: $10,000 USD + 🏆 Audience Favorite',
    award: '$1,500 USD',
    description: 'Our team of three competed against 36 other teams at the University of New Orleans, creating a business plan and prototype for our video game, Chamo Chameleon, which is aimed at helping children increase their emotional intelligence through gameplay.',
    image: startupunoImg,
    date: 'November 2024',
    powerpoint: 'https://www.canva.com/design/DAG7FvAd_lY/WwMWtCtZanij5pgyPFo1vQ/edit?utm_content=DAG7FvAd_lY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
    // source_code_link: 'https://github.com/Jenspi/CamoChameleon', // this repo is private
    media_link: 'https://thebeachuno.org/startupuno/',
    see_in_projects: false,
    see_in_research: true,
    see_in_blog: false,
  },
  {
    name: '🌐 AT&T Hackathon',
    placement: '🥇 1st',
    award: '$6,000 USD',
    description: 'Our team of three competed nationwide in AT&T\'s EmpowHer Hackathon, creating a website for our proposed art app, Dynamic Sketch, given the theme: create an engaging digital experience for AT&T\'s 5G and fiber expansion.',
    image: attImg,
    date: 'April 2023',
    powerpoint: 'https://docs.google.com/presentation/d/1D47wPWVEd89Z6JNYUA9CNk1NAqs1kqAnsqeQHJaNg7o/edit?usp=sharing',
    demo_video: 'https://youtu.be/utTS4CBUfNw',
    demo_link: 'https://shakkalaa.github.io/Kayjen-Hacketeers/',
    media_link: 'https://life.att.jobs/college-students-empowher-hackathon/',
    see_in_projects: false,
    see_in_research: false,
    see_in_blog: false,
  },
  {
    name: '💡 InnovateUNO',
    placement: '🥇 1st',
    award: '$200 USD',
    description: 'Our team of three researched and developed a mobile app, ScholarUp, that was presented at UNO\'s annual research symposium, InnovateUNO, along with 100 other students and faculty.',
    image: innovateunoImg,
    date: 'November 2023',
    powerpoint: 'https://docs.google.com/presentation/d/17w2G4pYsliUlZ8SEmiXdHXObV6MG3XdAndcf3I_jJzw/edit?usp=sharing',
    media_link: 'https://www.uno.edu/innovateuno/winners',
    see_in_projects: false,
    see_in_research: true,
    // see_in_blog: <true or false>,// TODO: decide
  },
];

// TODO (population in progress)(field types in progress)(see todos doc on desktop):
const blog = [
  /*{
    // may not need some of these fields
    name: '<emoji> ',
    description: '',
    image: placeholderImg,
    date: '',
    source_code_link: '',
    demo_link: '',
    media_link: '',
    game_journal: '',
  },*/
  {
    // may not need some of these fields
    name: '',
    blog_type: '🎮 The Downfall of Overwatch: Overwatch 2',
    description: 'The downfall of the Overwatch franchise.',
    image: gamejournal_ow2Img,
    date: 'Fall 2024',
    source_code_link: '',
    demo_link: '',
    media_link: '',
    game_journal_link: 'https://drive.google.com/file/d/122coP7sfmYEJx7e0Sy3E4XWMwBMokfkL/view?usp=share_link',
  },
  {
    // may not need some of these fields
    name: '',
    blog_type: '🎮 The New Pokémon GO: Pokémon TCG Pocket',
    description: 'Pokemon TCG Pocket could be as popular as Pokemon GO.',
    image: gamejournal_ptcgpImg,
    date: 'Fall 2024',
    source_code_link: '',
    demo_link: '',
    media_link: '',
    game_journal_link: 'https://drive.google.com/file/d/1XdiLdyhwd7RL4bXczd8nPKyKZcCvNVhi/view?usp=share_link',
  },
  // {
  //   // may not need some of these fields
  //   name: '',
  //   blog_type: '🥽 VR/AR History & Future Presentation',
  //   description: 'Presentation given on the history and future of VR/AR technology.',
  //   image: vrarhistoryImg,
  //   date: '',
  //   source_code_link: '',
  //   demo_link: '',
  //   media_link: '',
  // },
  // {
  //   // may not need some of these fields
  //   name: '',
  //   blog_type: '📄 Documentation Workshop',
  //   description: 'Hosted a workshop on best practices for software documentation.',
  //   image: documentationWorkshopImg,
  //   date: '',
  //   source_code_link: '',
  //   demo_link: '',
  //   media_link: '',
  // },
  {
    name: '💭 MORE BLOGS LISTED SOON!',
    description: '',
    image: placeholderImg,
    stack: '',
    source_code_link: '',
    demo_link: '',
    demo_video: '',
    media_link: '',
    digital_prototype: '',
  },
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
  blog,
};
