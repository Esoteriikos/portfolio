import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Certificates from '../components/Certificates';
import Awards from '../components/Awards';
import Publications from '../components/Publications';
import FadeInUp from '../components/FadeInUp'; 

export default function HomePage() {
  return (
    <main>
      <div id="hero" className="scroll-mt-16 md:scroll-mt-20">
        <Hero />
      </div>

      <FadeInUp><div id="about" className="scroll-mt-16 md:scroll-mt-20"><About /></div></FadeInUp>
      <FadeInUp delay={100}><div id="skills" className="scroll-mt-16 md:scroll-mt-20"><Skills /></div></FadeInUp>
      <FadeInUp delay={200}><div id="experience" className="scroll-mt-16 md:scroll-mt-20"><Experience /></div></FadeInUp>
      <FadeInUp delay={300}><div id="projects" className="scroll-mt-16 md:scroll-mt-20"><Projects /></div></FadeInUp>
      <FadeInUp delay={400}><div id="education" className="scroll-mt-16 md:scroll-mt-20"><Education /></div></FadeInUp>
      <FadeInUp delay={500}><div id="certificates" className="scroll-mt-16 md:scroll-mt-20"><Certificates /></div></FadeInUp>
      <FadeInUp delay={600}><div id="awards" className="scroll-mt-16 md:scroll-mt-20"><Awards /></div></FadeInUp>
      <FadeInUp delay={700}><div id="publications" className="scroll-mt-16 md:scroll-mt-20"><Publications /></div></FadeInUp>
      <FadeInUp delay={800}><div id="testimonials" className="scroll-mt-16 md:scroll-mt-20"><Testimonials /></div></FadeInUp>
      <FadeInUp delay={900}><div id="contact" className="scroll-mt-16 md:scroll-mt-20"><Contact /></div></FadeInUp>
    </main>
  );
}
