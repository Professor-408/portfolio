import React from 'react';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import dp from '../dp.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
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
              <button className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 flex items-center gap-2">
                <Download className="w-5 h-5" />
                Download Resume
              </button>
              
              <div className="flex gap-3">
                <a href="#" className="p-3 bg-slate-800 hover:bg-slate-700 text-gray-300 hover:text-white rounded-lg transition-all duration-300 hover:scale-110">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 bg-slate-800 hover:bg-slate-700 text-gray-300 hover:text-white rounded-lg transition-all duration-300 hover:scale-110">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 bg-slate-800 hover:bg-slate-700 text-gray-300 hover:text-white rounded-lg transition-all duration-300 hover:scale-110">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-500 to-teal-500 p-1 animate-pulse">
                <div className="w-full h-full rounded-full bg-gray-700 flex items-center justify-center">
                  <div className="w-72 h-72 rounded-full bg-gradient-to-br from-slate-600 to-slate-700 flex items-center justify-center text-4xl font-bold text-white overflow-hidden">
                    <img src={dp} alt="Mayank Raj" className="w-full h-full object-cover rounded-full" />
                  </div>
                </div>
              </div>
              
              {/* Floating Animation */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-teal-500/20 rounded-full animate-bounce delay-150"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;