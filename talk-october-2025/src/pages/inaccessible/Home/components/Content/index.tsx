import AboutMe from './AboutMe';
import Contact from './Contact';
import Education from './Education';
import Experience from './Experience';
import Languages from './Languages';
import Skills from './Skills';

export default function Content() {
  return (
    <div id="content" className="px-4 md:px-60 flex flex-col gap-12">
      <AboutMe />
      <Experience />
      <Education />
      <Skills />
      <Languages />
      <Contact />
    </div>
  );
}
