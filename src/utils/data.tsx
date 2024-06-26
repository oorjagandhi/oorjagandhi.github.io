import {
    IoLogoJavascript,
    IoLogoHtml5,
    IoLogoReact,
    IoLogoNodejs,
  } from "react-icons/io5";
  import { RiTailwindCssFill } from "react-icons/ri";
  import {SiMongodb} from "react-icons/si";


  export interface ProfileData {
    name: string;
    tagline: string;
    jobTitle: string;
    location: string;
    yearsOfExperience: string;
    skills: string[];
    email: string;
    phone: string;
  }


  export const PROFILE_DATA: ProfileData = {
    name: "Oorja Gandhi",
    tagline: 'Passionate SWE student',
    jobTitle: "Software Engineer",
    location: "New Zealand",
    yearsOfExperience: "0",
    skills: [
        "React.js",
        "TypeScript",
        "HTML",
        "CSS",
        "Git",
        "Bootstrap",
        "Redux",
        "Node.js",
        "RESTful APIs",
    ],
    email: "oorjagandhi@gmail.com",
    phone: "+64 02108292845",
  };

  export const SKILLS = [
    {
        id: "01",
        icon: IoLogoJavascript,
        title: "JavaScript",
        comment: "High-level, interpreted programming language",
    },
    {
        id: "02",
        icon: IoLogoHtml5,
        title: "HTML",
        comment: "Markup language for the web",
    },
    {
        id: "03",
        icon: IoLogoReact,
        title: "React.js",
        comment: "JavaScript library for building user interfaces",
    },
    {
        id: "04",
        icon: IoLogoNodejs,
        title: "Node.js",
        comment: "JavaScript runtime built on Chrome's V8 JavaScript engine",
    },
    {
        id: "05",
        icon: SiMongodb,
        title: "MongoDB",
        comment: "NoSQL database program",
    },
  ];

  export const WORK_EXPERIENCE = [
    {
        id: "01",
        company: "Kip McGrath Education Centres",
        position: "Tutor",
        duration: "2022 - 2023",
        description: "Tutored students in English and Mathematics",
    },
  ];

  export const ABOUT_ME_DATA = {
    introduction: "Hi, I'm Oorja! I'm a Software Engineering student at the University of Auckland. I'm passionate about web development and I'm always looking for opportunities to learn and grow. I'm a quick learner and a team player, and I'm excited to contribute to projects that make a difference.",
    background: "I'm currently in my second year of university, studying towards a Bachelor of Engineering (Honours) in Software Engineering. I have experience with front-end and back-end technologies, and I'm always looking to expand my skillset. I'm a self-motivated individual who is always looking for ways to improve and grow.",
    skills: "I have experience with JavaScript, React.js, Node.js, MongoDB, HTML, CSS, and Git. I'm also familiar with Redux, Bootstrap, and RESTful APIs. I'm always looking to learn new technologies and improve my skills.",
    projects: "I've worked on a number of projects, including a weather app, a to-do list app, and a recipe app. I'm currently working on a personal portfolio website to showcase my work and skills. I'm always looking for new projects to work on and new challenges to tackle.",
    careerGoals: "In the future, I am to continue to grow as a software engineer and work on projects that make a difference. I'm passionate about using technology to solve real-world problems, and I'm excited to see where my career takes me.",
    };

