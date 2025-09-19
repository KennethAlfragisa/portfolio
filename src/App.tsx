import React from 'react';
import { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Organizations from './components/Organizations';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [pageEnterAnimation, setPageEnterAnimation] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => {
      setPageEnterAnimation(true);
    }, 200);
    setTimeout(() => {
      setShowContent(true);
    }, 400);
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className={`bg-gray-900 text-white min-h-screen transition-all duration-1000 ease-out ${
      showContent ? 'opacity-100 translate-y-0' : pageEnterAnimation ? 'opacity-0 translate-y-8' : 'opacity-0 translate-y-16'
    }`}>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Education />
        <Skills />
        <Organizations />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;