import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import { Toaster } from "sonner";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";

// ScrollToHash: handles navigation to /#section from other pages
const ScrollToHash = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      // Wait for the page to render, then scroll
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [pathname, hash]);
  return null;
};

// Reveal observer — re-triggers on route change
const RevealObserver = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) setTimeout(() => e.target.classList.add('visible'), i * 80);
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => {
      el.classList.remove('visible'); // reset for re-entry
      obs.observe(el);
    });
    return () => obs.disconnect();
  }, [pathname]);
  return null;
};

function AppContent() {
  const [loading, setLoading] = useState(true);

  // Custom cursor
  useEffect(() => {
    if (loading) return;

    const cursor = document.getElementById('cursor');
    const ring = document.getElementById('cursorRing');
    if (!cursor || !ring) return;

    const move = (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      setTimeout(() => {
        ring.style.left = e.clientX + 'px';
        ring.style.top = e.clientY + 'px';
      }, 60);
    };

    const grow = () => {
      cursor.style.transform = 'translate(-50%,-50%) scale(2)';
      ring.style.width = '52px';
      ring.style.height = '52px';
      ring.style.borderColor = 'rgba(108,99,255,0.9)';
    };
    const shrink = () => {
      cursor.style.transform = 'translate(-50%,-50%) scale(1)';
      ring.style.width = '36px';
      ring.style.height = '36px';
      ring.style.borderColor = 'rgba(108,99,255,0.5)';
    };

    document.addEventListener('mousemove', move);
    document.querySelectorAll('a, button, .hoverable').forEach(el => {
      el.addEventListener('mouseenter', grow);
      el.addEventListener('mouseleave', shrink);
    });

    return () => {
      document.removeEventListener('mousemove', move);
      document.querySelectorAll('a, button, .hoverable').forEach(el => {
        el.removeEventListener('mouseenter', grow);
        el.removeEventListener('mouseleave', shrink);
      });
    };
  }, [loading]);

  return (
    <div className={`App bg-[#050507] min-h-screen ${loading ? 'overflow-hidden h-screen' : ''}`}>
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* Custom Cursor */}
      <div className={`cursor ${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`} id="cursor" />
      <div className={`cursor-ring ${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`} id="cursorRing" />

      <ScrollToHash />
      <RevealObserver />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyecto/:slug" element={<ProjectDetail />} />
      </Routes>
      <Footer />
      <Toaster richColors position="bottom-right" />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
