import { useState, useEffect, useRef } from "react";
import { webProjectsSect } from "../utils/data";

// Components Import
import projectCont from "../components/PortfolioSectComps/projectCont";

function Portfolio() {
  const [projectBoxIntersect, setProjectBoxIntersect] = useState(false);
  const project = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setProjectBoxIntersect(entry.isIntersecting);
        }
      });
    });

    observer.observe(project.current);
  }, [projectBoxIntersect]);

  const changeVisibility = () => {
    return projectBoxIntersect
      ? {
          opacity: 1,
          transition: "all 1s ease",
        }
      : {
          opacity: 0,
          transition: "all 1s ease",
        };
  };

  return (
    <>
      <section id="portfolio">
        <div>
          <div className="blockquote" ref={project} style={changeVisibility()}>
            <h1 className="big">In what projects have you used your skills?</h1>
          </div>

          <div className="projCont">
            {webProjectsSect.projects.map(
              (
                projLink,
                projTitle,
                projSubtitle,
                projDesc,
                projImgDesc,
                techStack,
                techStackImg,
                projImg
              ) => {
                return (
                  <projectCont
                    value={{
                      projLink,
                      projTitle,
                      projSubtitle,
                      projDesc,
                      projImgDesc,
                      techStack,
                      techStackImg,
                      projImg,
                    }}
                  />
                );
              }
            )}
          </div>

          <div className="blockquote">
            <h4 className="big">More projects coming soon...</h4>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
