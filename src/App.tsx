import React from 'react';
import { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Organizations from './components/Organizations';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => {
      setShowContent(true);
    }, 100);
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className={`bg-gray-900 text-white min-h-screen transition-opacity duration-500 ${
      showContent ? 'opacity-100' : 'opacity-0'
    }`}>
      <Header />
      <main>
        <Hero />
        <About />
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