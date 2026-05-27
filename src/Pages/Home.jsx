import About from "../Sections/About";
import Contact from "../sections/Contact";
import Hero from "../Sections/Hero";
import Projects from "../Sections/Projects";
import Skills from "../Sections/Skills";


export default function Home() {
  return (
    <main>
     <Hero/>
     <About/>
     <Skills/>
     <Projects/>
     <Contact/>
    </main>
  );
}