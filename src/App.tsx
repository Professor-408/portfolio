import React from 'react';
import Navigation from './components/Navigation';
import ScrollProgress from './components/ScrollProgress';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <ScrollProgress />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Hobbies />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-8">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2024 Mayank Raj. Built with React, TypeScript, and Tailwind CSS.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Designed and developed with 💙 for innovation and excellence.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;