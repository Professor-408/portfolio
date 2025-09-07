import React, { useState } from 'react';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import dp from '../dp.png';

const Hero = () => {
  const [flipped, setFlipped] = useState(false);
  const handleFlip = () => setFlipped(f => !f);
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Lines */}
      <div className="absolute top-1/4 left-0 w-full h-1 pointer-events-none z-0">
        <div className="w-2/3 mx-auto h-1 bg-gradient-to-r from-blue-400 via-teal-400 to-blue-400 rounded-full opacity-60 blur-sm animate-moveLine"></div>
      </div>
      <div className="absolute bottom-1/4 left-0 w-full h-1 pointer-events-none z-0">
        <div className="w-1/2 mx-auto h-1 bg-gradient-to-r from-teal-400 via-blue-400 to-teal-400 rounded-full opacity-60 blur-sm animate-moveLine-reverse"></div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23334155%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2220%22 cy=%2220%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Mayank
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                  Raj
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
                Final-Year CSE Student | DevOps & ML Enthusiast | Builder of Smart, Scalable Systems
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a
                href="/resume.pdf"
                download
                className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>
              
              <div className="flex gap-3">
                <a href="https://github.com/Professor-408" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 hover:bg-slate-700 text-gray-300 hover:text-white rounded-lg transition-all duration-300 hover:scale-110">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/mayank-raj-4a137a260/" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 hover:bg-slate-700 text-gray-300 hover:text-white rounded-lg transition-all duration-300 hover:scale-110">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Right Content - Floating Neon Ring DP */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={dp}
              alt="Mayank Raj"
              className="rounded-full w-72 h-72 object-cover border-4 border-gray-900 shadow-xl mt-4 transition-all duration-500 hover:scale-110 hover:shadow-[0_8px_32px_0_rgba(59,130,246,0.5),0_16px_64px_0_rgba(168,139,250,0.25)]"
              style={{ boxShadow: '0 4px 32px 0 #3B82F6AA' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;