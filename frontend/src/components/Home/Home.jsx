import React from 'react';

import Hero from '../layout/Hero/Hero';
import ThinksIDo from '../layout/ThinksIDo/ThinksIDo';
import AboutMe from '../layout/AboutMe/AboutMe';
import Skills from '../layout/Skills/Skills';
import Projects from '../layout/Projects/Projects';
import ContactMe from '../layout/ContactMe/ContactMe';

export default function Home() {
  return (
    <div>
      <Hero />
      <section>
        <ThinksIDo />
      </section>
      <section>
        <AboutMe />
      </section>
      <section>
        <Skills />
      </section>
      <section>
        <Projects />
      </section>
      <section>
        <ContactMe />
      </section>
    </div>
  );
}
