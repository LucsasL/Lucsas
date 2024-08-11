// Section Components Imports
import Introsect from "./Introsect";
import Services from "./Services";
import About from "./About";
import Areas from "./Areas";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import { useEffect } from "react";

function Main() {
  useEffect(() => {
    window.addEventListener("beforeunload", window.scrollTo(0, 0, "auto"));
    window.addEventListener("onload", window.scrollTo(0, 0, "auto"));
  })

  return (
    <>
      <main>
        <div>
          <Introsect />
          <Services />
          <About />
          <Areas />
          <Skills />
          <Portfolio />
          <Contact />
        </div>
      </main>
    </>
  );
}

export default Main;
