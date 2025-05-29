import { Navbar } from "../components/Navbar";
import { About } from "../components/sections/About";
import { Contact } from "../components/sections/Contact";
import { Home } from "../components/sections/Home";
import { Projects } from "../components/sections/Projects";
import { frontendProjects, fullstackProjects } from "../data/projects";

export const AppHome=()=> {
  return (
    <>
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-white scroll-smooth">
      <Navbar />
      <main className="flex-grow">
        <Home />
        <About />
        <Projects projects={fullstackProjects} title="Fullstack Projects" />
        <Projects projects={frontendProjects} title="Frontend Projects"/>
        <Contact />
      </main>
    </div>
    </>
  );
}