// Image Import
import code from "../img/codeIntro.png";
import lucsas from "../img/Lucsas.webp";
import webDev from "../img/webDev.webp";

import marknow from "../img/marknow-proj.png";
import everyshop from "../img/everyshop-proj.png";

import seo from "../img/setting.png";
import design from "../img/web-developer.png";
import webStructure from "../img/web-structure.png";

// Tech Stack Images Import
import html from "../img/html5.webp";
import css from "../img/css3.webp";
import ts from "../img/typescript.webp";
import js from "../img/JS.webp";
import react from "../img/react.webp";
import sass from "../img/sass.webp";
import python from "../img/python.webp";
import jest from "../img/jest.webp";
import gsap from "../img/gsap.webp";
import redux from "../img/redux.webp";
import git from "../img/git.webp";

import htmlBig from "../img/html5-big.webp";
import cssBig from "../img/css-big.webp";
import jsBig from "../img/JS-big.webp";
import tsBig from "../img/typescript-big.webp";
import reactBig from "../img/react-big.webp";
import sassBig from "../img/sass-big.webp";
import jestBig from "../img/jest-big.webp";
import reduxBig from "../img/redux-big.webp";
import gsapBig from "../img/gsap-big.webp";
import gitBig from "../img/git-big.webp";

// Social Media Image Import
import instaLogo from "../img/instagram-social.webp";
import githubLogo from "../img/github-social.webp";
import linkedinLogo from "../img/linkedin-social.webp";
import twitterLogo from "../img/twitter-social.webp";

// Components Data
export const contentWebDevPortfolio = {};

export const webNavOptions = ["Home", "About", "Skills", "Projects", "Contact"];
export const webNavOptionsLink = [
  "intro",
  "services",
  "skills",
  "portfolio",
  "contact",
];

export const webIntroSect = {
  info: {
    h1Span1: "Sup, I'm",
    h1Span2: "Lucsas",
    h1Span3: "Lucas Lira",
    text: "I create and optimize websites with React and JavaScript,delivering the best to make good software that solves real problems.",
    downloadButt: "Download Resume",
  },
  introImg: code,
  socialMedias: [
    {
      link: "https://www.instagram.com/lucsas.l/",
      name: "Lucsas Instagram",
      img: instaLogo,
    },
    {
      link: "http://github.com/lucsasl",
      name: "Lucsas Github",
      img: githubLogo,
    },
    {
      link: "https://www.linkedin.com/in/lucsas/?locale=en_US",
      name: "Lucsas Linkedin",
      img: linkedinLogo,
    },
    {
      link: "https://twitter.com/LucsasL",
      name: "Lucsas Twitter",
      img: twitterLogo,
    },
  ],
};

export const webServiceSect = {
  sectTitle: "In what can I help you?",
  servBoxes: [
    {
      title: "Semantics and SEO",
      text: "Structuring a website semantically, respecting the basic concepts of SEO and giving meaning to the components and objects of a website.",
      img: seo,
    },
    {
      title: "Responsive Design",
      text: "Giving shapes and layouts that work in every way and applying medias that work respecting performance, making your site adapt to all sizes and devices, showing your presence everywhere.",
      img: design,
    },
    {
      title: "Dynamic Application",
      text: "Developing websites with an array of different technologies, from technologies that build simple components to others that make complex structures with great architecture.",
      img: webStructure,
    },
  ],
};

export const webAboutSect = {
  sectTitle: "Hi, My name is Lucas Lira",
  aboutText: [
    "I work as a Front-End Web Developer, my expertise lies in crafting dynamic, visually appealing, and user-friendly web applications.",
    "Since I began, I've been studying topics in the field of programming for a while now, always looking to improve and deliver what is necessary to enhance my applications. My GitHub shows how much effort I put into really understanding the technologies.",
    "Having gained substantial experience in my abilities, I am now looking to work as a Developer. My job and commitment goes to give results, whether this being coding, projecting, or giving ideas.",
    "What do you thing? Can we grow together?",
  ],
  aboutImg: lucsas,
};

export const webSkillsSect = {
  sectTitle: "Tech stacks that I've worked with:",
  sectImg: webDev,
  areaDesc:
    "I have honed my skills in HTML, CSS, JavaScript, React JS, GSAP, Redux, and Git.",
  techStack: {
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "SASS",
      "GSAP",
      "Jest",
      "Redux",
      "Python",
      "Git",
    ],
    imgs: [html, css, js, ts, react, sass, gsap, jest, redux, python, git],
    techDesc: [
      "The technology that gives meaning to websites through tags, building the document that you see in the browser.",
      "The combination between the HTML tags and stylesheets of CSS do the work for static websites, making possible to add layouts, positions, responsiveness and animations.",
      "The technology that make things more interesting and add relevant features to a dynamic experience. With all of it's libraries, frameworks and DOM Manipulation bringing value, making the tech essential for web development.",
      "Great Architecture and organization is what builds React JS, A technology that not only bring all the features of HTML, CSS and JavaScript combined, but enhance it as well, bringing state management, routers, and even more abstraction to your app.",
      "Animation to your website ",
      "Preprocessor of CSS",
      "State Management that makes the structure more put together",
      "An essential tool for project management and version control,",
    ],
  },
};

export const webProjectsSect = {
  sectTitle: "In what projects did you work?",
  projects: [
    {
      projLink: "https://marknow-lemon.vercel.app/",
      projTitle: "MARKNOW",
      projSubtitle: "A Digital Marketing Agency that brings the success",
      projDesc:
        "MARKNOW is a web project showcasing a digital marketing company that has great feats and partners. Fully build with React JS and it's technologies. It has several features, such as Hooks, States and Routers. | WORK IN PROGRESS",
      projImgDesc: "Markdown project image",
      techStack: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React JS",
        "SASS",
        "GSAP",
        "Jest",
        "Git",
      ],
      techStackImg: [
        htmlBig,
        cssBig,
        jsBig,
        tsBig,
        reactBig,
        sassBig,
        gsapBig,
        jestBig,
        gitBig,
      ],
      projImg: marknow,
    },
    {
      projLink: "https://every-shop.vercel.app/",
      projTitle: "Everyshop",
      projSubtitle: "A shop that sells everything",
      projDesc:
        "EVERYSHOP is a web project of a shop that sells everything. Developed in React JS including SASS and responsive design. | WORK IN PROGRESS",
      projImgDesc: "Everyshop project image",
      techStack: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React JS",
        "SASS",
        "GSAP",
        "Redux",
        "Jest",
        "Git",
      ],
      techStackImg: [
        htmlBig,
        cssBig,
        jsBig,
        tsBig,
        reactBig,
        sassBig,
        gsapBig,
        reduxBig,
        jestBig,
        gitBig,
      ],
      projImg: everyshop,
    },
  ],
};

export const webContactSect = {
  sectTitle: "Want to make your business software real? Let's grow together!",
};
