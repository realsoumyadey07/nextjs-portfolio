import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero/>
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
  );
}
