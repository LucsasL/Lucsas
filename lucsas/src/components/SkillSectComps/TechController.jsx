// Hooks Import
import { useState, useEffect, useContext } from "react";

// Context Import
import { Data } from "../../sections/Skills";

// Data Import
import { webSkillsSect } from "../../utils/data";
const { techStack } = webSkillsSect;
// const plusJakartaSans = "Plus Jakarta Sans";

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "change_tech_HTML":
//       return {
//         ...state,
//         content: {
//           title: "HTML",
//           text: "The technology that gives meaning to websites through tags, building the document that you see in the browser.",
//           textLink: "",
//         },
//       };

//     case "change_tech_CSS":
//       return {
//         ...state,
//         basicSettings: {
//           bg: "#060606",
//           color: "white",
//           font: "none",
//         },

//         header: {
//           headerPadding: "20px",
//           headerMargin: "20px",
//           headerBoxShadow:
//             "5px 5px 15px 5px rgba(0, 0, 0, 0.488), -2px -2px 2px rgba(255, 255, 255, .3), 0px 15px 10px rgba(0, 0, 0, 0.488)",
//         },

//         text: {
//           textSize: "1.5em",
//           textLine: "2em",
//         },

//         links: {
//           aDecoration: "none",
//           aDisplay: "inline",
//           aBg: "linear-gradient(to right, blue, #8000ff)",
//           aColor: "white",
//           aPadding: "12px 20px",
//           aBorderRadius: "10px",
//         },

//         content: {
//           title: "CSS",
//           text: "A combination with the stylesheets of HTML and CSS do the work for static websites, making possible to add layouts, positions, responsiveness and animations.",
//           textLink: "",
//         },
//       };

//     case "change_tech_JavaScript":
//       return {
//         ...state,
//         basicSettings: {
//           bg: "#060606",
//           color: "white",
//           font: "none",
//         },

//         header: {
//           headerPadding: "20px",
//           headerMargin: "20px",
//           headerBoxShadow:
//             "5px 5px 15px 5px rgba(0, 0, 0, 0.488), -2px -2px 2px rgba(255, 255, 255, .3), 0px 15px 10px rgba(0, 0, 0, 0.488)",
//         },

//         text: {
//           textSize: "1.5em",
//           textLine: "2em",
//         },

//         links: {
//           aDecoration: "none",
//           aDisplay: "inline",
//           aBg: "linear-gradient(to right, blue, #8000ff)",
//           aColor: "white",
//           aPadding: "12px 20px",
//           aBorderRadius: "10px",
//         },

//         content: {
//           title: "JavaScript",
//           text: "The technology that make things more interesting and add relevant features to a dynamic experience. With all of it's libraries, frameworks and DOM Manipulation bringing value, making the tech essential for web development.",
//           textLink: "",
//         },
//       };

//     case "change_tech_TypeScript":
//       return {
//         ...state,
//         basicSettings: {
//           bg: "#060606",
//           color: "white",
//           font: "none",
//         },

//         header: {
//           headerPadding: "20px",
//           headerMargin: "20px",
//           headerBoxShadow:
//             "5px 5px 15px 5px rgba(0, 0, 0, 0.488), -2px -2px 2px rgba(255, 255, 255, .3), 0px 15px 10px rgba(0, 0, 0, 0.488)",
//         },

//         text: {
//           textSize: "1.5em",
//           textLine: "2em",
//         },

//         links: {
//           aDecoration: "none",
//           aDisplay: "inline",
//           aBg: "linear-gradient(to right, blue, #8000ff)",
//           aColor: "white",
//           aPadding: "12px 20px",
//           aBorderRadius: "10px",
//         },

//         content: {
//           title: "TypeScript",
//           text: "Work In Progress",
//           textLink: "",
//         },
//       };

//     case "change_tech_React":
//       return {
//         ...state,
//         basicSettings: {
//           bg: "#060606",
//           color: "white",
//           font: "none",
//         },

//         header: {
//           headerPadding: "20px",
//           headerMargin: "20px",
//           headerBoxShadow:
//             "5px 5px 15px 5px rgba(0, 0, 0, 0.488), -2px -2px 2px rgba(255, 255, 255, .3), 0px 15px 10px rgba(0, 0, 0, 0.488)",
//         },

//         text: {
//           textSize: "1.5em",
//           textLine: "2em",
//         },

//         links: {
//           aDecoration: "none",
//           aDisplay: "inline",
//           aBg: "linear-gradient(to right, blue, #8000ff)",
//           aColor: "white",
//           aPadding: "12px 20px",
//           aBorderRadius: "10px",
//         },

//         content: {
//           title: "React JS",
//           text: "Great Architecture and organization is what builds React JS, A technology that not only bring all the features of HTML, CSS and JavaScript combined, but enhance i as well, bringing state management, routers, and even more abstraction to your app.",
//           textLink: "",
//         },
//       };

//     case "change_tech_SASS":
//       return {
//         ...state,
//         basicSettings: {
//           bg: "#060606",
//           color: "white",
//           font: "none",
//         },

//         header: {
//           headerPadding: "20px",
//           headerMargin: "20px",
//           headerBoxShadow:
//             "5px 5px 15px 5px rgba(0, 0, 0, 0.488), -2px -2px 2px rgba(255, 255, 255, .3), 0px 15px 10px rgba(0, 0, 0, 0.488)",
//         },

//         text: {
//           textSize: "1.5em",
//           textLine: "2em",
//         },

//         links: {
//           aDecoration: "none",
//           aDisplay: "inline",
//           aBg: "linear-gradient(to right, blue, #8000ff)",
//           aColor: "white",
//           aPadding: "12px 20px",
//           aBorderRadius: "10px",
//         },

//         content: {
//           title: "SASS",
//           text: "The technology that make things more interesting and add relevant features to a dynamic experience. With all of it's libraries, frameworks and DOM Manipulation bringing value, making the tech essential for web development.",
//           textLink: "",
//         },
//       };

//     case "change_tech_GSAP":
//       return {
//         ...state,
//         basicSettings: {
//           bg: "#060606",
//           color: "white",
//           font: "none",
//         },

//         header: {
//           headerPadding: "20px",
//           headerMargin: "20px",
//           headerBoxShadow:
//             "5px 5px 15px 5px rgba(0, 0, 0, 0.488), -2px -2px 2px rgba(255, 255, 255, .3), 0px 15px 10px rgba(0, 0, 0, 0.488)",
//         },

//         text: {
//           textSize: "1.5em",
//           textLine: "2em",
//         },

//         links: {
//           aDecoration: "none",
//           aDisplay: "inline",
//           aBg: "linear-gradient(to right, blue, #8000ff)",
//           aColor: "white",
//           aPadding: "12px 20px",
//           aBorderRadius: "10px",
//         },

//         content: {
//           title: "GSAP",
//           text: "Animation to your website ",
//           textLink: "",
//         },
//       };

//     case "change_tech_Jest":
//       return {
//         ...state,
//         basicSettings: {
//           bg: "#060606",
//           color: "white",
//           font: "none",
//         },

//         header: {
//           headerPadding: "20px",
//           headerMargin: "20px",
//           headerBoxShadow:
//             "5px 5px 15px 5px rgba(0, 0, 0, 0.488), -2px -2px 2px rgba(255, 255, 255, .3), 0px 15px 10px rgba(0, 0, 0, 0.488)",
//         },

//         text: {
//           textSize: "1.5em",
//           textLine: "2em",
//         },

//         links: {
//           aDecoration: "none",
//           aDisplay: "inline",
//           aBg: "linear-gradient(to right, blue, #8000ff)",
//           aColor: "white",
//           aPadding: "12px 20px",
//           aBorderRadius: "10px",
//         },

//         content: {
//           title: "Jest",
//           text: "The technology that make things more interesting and add relevant features to a dynamic experience. With all of it's libraries, frameworks and DOM Manipulation bringing value, making the tech essential for web development.",
//           textLink: "",
//         },
//       };

//     case "change_tech_Redux":
//       return {
//         ...state,
//         basicSettings: {
//           bg: "#060606",
//           color: "white",
//           font: "none",
//         },

//         header: {
//           headerPadding: "20px",
//           headerMargin: "20px",
//           headerBoxShadow:
//             "5px 5px 15px 5px rgba(0, 0, 0, 0.488), -2px -2px 2px rgba(255, 255, 255, .3), 0px 15px 10px rgba(0, 0, 0, 0.488)",
//         },

//         text: {
//           textSize: "1.5em",
//           textLine: "2em",
//         },

//         links: {
//           aDecoration: "none",
//           aDisplay: "inline",
//           aBg: "linear-gradient(to right, blue, #8000ff)",
//           aColor: "white",
//           aPadding: "12px 20px",
//           aBorderRadius: "10px",
//         },

//         content: {
//           title: "Redux",
//           text: "State Management that makes the structure more put together",
//           textLink: "",
//         },
//       };

//     case "change_tech_Python":
//       return {
//         ...state,
//         basicSettings: {
//           bg: "#060606",
//           color: "white",
//           font: "none",
//         },

//         header: {
//           headerPadding: "20px",
//           headerMargin: "20px",
//           headerBoxShadow:
//             "5px 5px 15px 5px rgba(0, 0, 0, 0.488), -2px -2px 2px rgba(255, 255, 255, .3), 0px 15px 10px rgba(0, 0, 0, 0.488)",
//         },

//         text: {
//           textSize: "1.5em",
//           textLine: "2em",
//         },

//         links: {
//           aDecoration: "none",
//           aDisplay: "inline",
//           aBg: "linear-gradient(to right, blue, #8000ff)",
//           aColor: "white",
//           aPadding: "12px 20px",
//           aBorderRadius: "10px",
//         },

//         content: {
//           title: "Python",
//           text: "The technology that make things more interesting and add relevant features to a dynamic experience. With all of it's libraries, frameworks and DOM Manipulation bringing value, making the tech essential for web development.",
//           textLink: "",
//         },
//       };

//     case "change_tech_Git":
//       return {
//         ...state,
//         basicSettings: {
//           bg: "#060606",
//           color: "white",
//           font: "none",
//         },

//         header: {
//           headerPadding: "20px",
//           headerMargin: "20px",
//           headerBoxShadow:
//             "5px 5px 15px 5px rgba(0, 0, 0, 0.488), -2px -2px 2px rgba(255, 255, 255, .3), 0px 15px 10px rgba(0, 0, 0, 0.488)",
//         },

//         text: {
//           textSize: "1.5em",
//           textLine: "2em",
//         },

//         links: {
//           aDecoration: "none",
//           aDisplay: "inline",
//           aBg: "linear-gradient(to right, blue, #8000ff)",
//           aColor: "white",
//           aPadding: "12px 20px",
//           aBorderRadius: "10px",
//         },

//         content: {
//           title: "Git",
//           text: "An essential tool for project management and version control,",
//           textLink: "",
//         },
//       };

//     default:
//       return state;
//   }
// };

function Skills() {
  const [infoIntersect, setInfoIntersect] = useState(false);
  const [techSelected, dispatch, skillSect] = useContext(Data);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInfoIntersect(entry.isIntersecting);
        } else {
          setInfoIntersect(entry.isIntersecting);
        }
      });
    });

    observer.observe(skillSect.current);
  }, [infoIntersect, skillSect]);

  const changeTech = (tech) => {
    dispatch({ type: `change_tech_${tech}` });
  };

  const changeVisibility = (side) => {
    return infoIntersect
      ? {
          opacity: 1,
          transition: "all .5s ease",
        }
      : {
          opacity: 0,
          transition: "all .5s ease",
          transform: `translateX(${side})`,
        };
  };

  return (
    <>
      <div
        className="techStack"
        style={changeVisibility("-100%")}
      >
        {techStack.imgs.map((t, index) => {
          return (
            <abbr title={techStack.tech[index]} key={index}>
              <button
                className="tech"
                onClick={() => changeTech(techStack.tech[index])}
                style={{ boxShadow: techSelected.boxShadow }}
              >
                <picture>
                  <img src={t} alt={techStack.tech[index]} />
                </picture>
              </button>
            </abbr>
          );
        })}
      </div>
    </>
  );
}

export default Skills;
