import React, { useEffect } from "react";
import "./App.css";
import { Toaster } from "sonner";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import TechStack from "./sections/TechStack";
import Projects from "./sections/Projects";
import WhyQuorex from "./sections/WhyQuorex";
import Flexibility from "./sections/Flexibility";
import Contact from "./sections/Contact";

function App() {
  // Custom cursor
  useEffect(() => {
    const cursor = document.getElementById('cursor');
    const ring = document.getElementById('cursorRing');
    if (!cursor || !ring) return;

    const move = (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top  = e.clientY + 'px';
      setTimeout(() => {
        ring.style.left = e.clientX + 'px';
        ring.style.top  = e.clientY + 'px';
      }, 60);
    };

    const grow = () => {
      cursor.style.transform = 'translate(-50%,-50%) scale(2)';
      ring.style.width  = '52px';
      ring.style.height = '52px';
      ring.style.borderColor = 'rgba(108,99,255,0.9)';
    };
    const shrink = () => {
      cursor.style.transform = 'translate(-50%,-50%) scale(1)';
      ring.style.width  = '36px';
      ring.style.height = '36px';
      ring.style.borderColor = 'rgba(108,99,255,0.5)';
    };

    document.addEventListener('mousemove', move);
    document.querySelectorAll('a, button, .hoverable').forEach(el => {
      el.addEventListener('mouseenter', grow);
      el.addEventListener('mouseleave', shrink);
    });

    // Scroll reveal
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) setTimeout(() => e.target.classList.add('visible'), i * 80);
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

    return () => document.removeEventListener('mousemove', move);
  }, []);

  return (
    <div className="App bg-[#050507] min-h-screen">
      {/* Custom Cursor */}
      <div className="cursor" id="cursor" />
      <div className="cursor-ring" id="cursorRing" />

      <Header />
      <main>
        <Hero />
        <Services />
        <TechStack />
        <Projects />
        <WhyQuorex />
        <Flexibility />
        <Contact />
      </main>
      <Footer />
      <Toaster richColors position="bottom-right" />
    </div>
  );
}

export default App;
