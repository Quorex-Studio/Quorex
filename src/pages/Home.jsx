import React from 'react';
import Hero from '../sections/Hero';
import Services from '../sections/Services';
import TechStack from '../sections/TechStack';
import Projects from '../sections/Projects';
import WhyQuorex from '../sections/WhyQuorex';
import Flexibility from '../sections/Flexibility';
import Contact from '../sections/Contact';

const Home = () => (
  <main>
    <Hero />
    <Services />
    <TechStack />
    <Projects />
    <WhyQuorex />
    <Flexibility />
    <Contact />
  </main>
);

export default Home;
